// src/pages/Home.jsx (רק הדגמה לקטע שמשתמש בטקסטים)
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation(["home", "common"]); // נטעין את 'home' וגם 'common' לשימוש

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">
        {t("home:title")}
      </h1>
      <p className="text-slate-600 mb-6">{t("home:description")}</p>
      <button className="px-4 py-2 rounded bg-blue-600 text-white">
        {t("home:cta")}
      </button>
    </main>
  );
}
