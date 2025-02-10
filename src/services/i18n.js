import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import enTranslations from './translations/en.json'
import plTranslations from  './translations/pl.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      pl: {
        translation: plTranslations
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    detection: {
      order: ["navigator", "localStorage"],
      caches: ["localStorage"]
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
