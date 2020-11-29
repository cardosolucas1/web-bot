import React from 'react';
import Person from '../../images/person.png';

const Message = ({ name, message, time, image }) => {
  return (
    <li className="collection-item avatar">
      <img src={Person} alt="" className="circle" />
      <span className="title">{name}</span>
      <p>{message}</p>
      <p><em>{time}</em></p>
      <a href="#!" className="secondary-content"><i className="material-icons">send</i></a>
    </li>
  );
}

export default Message;
