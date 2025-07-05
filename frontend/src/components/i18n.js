import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation files
const resources = {
  en: {
    translation: {
      "Language": "Language",
      "Welcome": "Welcome to the Game!",
      "Start": "Start Game"
    }
  },
  hi: {
    translation: {
      "Language": "भाषा",
      "Welcome": "खेल में आपका स्वागत है!",
      "Start": "खेल शुरू करें"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
