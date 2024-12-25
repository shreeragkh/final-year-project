import React, { useRef } from 'react';
import './promp.css';
import sent_icon from '../../assets/Sent_icon.png';

function Promp({ setChatHistory, ChatHistory }) {
  const inputRef = useRef();

  const submitMessage = (e) => {
    e.preventDefault();
    console.log(ChatHistory);
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) {
      return;
    }
    inputRef.current.value = '';
    setChatHistory((history) => [
      ...history,
      { sender: 'user', text: userMessage },
      { sender: 'bot', text: 'This is a bot reply.' } // Simulate bot reply
    ]);
  };

  return (
    <div className="promp-container">
      <div className="promp-box">
        <textarea
          className="promp-text"
          placeholder="Write a message..."
          ref={inputRef}
        />
        <img src={sent_icon} alt="Send" onClick={submitMessage} />
      </div>
    </div>
  );
}

export default Promp;