import React from 'react'
import Image from "./images/contact image.png"


import Fade from "react-reveal/Fade";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_vsr16bd',
    'template_p9f4nl8',
    e.target,
    "user_6FPugZqUYcKxgOHXn3pSu"
    ).then(res => {
      console.log(res);
    }).catch(err => console.log(err));
  }
 
 
  return (
    <div className="container about">
  
    <div className="row">
      <Fade left cascade>
        <div className="col-lg-6">
          <div className="img-div">
            <img src={Image} alt="deadlines" />
          
          </div>
        </div>
      </Fade>
      <Fade right cascade>
        <div className="col-lg-6 ">
        <form align="center" className="row" onSubmit={sendEmail}style={{margin:'50px'}}>
        <input type='hidden' name='form-name' value='contact' />

<label htmlFor='name'>Name</label>
<input type='text' name='name' id='name' placeholder='Vinu'  className='gradient' required></input>
<label htmlFor='email'>Email</label>
<input type='email' name='email' id='email' placeholder='vinurajsv@gmail.com' className='gradient' required></input>
<label htmlFor='message'>Message</label>
<textarea name='message' id='message' cols='25' rows='5' className='gradient' required></textarea>
<button type='submit' className='action'>
  Send
  </button>
  <button type='reset' className='action'>
  Clear
  </button>
              </form>
          

         
        </div>
      </Fade>
     
    </div>
  
  </div>
  )
}

export default Contact
