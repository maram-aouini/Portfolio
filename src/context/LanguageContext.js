import React, { createContext, useState, useContext } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'it' : 'en'));
  };

  const t = (path) => {
    const keys = path.split('.');
    let current = translations[language];
    
    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Translation key missing: ${path} for language: ${language}`);
        return path;
      }
      current = current[key];
    }
    
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
