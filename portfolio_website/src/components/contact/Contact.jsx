import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {RiWhatsappFill} from 'react-icons/ri'

const Contact = () => {
  return (
    <section id = 'contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>

          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>sumanjit38@gamil.com</h5>
            <a href='mailto:sumanjit38@gmail.com' target='blank'>Send a Message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Sumanjit Kuity</h5>
            <a href='mailto:sumanjit38@gmail.com' target='blank'>Send a Message</a>
          </article>

          <article className='contact__option'>
            <RiWhatsappFill className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>8768806587</h5>
            <a href='https://api.whatsapp.com/send?phone=+918768806587' target='blank'>Send a Message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS */}
        
        <form action=''>
          <input type= 'text' name='name' placeholder='Your Full Name' required />
          <input type= 'email' name='email' placeholder='Your Email' />
          <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}
export default Contact;
