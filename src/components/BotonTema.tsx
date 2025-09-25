import {useTheme} from "../hooks/useThemeContext.ts";

export const BotonTema = () => {
    const { alternarTema } = useTheme();
    return <button onClick={alternarTema}>Alternar Tema</button>;
};