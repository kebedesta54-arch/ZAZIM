import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";

export default function Offers() {
  const { requestId } = useParams();
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch(`/api/offers.list?id=${encodeURIComponent(requestId)}`);
        const j = await r.json();
        setOffers(j.offers || []);
      } finally {
        setLoading(false);
      }
    })();
  }, [requestId]);

  async function accept(offerId) {
    setInfo("");
    const r = await fetch("/api/offers.accept", {
      method: "POST",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify({ offerId, requestId })
    });
    const j = await r.json();
    if (j.ok) setInfo("ההצעה אושרה! (בשלב הבא נוסיף תשלום/חיבור צ׳אט)");
  }

  return (
    <Layout>
      <section className="max-w-3xl mx-auto mt-8 px-4">
        <h1 className="text-2xl font-bold mb-3">הצעות עבור בקשה: {requestId}</h1>
        {loading ? (
          <div className="animate-pulse space-y-2">
            <div className="h-6 bg-slate-200 rounded" />
            <div className="h-24 bg-slate-200 rounded" />
          </div>
        ) : (
          <div className="space-y-3">
            {offers.map((o) => (
              <div key={o.id} className="p-4 border rounded bg-white">
                <div className="font-semibold">{o.supplierName}</div>
                <div className="text-sm text-slate-600">
                  מחיר: ₪{o.price} • זמינות: {o.etaDays} ימים • אחריות: {o.warranty} • דירוג: {o.rating}
                </div>
                <div className="mt-3 flex gap-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={() => accept(o.id)}>
                    אשר הצעה
                  </button>
                </div>
              </div>
            ))}
            {offers.length === 0 && <div>אין הצעות זמינות כרגע.</div>}
            {info && <div className="p-3 rounded bg-green-50 text-green-700">{info}</div>}
          </div>
        )}
      </section>
    </Layout>
  );
}
