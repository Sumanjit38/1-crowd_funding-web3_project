import React from 'react'

//import { RiMenu3Line, RiCloseLin } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'
// BEM -> Block Element Modifier

const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar-links_container'>
          <p>
            <a href='#home'>Home</a>
            <a href='#wgpt3'>What is GPT3</a>
            <a href='#possibility'>Open AI</a>
            <a href='#features'>Case Studies</a>
            <a href='#blog'>Library</a>
          </p>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
    </div>
  )
}
export default Navbar;