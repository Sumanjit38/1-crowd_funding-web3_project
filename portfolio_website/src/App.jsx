import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navBar/Navbar'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Academics from './components/academics/Academics'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { useState, useEffect } from 'react';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Academics />
      <Contact />
      <Footer />
    </>
  )
}

export default App