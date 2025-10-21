import React, { createContext, useEffect, useState } from "react";

// Create context
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState({});

  // 🧭 Load translations dynamically based on language
  const loadTranslations = async (lang) => {
    try {
      const module = await import(`../translations/${lang}.json`);
      setTranslations(module.default);
    } catch (error) {
      console.error(`Error loading ${lang}.json`, error);
    }
  };

  // 🧠 Detect language on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      setLanguage(savedLang);
      loadTranslations(savedLang);
    } else {
      const browserLang = navigator.language.split("-")[0];
      const defaultLang = ["en", "it", "es"].includes(browserLang)
        ? browserLang
        : "en";
      setLanguage(defaultLang);
      loadTranslations(defaultLang);
    }
  }, []);

  // 💾 Handle language change
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
    loadTranslations(lang);
  };

  // 🌍 Translation function
  const t = (key) => translations[key] || key;

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
