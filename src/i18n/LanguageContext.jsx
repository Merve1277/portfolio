import { createContext, useContext, useState, useEffect } from 'react';
import translations from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(() => {
        return localStorage.getItem('portfolio-lang') || 'tr';
    });

    useEffect(() => {
        localStorage.setItem('portfolio-lang', lang);
        document.documentElement.lang = lang;
    }, [lang]);

    const t = translations[lang];

    const toggleLang = () => {
        setLang(prev => (prev === 'tr' ? 'en' : 'tr'));
    };

    return (
        <LanguageContext.Provider value={{ lang, t, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLang() {
    return useContext(LanguageContext);
}
