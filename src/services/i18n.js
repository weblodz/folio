import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import enCommon from './translations/locales/en/nsCommon.json'
import plCommon from './translations/locales/pl/nsCommon.json'

import enHero from './translations/locales/en/nsHero.json'
import plHero from './translations/locales/pl/nsHero.json'


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        nsCommon: enCommon,
        nsHero: enHero,
      },
      pl: {
        nsCommon: plCommon,
        nsHero: plHero,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    ns: ['nsCommon, nsHero'],
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
