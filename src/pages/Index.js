import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Kean Seng Phang's personal website. University of Malaya graduate soon."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
        </div>
      </header>
      <p>
        <h3><Link to="/about">about me</Link></h3>
        <h3><Link to="/resume">resume</Link></h3>
        <h3><Link to="/projects">projects</Link></h3>
        {/* <h3><Link to="/stats">site statistics</Link></h3> */}
        <h3><Link to="/contact">contact</Link> me</h3>
      </p>
    </article>
  </Main>
);

export default Index;
