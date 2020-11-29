import React, { useState, useEffect, useRef } from 'react';
import Message from '../components/Message';
import 'materialize-css';
import TextInput from '../components/TextsInput';
import Footer from '../style/Footer';

const { io } = window;
const WebChat = () => {
  const socket = useRef();

  const exampleMessage = 'Olá, tudo bem? Me diga seu nome para começarmos, por favor?';
  useEffect(() => {
    socket.current = io('http://localhost:3001');
  }, [])

  return (
    <section>
      <div>
        <ul className="collection">
          <Message name={'Chama no zap'} message={exampleMessage} time={'Agora mesmo'}/>
        </ul>
      </div>
      <Footer>
        <TextInput label="Enviar mensagem" iconName="send"/>
      </Footer>
    </section>
  );
};

export default WebChat;
