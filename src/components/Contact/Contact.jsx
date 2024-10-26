import React, { useState, useEffect } from  'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const WebhookUrlCompleteData = "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZjMDYzNTA0MzY1MjZhNTUzYzUxMzYi_pc";
    const WebhookUrlInCompleteData = "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZjMDYzNTA0MzY1MjZiNTUzNjUxMzEi_pc"

    const [result, setResult] = React.useState("");

    useEffect(() => {
      const savedName = localStorage.getItem('name') || '';
      const savedEmail = localStorage.getItem('email') || '';
      const savedPhone = localStorage.getItem('phone') || '';
      const savedMessage = localStorage.getItem('message') || '';
  
      document.querySelector('input[name="name"]').value = savedName;
      document.querySelector('input[name="email"]').value = savedEmail;
      document.querySelector('input[name="phone"]').value = savedPhone;
      document.querySelector('textarea[name="message"]').value = savedMessage;
    }, []);
  
    const handleInputChange = (event) => {
      localStorage.setItem(event.target.name, event.target.value);
    };
  
    const captureIncompleteData = (userId, formData) => {
      
      formData.append("returning", localStorage.getItem('hasReturned') ? "Yes" : "No");
  
      fetch(WebhookUrlInCompleteData, {
        method: "POST",
        body: formData,
      })
      .then(response => {
        if (response.ok) {
          console.log("Partial data sent to Google Sheets");
          localStorage.setItem('hasReturned', true); 
        } else {
          console.log("Failed to send partial data");
        }
      })
      .catch(error => console.error("Error sending partial data:", error));
    };
  
    const isFormComplete = () => {
      const name = localStorage.getItem('name') || '';
      const email = localStorage.getItem('email') || '';
      const message = localStorage.getItem('message') || '';
      const phone = localStorage.getItem('phone') || '';
  
      return name !== '' && email !== '' && message !== '' && phone !== '';
    };
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending...");
  
      const formData = new FormData(event.target);
  
      let userId = localStorage.getItem('userId');
      if (!userId) {
        userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem('userId', userId); 
      }
      formData.append("user_id", userId); 
  
      if (isFormComplete()) {
        const response = await fetch(WebhookUrlCompleteData, {
          method: "POST",
          body: formData,
        });
  
        if (response.ok) {
          setResult("Message sent successfully!");
          localStorage.clear(); 
        } else {
          setResult("Error. Please try again.");
        }
      } else {
        captureIncompleteData(userId, formData);
        setResult("Form submitted with incomplete data.");
      }
    };

    


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact@edpulsegroup.com</li>
            <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
            <li><img src={location_icon} alt="" />Québec, CANADA</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' onInput={handleInputChange} placeholder='Enter your name' />
            <label>Your Email</label>
            <input type="email" name='email' onInput={handleInputChange} placeholder='Enter your email' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' onInput={handleInputChange} placeholder='Enter your mobile number' />
            <label>Write your messages here</label>
            <textarea name="message" rows="6"  onInput={handleInputChange} placeholder='Enter your message' ></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span className='result'>{result}</span>
      </div>
    </div>
  )
}

export default Contact
