// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./translations/en.json";
import it from "./translations/it.json";
import es from "./translations/es.json";

i18n
  .use(LanguageDetector) // detects browser language
  .use(initReactI18next) // passes i18n instance to react-i18next
  .init({
    resources: {
      en: { translation: en },
      it: { translation: it },
      es: { translation: es },
    },
    fallbackLng: "en",
    detection: {
      // Order of language detection
      order: ["localStorage", "navigator"],
      caches: ["localStorage"], // store selection in localStorage
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
