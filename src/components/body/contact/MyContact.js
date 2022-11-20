import React, { useState, useEffect } from 'react';
import './MyContact.css';
import emailjs from '@emailjs/browser';
import Aos from "aos";
import "aos/dist/aos.css";


const Result = () =>{
  return(
    <p>Your message has been successfully sent✅</p>
  )
}

export default function MyContact(props) {
  useEffect(() => {
    Aos.init({duration: 1000});
}, []);
  
  const [result, showResult] = useState(false);
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wf4g3si', 'template_3ukjfan', e.target, '1hDsl-7H-MYeHZoKO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  };
  setTimeout (() =>{
    showResult(false);
  }, 5000);

  return (
    <form action="" onSubmit={sendEmail}>
        <div className='box' data-aos="zoom-out">
              <div className="formWord">
                <h2>Say Hello!</h2>

                <span className='names'>Full Name</span>
                <br />
                <input className="input100" placeholder='Jenson'
                type="text" name="from_name" required />
                <br />

                <span className='names'>Enter Email</span>
                <input className="input100" placeholder='jenson@gmail.com'
                type="text" name="from_email" required />
                
              </div>
            
              <div className="formWord">
                <span className='names'>Your Message</span>
                
                <textarea name="message" 
                placeholder='I want you to join my company!' 
                required></textarea>
                
                <button className='mcrn'>SUBMIT</button>

                <div className="row">{result? <Result /> : null}</div>
              </div>
              </div>
            </form>
  )
}