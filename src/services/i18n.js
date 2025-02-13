import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import enCommon from './translations/locales/en/nsCommon.json'
import plCommon from './translations/locales/pl/nsCommon.json'
import enHome from './translations/locales/en/nsHome.json'
import plHome from './translations/locales/pl/nsHome.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        nsCommon: enCommon,
        nsHome: enHome,
      },
      pl: {
        nsCommon: plCommon,
        nsHome: plHome,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    ns: ['nsCommon', 'nsHome'],
    defaultNS: 'nsCommon',
    detection: {
      order: ["navigator", "localStorage"],
      caches: ["localStorage"]
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
