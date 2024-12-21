import React from 'react';
import NavBar from './components/Navbar/NavBar';
import Promp from './components/Prompt/promp';
import ChatArea from './components/chatArea/chatArea'
import ToggleButton from './components/ToggleButton/ToggleButton';
import './App.css';

function App() {
  return (
    <div className="App">
     <NavBar></NavBar>
     <Promp></Promp>
     <ToggleButton></ToggleButton>
     <ChatArea></ChatArea>
    </div>
  );
}

export default App;
