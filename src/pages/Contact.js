import React from 'react';
import { Link } from 'react-router-dom';
/* eslint import/no-extraneous-dependencies: off */
import emailjs from '@emailjs/browser';
import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => {
  const form = React.useRef();
  const mystyle = { listStyleType: 'none' };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_od0o0pg', 'template_pm89f8q', e.target, 'TmPdnUpRCau1oDY40')
      .then(
        () => {
          // eslint-disable-next-line
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          // eslint-disable-next-line
          alert('Failed to send the message, please try again');
        },
      );

    e.target.reset(); // Clear the form after submission
  };

  return (
    <Main
      title="Contact"
      description="Contact Kean Seng Phang via email @ keansengphang01@gmail.com"
    >
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2><Link to="/contact">Contact</Link></h2>
          </div>
        </header>
        <div className="email-at">
          <p>Feel free to get in touch.</p>
          <p>You can email me at: keansengphang01@gmail.com</p>
        </div>
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <ul style={mystyle}>
              <li className="half">
                <input placeholder="Name" type="text" name="name" required />
              </li>
              <li className="half">
                <input placeholder="Email" type="email" name="email" required />
              </li>
              <li>
                <input placeholder="Subject" type="text" name="subject" required />
              </li>
              <li>
                <textarea placeholder="Message" type="text" name="message" required />
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
        <ContactIcons />
      </article>
    </Main>
  );
};

export default Contact;
