import React from 'react'
import './ToggleButton.css'
import sunDim from '../../assets/SunDim.png'

function ToggleButton() {
  return (
    <div>
      <div className="toggle-button">
        <div className="button">
          <img src={sunDim} alt="sunDim"/>
        </div>
      </div>
    </div>
  )
}

export default ToggleButton
