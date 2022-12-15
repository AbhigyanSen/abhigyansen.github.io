import React from 'react'
import './contact.css'
import {FiMail} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {SiWhatsapp} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_weqtknp', 'template_fayhfoi', form.current, 'KOpgQah6f3DhmICbb')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5 className='heading1'>Get In Touch</h5>
      <h2 className='heading2'>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          
          <article className="contact__option">
            <FiMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>abhigyansen16@gmail.com</h5>
            <a href="mailto:abhigyansen16@gmail.com" target="#">Send an Email</a>
          </article>

          <article className="contact__option">
            <BsInstagram className="contact__option-icon"/>
            <h4>Instagram</h4>
            <h5>@abhigyan.sen</h5>
            <a href="https://instagram.com/abhigyan.sen" target="#">Send a Message</a>
          </article>

          <article className="contact__option">
            <SiWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+91 9434131794</h5>
            <a href="https://api.whatsapp.com/send?phone+919434131794" target="#">Ping me on Whatsapp</a>
          </article>

        </div>
        {/* ==== End of Contact ==== */}
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact