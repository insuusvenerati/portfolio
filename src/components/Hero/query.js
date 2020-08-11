import { graphql, useStaticQuery } from 'gatsby';

export const useHeroData = () => {
  return useStaticQuery(graphql`
    query BGImage {
      desktopImage: imageSharp(
        fluid: { originalName: { eq: "nasa-space-unsplash.jpg" } }
      ) {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  `);
};
