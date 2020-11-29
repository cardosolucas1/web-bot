import React, { useState } from 'react';

const TextInput = ({ label, iconName, onSubmit }) => {
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = (text) => {
    onSubmit({ message: text });
  }
  return (
    <div id="sender" className="row footer-input" >
      <form className="col s12" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        <div className="row">
          <div className="input-field col s12">
            <input
              onChange={(e) => setInputMessage(e.target.value)}
              required 
              data-testid="message-box"
              type="text"
            />
            <label htmlFor="send-message">{label}</label>
            <button
              data-testid="send-button"
              className="btn waves-effect teal darken-4"
              type="button" name="action"
              onClick={() => handleSubmit(inputMessage)}
            >
              Enviar
              <i className="material-icons right">{iconName}</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TextInput;
