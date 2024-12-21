import React from 'react'
import Suggestion from '../Suggestions/Suggestion'
import './chatArea.css'

function chatArea() {
  return (
    <div>
      <div className="textbox">
        <p className='text'>Hi 👋, I am NIMBOT, Your virtual Assistant. How can i help you Today</p>
      </div>
      <Suggestion></Suggestion>
    </div>
  )
}

export default chatArea
