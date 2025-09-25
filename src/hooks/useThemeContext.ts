import { createContext, useContext } from 'react';

// 1. Tipos para el valor del contexto
interface ThemeContextType {
    tema: 'claro' | 'oscuro';
    alternarTema: () => void;
}

// 2. Crear el Contexto
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Crear el hook para consumir el contexto
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme debe ser usado dentro de ThemeProvider');
    }
    return context;
};