import { graphql, useStaticQuery } from 'gatsby';

const useProjects = () => {
  return useStaticQuery(graphql`
    query Projects {
      allProjectsJson {
        edges {
          node {
            id
            image {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid_withWebp
                src
              }
              fixed(quality: 100, width: 1500) {
                ...GatsbyImageSharpFixed_withWebp
                src
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
