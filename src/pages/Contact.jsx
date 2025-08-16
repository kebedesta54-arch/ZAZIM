import { useState } from "react";
import { useTranslation } from "react-i18next";
import Layout from "../components/layout";

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", phone: "", details: "" });
  const [sent, setSent] = useState(false);

  function onChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    // TODO: לחבר ל־EmailJS / Formspree / API
    setSent(true);
  }

  return (
    <Layout>
      <div className="max-w-2xl">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{t("contact.title")}</h1>
        <p className="mt-2 text-slate-700">{t("contact.subtitle")}</p>

        {sent ? (
          <p className="mt-4 text-green-600">{t("contact.form.success")}</p>
        ) : (
          <form onSubmit={onSubmit} className="mt-5 grid gap-4">
            <label className="grid gap-1">
              <span className="text-sm font-medium">{t("contact.form.full_name")}</span>
              <input className="rounded-xl border-slate-300" name="name" value={form.name} onChange={onChange} required />
            </label>

            <label className="grid gap-1">
              <span className="text-sm font-medium">{t("contact.form.email")}</span>
              <input type="email" className="rounded-xl border-slate-300" name="email" value={form.email} onChange={onChange} required />
            </label>

            <label className="grid gap-1">
              <span className="text-sm font-medium">{t("contact.form.phone")}</span>
              <input className="rounded-xl border-slate-300" name="phone" value={form.phone} onChange={onChange} required />
            </label>

            <label className="grid gap-1">
              <span className="text-sm font-medium">{t("contact.form.details")}</span>
              <textarea rows={4} className="rounded-xl border-slate-300" name="details" value={form.details} onChange={onChange} />
            </label>

            <button type="submit" className="btn-primary">{t("contact.form.submit")}</button>
          </form>
        )}
      </div>
    </Layout>
  );
}
