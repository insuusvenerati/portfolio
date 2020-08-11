import React from 'react';
import Scroll from '../Scroll';
import { AwesomeButton } from 'react-awesome-button';
import { useHeroData } from './query';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

function UnsplashAttribution() {
  return (
    <span style={{ fontSize: 10 }}>
      Photo by{' '}
      <a href="https://unsplash.com/@nasa?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        NASA
      </a>{' '}
      on{' '}
      <a href="https://unsplash.com/s/photos/space?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Unsplash
      </a>
    </span>
  );
}

const Hero = () => {
  const { desktopImage } = useHeroData();

  return (
    <section id="top" className="one dark cover">
      <div className="container">
        <header>
          <h2 className="alt">
            Hi! I'm <strong>Sean</strong>
            <br />
            Web developer
          </h2>
          <p>I make web applications with passion</p>
        </header>

        <footer style={{ display: 'flex', flexDirection: 'column' }}>
          <Scroll type="id" element={'portfolio'}>
            <a
              style={{ textDecoration: 'none', border: 'none' }}
              href="#portfolio"
            >
              <AwesomeButton style={{ height: 55 }} size="large" type="primary">
                Show me
              </AwesomeButton>
            </a>
          </Scroll>
        </footer>
        <UnsplashAttribution />
      </div>
    </section>
  );
};

export default Hero;
