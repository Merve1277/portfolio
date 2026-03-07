import { createContext, useContext, useState, useEffect } from 'react';
import translations from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [lang, setLangState] = useState(() => {
        return localStorage.getItem('portfolio-lang') || 'tr';
    });

    useEffect(() => {
        localStorage.setItem('portfolio-lang', lang);
        document.documentElement.lang = lang;
    }, [lang]);

    const t = translations[lang];

    const setLang = (newLang) => {
        setLangState(newLang);
    };

    const toggleLang = () => {
        setLangState(prev => (prev === 'tr' ? 'en' : 'tr'));
    };

    return (
        <LanguageContext.Provider value={{ lang, t, setLang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLang() {
    return useContext(LanguageContext);
}
