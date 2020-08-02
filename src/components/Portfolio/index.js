import React from 'react';
import Image from 'gatsby-image';
import useProjects from './query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Article = ({ title, fixed, fluid, author, repo }) => (
  <article className="item">
    <span className="image fit">
      {fixed ? <Image fixed={fixed} /> : <Image fluid={fluid} />}
    </span>
    <header>
      <a target="_blank" rel="noreferrer" href={repo}>
        <h3>
          <FontAwesomeIcon icon={faGithub} /> {title}
        </h3>
      </a>
    </header>
    {/*<div*/}
    {/*  style={{*/}
    {/*    display: 'flex',*/}
    {/*    padding: '5px',*/}
    {/*    alignItems: 'center',*/}
    {/*    justifyContent: 'start',*/}
    {/*  }}*/}
    {/*>*/}
    {/*  <a*/}
    {/*    style={{ textDecoration: 'none', marginRight: 5, fontSize: 24 }}*/}
    {/*    href={repo}*/}
    {/*    target="_blank"*/}
    {/*    rel="noreferrer"*/}
    {/*  >*/}
    {/*    <FontAwesomeIcon icon={faGithub} />*/}
    {/*  </a>*/}
    {/*  <span>{author}</span>*/}
    {/*</div>*/}
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
        <p>
          Life will feel it is always a great need for eu valley, the valley CNN
          ridiculous smile at any time chat mainstream clinical homes. Mauris
          floor was very warm and we need it. One customer now nibh Bureau dark
          pools behavior.
        </p>

        <div className="row">
          {allProjectsEdges &&
            allProjectsEdges.map(project => {
              const {
                node: {
                  image: { fluid: projectImage },
                  name: projectName,
                  author,
                  repo,
                },
              } = project;
              return (
                <Col
                  title={projectName}
                  fluid={projectImage}
                  key={project.node.id}
                  author={author}
                  repo={repo}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
