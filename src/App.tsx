import { useState, useCallback } from 'react';
import { BotonMemorizado } from './components/BotonMemorizado';
import { Formulario } from './components/Formulario.tsx';
import { ThemeProvider } from './hooks/useTheme.tsx';
import { Contenedor } from './components/Contenedor';
import { BotonTema } from './components/BotonTema';
import { Popup } from './components/Popup.tsx';
import { Notification } from './components/Notification.tsx';
import './index.css';

const App = () => {
    const [contador, setContador] = useState<number>(0);
    const [estadoSecundario, setEstadoSecundario] = useState<number>(0);
    const [formData, setFormData] = useState<{ nombre: string; email: string } | null>(null);
    const [notificationMessage, setNotificationMessage] = useState<string>('');

    const incrementar = useCallback<() => void>(() => {
        setContador(prevContador => prevContador + 1);
    }, []);

    const handleFormSubmission = (data: { nombre: string; email: string }) => {
        setFormData(data);
        setNotificationMessage('Formulario enviado correctamente');
    };

    const closePopup = () => {
        setFormData(null);
    };

    const closeNotification = () => {
        setNotificationMessage('');
    };

    return (
        <ThemeProvider>
            <div className="container">
                <h1>Ejemplos de Funcionalidades Avanzadas</h1>

                <div className="section">
                    <h2>1. Renderizado Personalizado (React.memo)</h2>
                    <h3>Contador: {contador}</h3>
                    <BotonMemorizado onIncrement={incrementar} />
                    <br />
                    <button onClick={() => setEstadoSecundario(prev => prev + 1)}>
                        Cambiar Estado Secundario ({estadoSecundario})
                    </button>
                </div>

                <div className="section">
                    <h2>2. Hook de Gestión de Estado Complejo (useReducer)</h2>
                    <Formulario onFormSubmit={handleFormSubmission} />
                </div>

                <div className="section">
                    <h2>3. Inyección de Dependencias (Context API)</h2>
                    <Contenedor />
                    <BotonTema />
                </div>
            </div>

            {formData && <Popup nombre={formData.nombre} email={formData.email} onClose={closePopup} />}
            {notificationMessage && <Notification message={notificationMessage} onClose={closeNotification} />}
        </ThemeProvider>
    );
};

export default App;