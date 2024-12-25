import React from 'react'
import logo from '../../assets/Logo.png'
import Refresh_Button from '../../assets/Refresh_Button.png'
import Window_close from '../../assets/Window_close.png'
import './NavBar.css'

function NavBar() {
  const window_close=()=>{
    window.close()
  }
  const refresh=()=>{
    window.location.reload()
  }


  return (
    <div>
      <div className='navbar'>
      <img className='logo' src={logo} alt='logo'></img>
      <div className='right-corner'>
      <img className='Refresh_Button' src={Refresh_Button} alt='Refresh_Button' onClick={refresh}></img>
      <img className='Window_close' src={Window_close} alt='Window_close' onClick={window_close}></img>
      </div>
      </div>
      <div className='border'></div>
    </div>
  )
}

export default NavBar


