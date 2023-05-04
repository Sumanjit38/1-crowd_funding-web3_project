import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com' target='_blank'><FaLinkedin /></a>
        <a href='https://github.com' target='_blank'><FaGithubSquare/></a>
        <a href='https://facebook.com' target='_blank'><FaFacebookSquare/></a>
        <a href='https://twitter.com' target='_blank'><FaTwitterSquare/></a>
    </div>
  )
}
export default HeaderSocials;