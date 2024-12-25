import React, { useState } from 'react';
import NavBar from './components/Navbar/NavBar';
import Promp from './components/Prompt/promp';
import ChatArea from './components/chatArea/ChatArea';
import ToggleButton from './components/ToggleButton/ToggleButton';
import './App.css';
import './DarkTheme.css';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={darkTheme ? 'dark-theme + App'  : 'App'}>
      <NavBar />
      <ToggleButton onClick={toggleTheme}  darktheme={darkTheme}/>
      <ChatArea />
      <Promp></Promp>
    </div>
  );
}

export default App;
