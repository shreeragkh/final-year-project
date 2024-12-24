import React from 'react';
import './promp.css';
import sent_icon from '../../assets/Sent_icon.png';

function Promp() {
  return (
    <div>
      <div className='promp-box'>
        <p className='promp-text'>Write a message...</p>
        <img src={sent_icon} alt='sent_icon'></img>
      </div>
    </div>
  );
}

export default Promp;
