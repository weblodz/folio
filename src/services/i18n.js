import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import enCommon from './translations/locales/en/nsCommon.json'
import plCommon from './translations/locales/pl/nsCommon.json'
import enHome from './translations/locales/en/nsHome.json'
import plHome from './translations/locales/pl/nsHome.json'
import enSignIn from './translations/locales/en/nsSignIn.json'
import plSignIn from './translations/locales/pl/nsSignIn.json'
import enDataPolicy from './translations/locales/en/nsDataPolicy.json'
import plDataPolicy from './translations/locales/pl/nsDataPolicy.json'


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        nsCommon: enCommon,
        nsHome: enHome,
        nsSignIn: enSignIn,
        nsDataPolicy: enDataPolicy
      },
      pl: {
        nsCommon: plCommon,
        nsHome: plHome,
        nsSignIn: plSignIn,
        nsDataPolicy: plDataPolicy
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    ns: ['nsCommon', 'nsHome', 'nsSignIn', 'nsDataPolicy'],
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
