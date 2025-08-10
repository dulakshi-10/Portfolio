import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'



const Contact = () => {
   const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "88afc6be-5359-4592-aec8-ae2dedf01b1b"); //input key

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            If you like what you see and want to connect, just drop a message! 
            I'm always happy to chat, collaborate, or help out.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="email" />
              <p>dulakshitsomarathna@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="phone" />
              <p>+94 703158269</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location" />
              <p>Kurunegala,Sri Lanka</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="message">Your Message</label>
          <textarea name="message" rows="6" placeholder="Write your message here..." required></textarea>

          <button type="submit" className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;