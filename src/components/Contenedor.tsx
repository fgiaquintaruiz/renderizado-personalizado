import {useTheme} from "../hooks/useThemeContext.ts";

export const Contenedor = () => {
    const { tema } = useTheme();
    return (
        <div className={`theme-container ${tema}`}>
            <p>El tema actual es: {tema}</p>
        </div>
    );
};