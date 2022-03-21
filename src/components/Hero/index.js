import { AwesomeButton } from 'react-awesome-button';
import Scroll from '../Scroll';

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
