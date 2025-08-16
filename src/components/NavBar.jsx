import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const { t, i18n } = useTranslation("common");

  const changeLang = (lng) => i18n.changeLanguage(lng);

  const linkStyle = ({ isActive }) => ({
    padding: "8px 12px",
    textDecoration: "none",
    borderRadius: 8,
    background: isActive ? "#e7f0ff" : "transparent",
  });

  return (
    <header style={{ display: "flex", gap: 12, padding: 12, alignItems: "center", borderBottom: "1px solid #eee" }}>
      <div style={{ fontWeight: 700 }}>{t("brand")}</div>

      <nav style={{ display: "flex", gap: 8 }}>
        <NavLink to="/" style={linkStyle}>{t("nav.home")}</NavLink>
        {/* <NavLink to="/diagnostics" style={linkStyle}>{t("nav.diagnostics")}</NavLink>
        <NavLink to="/movers" style={linkStyle}>{t("nav.movers")}</NavLink>
        <NavLink to="/contact" style={linkStyle}>{t("nav.contact")}</NavLink> */}
      </nav>

      <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
        <button onClick={() => changeLang("he")}>עברית</button>
        <button onClick={() => changeLang("en")}>English</button>
        <button onClick={() => changeLang("ru")}>Рус</button>
        <button onClick={() => changeLang("ar")}>عربي</button>
      </div>
    </header>
  );
}
const { t } = useTranslation("common");
// ...
{t("nav.home")}
<NavLink to="/admin" className={linkClass}>אדמין</NavLink>
