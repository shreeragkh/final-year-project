import React from 'react';
import './ToggleButton.css';
import sunDim from '../../assets/SunDim.png';
import moon from '../../assets/Moon.png';

function ToggleButton({ onClick , darktheme}) {
  return (
    <div className="toggle-button" onClick={onClick}>
      <div className="button">
        <img src={darktheme ? moon : sunDim} alt="sunDim" />
      </div>
    </div>
  );
}

export default ToggleButton;
