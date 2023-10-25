import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Kean Seng Phang</h2>
        <p><a href="mailto:keansengphang01@gmail.com">keansengphang01@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I am Kean Seng. I am a <a href="https://um.edu.my//">University of Malaya</a> undergraduate
        final year student. My study is major in Computer Science (Artificial Intelligence).
        I have skill in training machine learning model, robotics,
        knowledge representation and so on.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Kean Seng Phang</p>
    </section>
  </section>
);

export default SideBar;
