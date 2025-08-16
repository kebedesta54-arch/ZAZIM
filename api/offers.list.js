export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ ok: false });
  const id = req.query?.id || "";
  const offers = {
    rq_1001: [
      { id:"of_2001", supplierName:"משנעים פלוס", price:1850, etaDays:2, warranty:"7 ימים", rating:4.7 },
      { id:"of_2002", supplierName:"הובלות זריז",  price:1750, etaDays:3, warranty:"7 ימים", rating:4.5 }
    ],
    rq_1002: [
      { id:"of_2003", supplierName:"מובילי צפון", price:950, etaDays:1, warranty:"5 ימים", rating:4.6 }
    ]
  };
  res.status(200).json({ ok: true, offers: offers[id] || [] });
}
