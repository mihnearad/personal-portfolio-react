import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "ead8f532-a66e-4aa0-8615-0fee966f1b5d");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img src={theme_pattern} alt='' />
            </div>

            <div className="contact-section">
                <div className="contact-left">
                    <div className="contact-text">
                        <h1>Let's talk</h1>
                        <p>Do you want to know more about my projects?</p>
                    </div>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt='' />
                            <p>contact@mihnea-radulescu.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt='' />
                            <p>Belgium, Waloon Region</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' required />

                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' required />

                    <label htmlFor="message">Write your message here</label>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter your message' required></textarea>
                    <button type="submit" className='contact-submit'>Submit now</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
}

export default Contact;
