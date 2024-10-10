// i18n.js
import Language from 'i18next';
import { initReactI18next } from 'react-i18next';

// Directly define your translation resources here
const resources = {
  en: {
    translation: {
      logo_name: "Swaami Vivekanand Shikshan Sanstha ",
    }
  },
  mr: {
    translation: {
      logo_name: "स्वामी विवेकानंद शिक्षण संस्था ",
      
    }
  },
  hn: {
    translation: {
      logo_name: "स्वामी विवेकानंद शिक्षण संस्था ",
      
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


