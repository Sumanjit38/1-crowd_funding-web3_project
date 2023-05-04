import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {HiFolderOpen} from 'react-icons/hi'

const About = () => {
  return (
    <section id = 'about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <HiFolderOpen className='about__icon'/>
              <h5>Projects</h5>

            </article>
          </div>
          <p>
            llsdmclfkjnwedopifjewfgvdmfgvl;dsfjnpwehfewpo;fjiewdfnksdokfhefiupewbjkdsbvckjldsbfvdsifdwsfdsfdsf
            sfbsdifdhbnfidowsflhnwdsokl;fjiewdfnksdokfhefiupewbjkdsbvckjldsbfvdsifdwsfdsfdsfwsedefjlkbwslifbhewf
            sdfvbsdjhfbvsdflk
            sdjhfbdsljhkfbdslfkjsdbfljskdfbilhwuefgbwejflwjfg
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;