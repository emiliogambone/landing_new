import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import JSON translation files
import en from "./translations/en.json";
import it from "./translations/it.json";
import es from "./translations/es.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    it: { translation: it },
    es: { translation: es },
  },
  lng: "en", // default language
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false, // React already escapes
  },
});

export default i18n;
