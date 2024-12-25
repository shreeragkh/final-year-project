import React, { useState } from 'react';
import Suggestion from '../Suggestions/Suggestion';
import './chatArea.css';
import Promp from '../Prompt/promp';

function ChatArea() {
  const [chatHistory, setChatHistory] = useState([]);

  return (
    <div>
      {chatHistory.length === 0 ? (
        <>
          <div className="textbox">
            <p className="text">Hi 👋, I am NIMBOT, Your virtual Assistant. How can I help you today?</p>
          </div>
          <Suggestion />
        </>
      ) : (
        <div className="chat-messages">
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
            >
              {message.text}
            </div>
          ))}
        </div>
      )}
      <Promp setChatHistory={setChatHistory} ChatHistory={chatHistory} />
    </div>
  );
}

export default ChatArea;
