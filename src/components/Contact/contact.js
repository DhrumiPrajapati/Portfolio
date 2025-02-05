import React, {useRef} from 'react';
import './contact.css';

import LinkedinIcon from '../../assets/linkedlogo.png';
import GithubIcon from '../../assets/githublogo.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gosx46h', 'template_5vcxmdd', form.current, {
            publicKey: 'BZCvXzhzrtsw67ft9',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent!')
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return (
        <section id='contactPage'>
            {/* <div id='clients'>
                <h1 className='contactPageTitle'>My Clients</h1>
                <p className='clientDesc'>
                    I have had the opportunity to work with a diverse group of comanies.
                    Some of the notable companies I have worked with includes.
                </p>
                <div className='clientImgs'>
                    <img src={Walmart} alt='Client' className='clientImg' />
                    <img src={Adobe} alt='Client' className='clientImg' />
                    <img src={Microsoft} alt='Client' className='clientImg' />
                    <img src={Facebook} alt='Client' className='clientImg' />
                </div>
            </div> */}
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name='from_name'/>
                    <input type='email' className='email' placeholder='Your Email' name='from_email'/>
                    <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                    <button type='submit' value='Send' className='submitBtn'>Submit</button>
                    <div className='links'>
                        <a href='https://www.linkedin.com/in/dhrumiprajapati' target='_blank' rel='noopener noreferrer'>
                            <img src={LinkedinIcon} alt='LinkedIn' className='link' />
                        </a>
                        <a href='https://github.com/DhrumiPrajapati' target='_blank' rel='noopener noreferrer'>
                            <img src={GithubIcon} alt='GitHub' className='link' />
                        </a>
                        
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;