import React, { useEffect, useRef, useState, useContext } from 'react';
import { Header } from '../components/Header/Header';
import Message from '../components/Message';
import TextInput from '../components/TextsInput';
import Footer from '../style/Footer';
import styled from 'styled-components';
import zapBg from '../images/zap-background.png';
import { ThemeContext } from '../context/ThemeProvider';
import StoreHeader from '../components/StoreHeader';

const { io } = window;
const ENDPOINT = 'http://localhost:3001'

const WebChat = () => {
  const socket = useRef();
  const exampleMessage = 'Olá, tudo bem? Me diga seu nome para começarmos, por favor?';
  const [history, setHistory] = useState([
    { name: 'Chama no zap', message: exampleMessage, time: '10:39 AM' }
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

  const Background = styled.div`
    background-image: url(${zapBg});
    background-position: center;
    background-repeat: repeat;
    background-size: 760px 1396px;
    height: 100vh;
    width: 100%;
  `;

  const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    max-height: 62vh;
    overflow: auto;
  `;

  const { theme } = useContext(ThemeContext);

  return (
    <Background>
      <Header />
      <StoreHeader />
      <div>
        <Ul className="collection">
          {history.map(({ name, message, time}) =>
            <Message name={ name } message={ message } time={ time }/>
          )}
        </Ul>
      </div>
      <Footer theme={ theme }>
        <TextInput label="Enviar mensagem" iconName="send" onSubmit={handleSubmitMessage}/>
      </Footer>
    </Background>
  );
};

export default WebChat;
