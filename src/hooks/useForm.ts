import { useReducer, useState } from 'react';

// 1. Tipos para el estado y las acciones del formulario
interface FormState {
    nombre: string;
    email: string;
}

// Nuevo tipo para el estado de errores
interface FormErrors {
    nombre?: string;
    email?: string;
}

type FormAction =
    | { type: 'CHANGE_INPUT'; field: string; value: string }
    | { type: 'RESET_FORM'; initialState: FormState };

// 2. Reducer tipado
const formReducer = (state: FormState, action: FormAction): FormState => {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state,
                [action.field]: action.value,
            };
        case 'RESET_FORM':
            return action.initialState;
        default:
            return state;
    }
};

// 3. Hook personalizado tipado, ahora también maneja errores
export const useForm = (initialState: FormState) => {
    const [state, dispatch] = useReducer(formReducer, initialState);
    const [errors, setErrors] = useState<FormErrors>({}); // <-- Cambiado de useReducer a useState

    const validate = (): FormErrors => {
        const currentErrors: FormErrors = {};

        // Validar nombre
        if (!state.nombre.trim()) {
            currentErrors.nombre = 'El nombre es obligatorio.';
        }

        // Validar email con una expresión regular simple
        if (!state.email.trim()) {
            currentErrors.email = 'El email es obligatorio.';
        } else if (!/\S+@\S+\.\S+/.test(state.email)) {
            currentErrors.email = 'El email no es válido.';
        }

        return currentErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'CHANGE_INPUT',
            field: e.target.name,
            value: e.target.value,
        });
        // Limpiar el error del campo al escribir
        setErrors(prevErrors => ({
            ...prevErrors,
            [e.target.name]: undefined
        }));
    };

    const resetForm = () => {
        dispatch({
            type: 'RESET_FORM',
            initialState: initialState,
        });
        setErrors({}); // Limpiar los errores al resetear
    };

    const handleSubmit = (): boolean => {
        const currentErrors = validate();
        if (Object.keys(currentErrors).length > 0) {
            setErrors(currentErrors);
            return false;
        }
        setErrors({}); // Limpiar errores si la validación es exitosa
        return true;
    }

    return {
        state,
        handleChange,
        resetForm,
        errors,
        handleSubmit
    };
};