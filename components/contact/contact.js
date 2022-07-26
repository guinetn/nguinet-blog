﻿import sendmail from './sendmail.js'
import style from './contact.module.css';

export default function Contact() {

  return (
    <>
      <section className='margintop35'> 

      <div id='getintouch' className='flexleft'>
          <div className={`${style.getintouch}`}>
            <h2 className='marginleft1em'> 📐 Have a project in mind?</h2>
          </div>
      </div>
				
        <p>Let's exchange about it!</p>

        <div className={style.form}>

          <div className={`${style.inputContainer} relative ${style.ic2}`}>
            <input id="contact_name" className={style.input} type="text" placeholder=" " />
            <div className={style.cut}></div>
            <label htmlFor="contact_name" className={style.placeholder}>Your name</label>
          </div>

          <div className={`${style.inputContainer} relative ${style.ic2}`}>
            <input id="contact_email" className={style.input} type="text" placeholder=" " />
            <div className={`${style.cut}`}></div>
            <label htmlFor="contact_email" className={style.placeholder}>Email</label>
          </div>

          <div className={`relative ${style.ic2}`}>
            <textarea rows='5' cols='40' id="message" maxLength="200" className={style.textarea} placeholder=" "></textarea> 
            <div className={`${style.cut}`}></div>
            <label htmlFor="message" className={style.placeholder}>Message</label>
          </div>

        </div>

          <div>
            <button id="send" type="button" className='blue-button' onClick={sendmail}>SEND</button>
            <div id="sent_confirmation" className={style.send_successful_message}>👍 MESSAGE SENT! THANK YOU.</div>
            <div id="sent_failed" className={style.send_failed_message}>👎 ERROR: MESSAGE NOT SENT</div>
          </div>
           
        </section>
    </>
  );
}
