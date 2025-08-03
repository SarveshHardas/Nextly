"use client";

import {createContext, useContext, useState, useEffect, ReactNode} from 'react';

type ThemeContextType = {
    isLightTheme: boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined >(undefined);

export const ThemeProvider = ({children}:{children:ReactNode}) => {
    const [isLightTheme, setIsLightTheme] = useState(true);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if(saved === 'dark') setIsLightTheme(false);
    },[])

    const toggleTheme= () => {
        const newTheme = !isLightTheme;
        setIsLightTheme(newTheme);
        localStorage.setItem('theme',newTheme?'light':'dark');
    }

    return(
        <ThemeContext.Provider value={{isLightTheme,toggleTheme}}>
            <div className={
                isLightTheme ? 'bg-white text-black' : 'bg-emerald-950 text-white'
            }
                 style={{minHeight: '100vh'}}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context) throw new  Error('useTheme must be used within a ThemeProvider');
    return context;
}