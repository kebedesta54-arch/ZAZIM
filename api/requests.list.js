export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ ok: false });
  const data = [
    { id: "rq_1001", title: "מעבר דירה 4 חדרים", region: "מרכז", date: "2025-08-22", description: "קומה 4 ללא מעלית, חניה צמודה", files: [{ name:"salon.jpg", type:"image/jpeg", size:2300000 }] },
    { id: "rq_1002", title: "הובלת משרד קטן", region: "חיפה", date: "2025-08-24", description: "2 עמדות מחשב+מדפסות", files: [] }
  ];
  res.status(200).json({ ok: true, requests: data });
}
