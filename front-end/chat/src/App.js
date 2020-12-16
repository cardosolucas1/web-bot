import React from 'react';
import ThemeProvider from './context/ThemeProvider';
import WebChat from './pages/Webchat';


function App() {
  return (
    <ThemeProvider>
      <WebChat />
    </ThemeProvider>
  );
}

export default App;
