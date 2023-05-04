import React from 'react'
import './navbar.css';
import {AiFillHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {SiSkillshare} from 'react-icons/si'
import {HiFolderOpen} from 'react-icons/hi'
import {HiAcademicCap} from 'react-icons/hi'
import {FcContacts} from 'react-icons/fc'
import { useState } from 'react';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAlt /></a>
      <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><SiSkillshare/></a>
      <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><HiFolderOpen/></a>
      <a href='#academics' onClick={() => setActiveNav('#academics')} className={activeNav === '#academics' ? 'active' : ''}><HiAcademicCap/></a>
      <a href='#contacts' onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}><FcContacts/></a>

    </nav>
  )
}
export default Navbar;

