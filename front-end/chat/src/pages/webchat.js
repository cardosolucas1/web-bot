import React, { useEffect, useRef, useState } from 'react';
import Message from '../components/Message';
import 'materialize-css';
import TextInput from '../components/TextsInput';
import Footer from '../style/Footer';

const { io } = window;
const ENDPOINT = 'http://localhost:3001'

const WebChat = () => {
  const socket = useRef();
  const exampleMessage = 'Olá, tudo bem? Me diga seu nome para começarmos, por favor?';
  const [history, setHistory] = useState([
    { name: 'Chama no zap', message: exampleMessage, time: 'Agora mesmo' }
  ]);

  useEffect(() => {
    socket.current = io(ENDPOINT);
    socket.current.on('botMessage', (data) => {
      setHistory((currentState) => ([...currentState, data ]));
    })
  }, [])

  const handleSubmitMessage = (data) => {
    socket.current.emit('clientMessage', data);
    setHistory((currentState) => ([...currentState, data ]));
  }

  return (
    <section>
      <div>
        <ul className="collection">
          {history.map(({ name, message, time}) =>
            <Message name={ name } message={ message } time={ time }/>
          )}
        </ul>
      </div>
      <Footer>
        <TextInput label="Enviar mensagem" iconName="send" onSubmit={handleSubmitMessage}/>
      </Footer>
    </section>
  );
};

export default WebChat;
