import { useEffect, useState } from "react";
import Layout from "../components/layout";

export default function AdminDashboard() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch("/api/requests.list");
        const j = await r.json();
        setRows(j.requests || []);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Layout>
      <section className="max-w-5xl mx-auto mt-8 px-4">
        <h1 className="text-2xl font-bold mb-4">בקשות פעילות (Admin-Lite)</h1>
        {loading ? (
          <div className="animate-pulse space-y-2">
            <div className="h-6 bg-slate-200 rounded" />
            <div className="h-24 bg-slate-200 rounded" />
          </div>
        ) : (
          <div className="overflow-x-auto border rounded bg-white">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-2 text-start">#</th>
                  <th className="p-2 text-start">כותרת</th>
                  <th className="p-2 text-start">אזור</th>
                  <th className="p-2 text-start">תאריך</th>
                  <th className="p-2 text-start">קבצים</th>
                  <th className="p-2 text-start">הצעות</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.id} className="border-t">
                    <td className="p-2">{i + 1}</td>
                    <td className="p-2">{r.title}</td>
                    <td className="p-2">{r.region}</td>
                    <td className="p-2">{r.date}</td>
                    <td className="p-2">{r.files?.length || 0}</td>
                    <td className="p-2">
                      <a className="text-blue-600 underline" href={`/offers/${r.id}`}>לצפייה בהצעות</a>
                    </td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr><td className="p-3" colSpan={6}>אין בקשות להצגה.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </Layout>
  );
}
