import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n.use(LanguageDetector).init({
  lng: 'ru',
  // we init with resources
  // \u000A - перенос строки
  resources: {
    en: {
      translations: {
        landing_title: 'Cloud mining of all the forks',
        landing_subtitle: 'The fastest and the most profitable way of cryptocurrency investing',
      },
    },
    ru: {
      translations: {
        landing_title: 'Облачный майнинг всех форков',
        landing_subtitle: 'Самый быстрый и выгодный способ инвестирования в криптовалюту',
      },
    },
  },

  fallbackLng: 'ru',
  debug: true,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
  },

  react: {
    wait: true,
  },
})

export default i18n
