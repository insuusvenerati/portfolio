import React from 'react';
import Scroll from '../Scroll';
import { AwesomeButton } from 'react-awesome-button';

const Hero = () => {
  return (
    <section id="top" className="one dark cover">
      <div className="container">
        <header>
          <h2 className="alt">
            Hi! I'm <strong>Sean</strong>
            <br />
            Web developer
          </h2>
          <p>I have made few things check it out.</p>
        </header>

        <footer>
          <Scroll type="id" element={'portfolio'}>
            <a style={{ textDecoration: 'none !important' }} href="#portfolio">
              <AwesomeButton style={{ height: 55 }} size="large" type="primary">
                Show me
              </AwesomeButton>
            </a>
          </Scroll>
        </footer>
      </div>
    </section>
  );
};

export default Hero;
