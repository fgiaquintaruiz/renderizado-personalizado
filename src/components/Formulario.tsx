import React from 'react';
import { useForm } from '../hooks/useForm.ts';

interface FormularioProps {
    onFormSubmit: (data: { nombre: string; email: string }) => void;
}

export const Formulario = ({ onFormSubmit }: FormularioProps) => {
    const { state, handleChange, resetForm, errors, handleSubmit } = useForm({
        nombre: '',
        email: '',
    });

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (handleSubmit()) {
            onFormSubmit(state);
            resetForm(); // Resetear el formulario solo si la validación es exitosa
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <h2>Formulario con useReducer</h2>
            <div className="form-group">
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={state.nombre}
                    onChange={handleChange}
                />
                {errors.nombre && <p className="error-message">{errors.nombre}</p>}
            </div>
            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={state.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <button type="submit">Enviar</button>
            <button type="button" onClick={resetForm}>Reiniciar</button>
        </form>
    );
};