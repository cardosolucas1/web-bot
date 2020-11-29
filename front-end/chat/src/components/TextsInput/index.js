import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextsInput = ({ label, iconName, onSubmit }) => {
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = (text) => {
    onSubmit({ name: 'User', message: text, time: 'Agora mesmo' });
    setInputMessage('');
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
};

TextsInput.propTypes = {
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default TextsInput;
