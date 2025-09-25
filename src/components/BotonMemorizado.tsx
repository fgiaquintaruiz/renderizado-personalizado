import { memo } from 'react';

// Tipos para las props del componente memoizado
interface BotonMemoProps {
    onIncrement: () => void;
}

// Componente memoizado con tipado de props
export const BotonMemorizado = memo<BotonMemoProps>(({ onIncrement }) => {
    console.log('Rendering BotonMemorizado...');
    return <button onClick={onIncrement}>Incrementar</button>;
});