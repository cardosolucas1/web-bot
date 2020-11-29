import React from 'react';
import PropTypes from 'prop-types';
import Person from '../../images/person.png';

const Message = ({ name, message, time, image = Person}) => {
  return (
    <li className="collection-item avatar">
      <img src={image} alt="Ícone de um avatar" className="circle" />
      <span className="title">{name}</span>
      <p>{message}</p>
      <p><em>{time}</em></p>
      <a href="#!" className="secondary-content"><i className="material-icons">send</i></a>
    </li>
  );
}

Message.default = {
  time: 'Agora mesmo',
  image: '/',
};

Message.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  time: PropTypes.string,
  image: PropTypes.string
};

export default Message;
