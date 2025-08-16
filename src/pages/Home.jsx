// src/pages/Home.jsx
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation(["home", "common"]);

  return (
    <section style={{ maxWidth: 880, margin: "48px auto", textAlign: "center" }}>
      <h1 style={{ marginBottom: 12 }}>{t("home:title")}</h1>
      <p style={{ marginBottom: 24 }}>{t("home:description")}</p>
      <button style={{ padding: "10px 16px", borderRadius: 8 }}>{t("home:cta")}</button>
    </section>
  );
}
