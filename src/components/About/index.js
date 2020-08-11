import React from 'react';

const About = () => {
  return (
    <section id="about" className="three">
      <div className="container">
        <header>
          <h2>About Me</h2>
        </header>

        {/*<a href="/#" className="image featured">*/}
        {/*  <img src={pic8} alt="" />*/}
        {/*</a>*/}

        <p>
          My name is Sean Norwood and I develop web applications using
          Javascript and Typescript. I specialize in front-end applications
          using React and React frameworks. I have experience developing APIs
          using GraphQL, REST, and MongoDB.
        </p>
        <p>
          I am extremely passionate about web development and enjoy learning new
          patterns, keeping up with the fast-paced world of Javascript, and
          taking on a new challenge every day.
        </p>
        <p>
          When I'm not programming I lose myself in space-based video games
          about simulation, survival, and building. I also like to garden at my
          home in Florida with my wife, son, and two German Shepherds.
        </p>
      </div>
    </section>
  );
};

export default About;
