import React from 'react';
import './inputCode.css';

class CodeInput extends React.Component {
    render() {
        const { texte, onInputChange } = this.props;
        return (
            <div>
                <input type="text" id="code" name="code" placeholder="Code" value={texte} onChange={onInputChange} />
            </div>
        );
    }
}

export default CodeInput;
