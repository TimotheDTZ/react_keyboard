import React from 'react';
import './keyboardButtons.css';

class ButtonsActions extends React.Component {
    render() {
        const { onDeleteClick, onClearClick, onValidateClick } = this.props;
        return (
            <div className='group-buttons'>
                <button className='buttons-actions' onClick={onDeleteClick}>Supprimer</button>
                <button className='buttons-actions' onClick={onClearClick}>Vider</button>
                <button className='buttons-actions' onClick={onValidateClick}>Valider</button>
            </div>
        );
    }
}

export default ButtonsActions;
