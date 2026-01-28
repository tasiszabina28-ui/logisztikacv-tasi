import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'hu' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (hu: string, en: string) => string; // Ez a segédfüggvény fogja választani a szöveget
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('hu');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'hu' ? 'en' : 'hu');
  };

  // Ez a varázslat: ha magyar a nyelv, az első szöveget adja vissza, ha angol, a másodikat
  const t = (hu: string, en: string) => {
    return language === 'hu' ? hu : en;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};