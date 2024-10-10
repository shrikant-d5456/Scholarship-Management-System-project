// i18n.js
import Language from 'i18next';
import { initReactI18next } from 'react-i18next';

// Directly define your translation resources here
const resources = {
  en: {
    translation: {
      welcome_message: "Welcome to our application!",
      description: "This is a simple example of dynamic language switching."
    }
  },
  mr: {
    translation: {
      welcome_message: "Bienvenue dans notre application!",
      description: "Ceci est un exemple simple de changement de langue dynamique."
    }
  },
  hn: {
    translation: {
      welcome_message: "hey dans notre application!",
      description: "Ceci est un exemple simple de changement de langue dynamique."
    }
  }
};

// Initialize i18n

Language
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default Language;


