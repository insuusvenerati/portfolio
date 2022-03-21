import Image from 'gatsby-image';
import useProjects from './query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Article = ({ title, fluid, repo, url = '#' }) => (
  <article className="item">
    <span className="image fit">
      <a target="_blank" rel="noreferrer" href={url}>
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

const Col = ({ title, fluid, author, repo, url }) => {
  return (
    <div className="col-4 col-12-mobile">
      <Article
        repo={repo}
        author={author}
        fluid={fluid}
        title={title}
        url={url}
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
                  image: { fluid: projectImage },
                  name: projectName,
                  author,
                  repo,
                  id,
                  url,
                },
              } = project;
              return (
                <Col
                  title={projectName}
                  fluid={projectImage}
                  key={id}
                  author={author}
                  repo={repo}
                  url={url}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
