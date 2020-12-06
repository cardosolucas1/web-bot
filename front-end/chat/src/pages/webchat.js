import React, { useEffect, useRef, useState } from 'react';
import Message from '../components/Message';
import 'materialize-css';
import TextInput from '../components/TextsInput';
import Footer from '../style/Footer';

const { io } = window;
const ENDPOINT = 'http://localhost:3001'

const WebChat = () => {
  const socket = useRef();
  const exampleMessage = 'Teste';
  const [history, setHistory] = useState([
    { name: 'Chama no zap', message: exampleMessage, time: 'Agora mesmo' }
  ]);

  useEffect(() => {
    socket.current = io(ENDPOINT);
    socket.current.on('botMessage', ({ title, text, next, }) => {
      console.log('msg:', { title, text, next });
      setHistory((currentState) => ([...currentState, { title, text, next } ]));
    });
    socket.current.emit('clientRegister', {});
    socket.current.emit('whatIsYourName', { name: 'Lucas' });

  }, [])

  const handleSubmitMessage = (data) => {
    socket.current.emit('clientMessage', data);
    setHistory((currentState) => ([...currentState, data ]));
  }

  return (
    <section>
      <div>
        <ul className="collection">
          {history.map(({ title, text, next }) =>
            <Message key={title + text} name={ title } message={ text } time={ 'Agora' }/>
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
