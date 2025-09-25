interface PopupProps {
    nombre: string;
    email: string;
    onClose: () => void;
}

export const Popup = ({ nombre, email, onClose }: PopupProps) => {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h3>Datos Enviados</h3>
                <p><strong>Nombre:</strong> {nombre}</p>
                <p><strong>Email:</strong> {email}</p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};