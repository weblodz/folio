import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import enCommon from './translations/locales/en/nsCommon.json'
import plCommon from './translations/locales/pl/nsCommon.json'

import enHero from './translations/locales/en/nsHero.json'
import plHero from './translations/locales/pl/nsHero.json'

import enPrototype from './translations/locales/en/nsPrototype.json'
import plPrototype from './translations/locales/pl/nsPrototype.json'

import enUpdates from './translations/locales/en/nsUpdates.json'
import plUpdates from './translations/locales/pl/nsUpdates.json'

import enDiscover from './translations/locales/en/nsDiscover.json'
import plDiscover from './translations/locales/pl/nsDiscover.json'



i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        nsCommon: enCommon,
        nsHero: enHero,
        nsPrototype: enPrototype,
        nsUpdates: enUpdates,
        nsDiscover: enDiscover,
      },
      pl: {
        nsCommon: plCommon,
        nsHero: plHero,
        nsPrototype: plPrototype,
        nsUpdates: plUpdates,
        nsDiscover: plDiscover,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    ns: ['nsCommon, nsHero, nsPrototype, nsUpdates, nsDiscover'],
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
