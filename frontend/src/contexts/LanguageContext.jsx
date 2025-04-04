import React, { createContext, useState, useContext, useEffect } from 'react';
import i18n from 'i18next';

// Criando o contexto com valores padrão
const LanguageContext = createContext({
  language: 'pt-BR',
  setLanguage: () => {},
  supportedLanguages: ['pt-BR', 'en-US', 'es']
});

// Custom hook para usar o contexto
export const useLanguage = () => useContext(LanguageContext);

// Provider para envolver a aplicação
export const LanguageProvider = ({ children }) => {
  // Estado para armazenar o idioma atual
  const [language, setLanguage] = useState(() => {
    // Tenta recuperar o idioma salvo no localStorage, ou usa o idioma do navegador, ou o padrão pt-BR
    const savedLanguage = localStorage.getItem('language');
    const browserLanguage = navigator.language;
    
    // Se tiver um idioma salvo, usa ele
    if (savedLanguage) {
      return savedLanguage;
    }
    
    // Se o idioma do navegador for um dos suportados, usa ele
    if (['pt-BR', 'en-US', 'es'].includes(browserLanguage)) {
      return browserLanguage;
    }
    
    // Caso contrário, usa o padrão pt-BR
    return 'pt-BR';
  });

  // Idiomas suportados pela aplicação
  const supportedLanguages = ['pt-BR', 'en-US', 'es'];

  // Função para alterar o idioma
  const changeLanguage = (newLanguage) => {
    if (supportedLanguages.includes(newLanguage)) {
      setLanguage(newLanguage);
      localStorage.setItem('language', newLanguage);
      i18n.changeLanguage(newLanguage);
    }
  };

  // Efeito para configurar o idioma quando o componente montar
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  // Valor a ser fornecido pelo contexto
  const contextValue = {
    language,
    setLanguage: changeLanguage,
    supportedLanguages
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
