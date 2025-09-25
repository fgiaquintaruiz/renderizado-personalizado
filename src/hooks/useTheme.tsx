import { useState, type ReactNode } from 'react';
import { ThemeContext } from './useThemeContext.ts';

// 4. Crear el componente Provider
interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [tema, setTema] = useState<'claro' | 'oscuro'>('claro');

    const alternarTema = () => {
        setTema(prevTema => (prevTema === 'claro' ? 'oscuro' : 'claro'));
    };

    const value = {
        tema,
        alternarTema,
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};