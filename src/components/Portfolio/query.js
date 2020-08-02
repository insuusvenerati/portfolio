import { graphql, useStaticQuery } from 'gatsby';

const useProjects = () => {
  return useStaticQuery(graphql`
    query Projects {
      allProjectsJson {
        edges {
          node {
            id
            image {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
            name
            repo
            author
          }
        }
      }
    }
  `);
};

export default useProjects;
