import { graphql, useStaticQuery } from 'gatsby';

const useProjects = () => {
  return useStaticQuery(graphql`
    query Projects {
      allProjectsJson {
        edges {
          node {
            id
            image {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid_withWebp
                src
              }
            }
            name
            repo
            url
          }
        }
      }
    }
  `);
};

export default useProjects;
