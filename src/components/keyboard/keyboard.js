import React, { useState } from 'react';
import './keyboard.css';
import InputCode from '../input/inputCode';
import KeyboardButtons from '../buttons/keyboardButtons';
import ValidateAlert from '../alerts/validateAlert';
import { FaCheck, FaTimes } from 'react-icons/fa';


const NumericKeyboard = () => {
    const [texte, setTexte] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [validationText, setValidationText] = useState('');

    const handleClick = (valeur) => {
        setTexte((texte) => texte + valeur);
    };

    const handleDeleteClick = () => {
        setTexte((texte) => texte.slice(0, -1));
    };

    const handleClearClick = () => {
        setTexte('');
    };

    const handleValidateClick = () => {
        let texteValide = texte.toUpperCase(); // Convertissez le texte en majuscules pour être insensible à la casse

        if (texteValide === 'WELCOME') {
            setIsModalOpen(true);
            setValidationText('Vous bénéficiez de -20% sur votre commande');
        } else if (texteValide === 'IMHUNGRY23') {
            setIsModalOpen(true);
            setValidationText('Une petite frite vous est offerte');
        } else if (texteValide === 'JAIDESCONTACTS') {
            setIsModalOpen(true);
            setValidationText('La commande est gratuite (pensez au pourboire)');
        } else {
            setIsModalOpen(true);
            setValidationText('Code non valide');
        }
    };

    // Générer les boutons du clavier
    const generateButtons = () => {
        const chiffres = '0123456789';
        const lettres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        const buttonsChiffres = chiffres.split('').map((chiffre) => (
            <button key={chiffre} onClick={() => handleClick(chiffre)}>
                {chiffre}
            </button>
        ));

        const buttonsLettres = lettres.split('').map((lettre) => (
            <button key={lettre} onClick={() => handleClick(lettre)}>
                {lettre}
            </button>
        ));

        return [...buttonsChiffres, ...buttonsLettres];
    };

    const handleInputChange = (event) => {
        setTexte(event.target.value);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <InputCode texte={texte} onInputChange={handleInputChange} />
            <div className="clavier-numerique">
                <div className="boutons">{generateButtons()}</div>
            </div>
            <KeyboardButtons
                onDeleteClick={handleDeleteClick}
                onClearClick={handleClearClick}
                onValidateClick={handleValidateClick}
            />
            {isModalOpen && validationText !== "Code non valide" ? (
                <ValidateAlert isOpen={isModalOpen} onClose={closeModal}>
                    <FaCheck className="check-icon icon" />
                    <p><strong>{validationText}</strong></p>
                </ValidateAlert>
            ) : null}

            {isModalOpen && validationText === "Code non valide" ? (
                <ValidateAlert isOpen={isModalOpen} onClose={closeModal}>
                    <FaTimes className="close-icon icon" />
                    <p className='text-alert'><strong>{validationText}</strong></p>
                </ValidateAlert>
            ) : null}
        </div>
    );
};

export default NumericKeyboard;
