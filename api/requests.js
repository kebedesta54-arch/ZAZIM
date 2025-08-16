import formidable from "formidable";
export const config = { api: { bodyParser: false } };

const ALLOWED = ["image/", "video/", "audio/"];
const MAX = 200 * 1024 * 1024; // 200MB

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok:false });

  const form = formidable({ multiples: true, maxFileSize: MAX });
  form.parse(req, (err, fields, files) => {
    if (err) return res.status(400).json({ ok:false, error:"Bad form" });

    const list = Array.isArray(files.files) ? files.files : (files.files ? [files.files] : []);
    for (const f of list) {
      const mime = f.mimetype || "";
      const okType = ALLOWED.some(p => mime.startsWith(p));
      if (!okType) return res.status(415).json({ ok:false, error:"Unsupported file type" });
      if (f.size > MAX) return res.status(413).json({ ok:false, error:"File too large" });
    }

    res.status(200).json({
      ok:true,
      received:{
        ...fields,
        files: list.map(f => ({ originalFilename:f.originalFilename, mimetype:f.mimetype, size:f.size }))
      }
    });
  });
}
