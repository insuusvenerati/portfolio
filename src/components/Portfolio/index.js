import React from 'react';
import Image from 'gatsby-image';
import useProjects from './query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Article = ({ title, fixed, fluid, author, repo }) => (
  <article className="item">
    <span className="image fit">
      <a href={fixed.src}>
        <Image fluid={fluid} />
      </a>
    </span>
    <header>
      <a target="_blank" rel="noreferrer" href={repo}>
        <h3>
          <FontAwesomeIcon icon={faGithub} /> {title}
        </h3>
      </a>
    </header>
  </article>
);

const Col = ({ title, fixed, fluid, author, repo }) => {
  return (
    <div className="col-4 col-12-mobile">
      <Article
        repo={repo}
        author={author}
        fixed={fixed}
        fluid={fluid}
        title={title}
      />
    </div>
  );
};

const Portfolio = () => {
  const {
    allProjectsJson: { edges: allProjectsEdges },
  } = useProjects();
  return (
    <section id="portfolio" className="two">
      <div className="container">
        <header>
          <h2>Portfolio</h2>
        </header>
        <div className="row">
          {allProjectsEdges &&
            allProjectsEdges.map((project) => {
              const {
                node: {
                  image: { fluid: projectImage, fixed: fullSizeImage },
                  name: projectName,
                  author,
                  repo,
                  id,
                },
              } = project;
              return (
                <Col
                  title={projectName}
                  fluid={projectImage}
                  key={id}
                  author={author}
                  repo={repo}
                  fixed={fullSizeImage}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
