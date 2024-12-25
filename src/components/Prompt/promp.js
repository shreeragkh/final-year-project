import React, { useState } from 'react';
import './promp.css';
import sent_icon from '../../assets/Sent_icon.png';

function Promp(promp) {

  const [Temp, setTemp] = useState('')
  console.log(Temp)

  const submitMessage = (e) => {
    e.preventDefault();
    console.log(promp); 
    promp.setChatHistory((history) => [
      ...history,
      { sender: 'user', text: Temp },
      { sender: 'bot', text: 'This is a bot reply.' } 
    ]);
  };

  return (
    <div className="promp-container">
      <div className="promp-box">
        <textarea onChange={(e)=>{
          setTemp(e.target.value)        }}
          className="promp-text"
          placeholder="Write a message..."
        />
        <img src={sent_icon} alt="Send" onClick={submitMessage} />
      </div>
    </div>
  );
}

export default Promp;