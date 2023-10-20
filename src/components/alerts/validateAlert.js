import React from 'react';
import './validateAlert.css'

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                {children}
                <button className="modal-close" onClick={onClose}>Fermer</button>
            </div>
        </div>
    );
};

export default Modal;
