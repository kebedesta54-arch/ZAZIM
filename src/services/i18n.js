
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../locales/en.json'
import he from '../locales/he.json'
import ar from '../locales/ar.json'
import ru from '../locales/ru.json'

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, he: { translation: he }, ar: { translation: ar }, ru: { translation: ru } },
  lng: 'he',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
})

export default i18n
