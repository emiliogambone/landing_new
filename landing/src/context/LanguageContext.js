import React, { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState({});

  // Load translations dynamically
  const loadTranslations = async (lang) => {
    try {
      const module = await import(`../translations/${lang}.json`);
      setTranslations(module.default); // triggers re-render
    } catch (error) {
      console.error(`Error loading ${lang}.json`, error);
      setTranslations({}); // fallback
    }
  };

  // Detect browser language on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    const browserLang = navigator.language.split("-")[0];
    console.log("brow", browserLang);
    const defaultLang = ["en", "it", "es"].includes(browserLang)
      ? browserLang
      : "en";

    const initialLang = savedLang || defaultLang;
    setLanguage(initialLang);
    loadTranslations(initialLang);
  }, []);

  // Handle language change
  const changeLanguage = (lang) => {
    setLanguage(lang); // update state
    localStorage.setItem("lang", lang);
    loadTranslations(lang); // async load new translations
  };

  // Translation function
  const t = (key) => translations[key] || key;

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
