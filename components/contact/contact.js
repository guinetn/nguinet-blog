import {sendmail} from './sendmail.js'
import style from './contact.module.css';

export default function Contact() {

  const send_mail = (e) => {
    console.log(e);
    sendmail();
  }

  return (
    <>
      <h1>Contact</h1>  

       <section>
            
            <fieldset>
                <legend>Claim Subject</legend>
                <select name="subject" id="subject">
                    <option value="">--Please choose a subject--</option>
                    <option value="Question">Question</option>
                    <option value="Technology">Technology</option>
                    <option value="Price">Price</option>
                    <option value="Availability">Availability</option>
                </select>
            </fieldset>

            <br/>
            <fieldset>
                <legend>Details about your claim</legend>
                <textarea rows='5' cols='40' id="message" maxLength="200"></textarea> 
            </fieldset>

            <br/>
            <fieldset>
                <legend>Contact</legend>

                <div>
                    <input type="text" id="contact_name" size="35" maxLength="80" placeholder="your name"/>
                    <br/>
                    <input type="email" id="contact_email" size="35" maxLength="80" placeholder="Your email" />
                </div>
            </fieldset>

            <button id="send" type="button" className='blue-button' onClick={send_mail}>SEND</button>
            <div id="sent_confirmation" className={style.send_successful_message}>👍 MESSAGE SENT! THANK YOU.</div>

        </section>
 
    </>
  );
}
