import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'></a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>My Skills</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#academics'>Academics</a></li>
        <li><a href='#contacts'>Contacts</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'><FaFacebookSquare/></a>
        <a href='https://instagram.com'><AiFillInstagram/></a>
        <a href='https://twitter.com'><FaTwitterSquare/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Sumanjit Kuity's Portfolio Website. All rights reserved.</small>
      </div>
    </footer>
  )
}
export default Footer;