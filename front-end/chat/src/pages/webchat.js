import React, { useEffect, useRef } from 'react';
import Message from '../components/Message';
import 'materialize-css';
import TextInput from '../components/TextsInput';
import Footer from '../style/Footer';

const { io } = window;
const ENDPOINT = 'http://localhost:3001'

const WebChat = () => {
  const socket = useRef();

  const exampleMessage = 'Olá, tudo bem? Me diga seu nome para começarmos, por favor?';
  useEffect(() => {
    socket.current = io(ENDPOINT);
  }, [])

  const handleSubmitMessage = ({ message }) => {
    socket.current.emit('clientMessage', { message });
  }

  return (
    <section>
      <div>
        <ul className="collection">
          <Message name={'Chama no zap'} message={exampleMessage} time={'Agora mesmo'}/>
        </ul>
      </div>
      <Footer>
        <TextInput label="Enviar mensagem" iconName="send" onSubmit={handleSubmitMessage}/>
      </Footer>
    </section>
  );
};

export default WebChat;
