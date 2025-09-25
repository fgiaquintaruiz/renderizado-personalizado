import React from 'react';

interface NotificationProps {
    message: string;
    onClose: () => void;
}

export const Notification = ({ message, onClose }: NotificationProps) => {
    // Opcional: Cerrar automáticamente después de 3 segundos
    React.useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="notification">
            <p>{message}</p>
            <button onClick={onClose}>&times;</button>
        </div>
    );
};