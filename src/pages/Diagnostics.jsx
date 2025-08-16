import { useTranslation } from "react-i18next";
import Layout from "../components/layout";
export default function Diagnostics() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="max-w-3xl">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{t("diagnostics.title")}</h1>
        <p className="mt-2 text-slate-700">{t("diagnostics.intro")}</p>

        <h3 className="mt-5 font-bold">{t("diagnostics.list_title")}</h3>
        <ul className="mt-2 list-disc ps-5 text-slate-700">
          {t("diagnostics.list", { returnObjects: true }).map((item, i) => (
            <li key={i} className="mb-1">{item}</li>
          ))}
        </ul>

        <a href="/contact" className="btn-primary mt-5 inline-flex">{t("diagnostics.cta")}</a>
      </div>
    </Layout>
  );
}
