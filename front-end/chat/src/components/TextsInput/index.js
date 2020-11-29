import React from 'react';

const TextInput = ({ label, iconName }) => {
  return (
    <div id="sender" className="row footer-input" >
      <form className="col s12" autoComplete="off">
        <div className="row">
          <div className="input-field col s12">
            <input required data-testid="message-box" id="send-message" type="text" />
            <label htmlFor="send-message">{label}</label>
            <button data-testid="send-button" className="btn waves-effect teal darken-4" type="submit" name="action">Enviar
            <i className="material-icons right">{iconName}</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TextInput;
