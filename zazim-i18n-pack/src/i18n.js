import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import common_he from "./locales/he/common.json";
import common_en from "./locales/en/common.json";
import common_ru from "./locales/ru/common.json";
import common_ar from "./locales/ar/common.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      he: { common: common_he },
      en: { common: common_en },
      ru: { common: common_ru },
      ar: { common: common_ar },
    },
    lng: "he",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;