/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  /* Grab the source node `ProjectsJson` and merge the ImageSharp field
   *  into the image field defined in Projects.json
   *  Use `fixed.originalName` which is the filename that should match what's
   * listed in the image field.
   */
  const typeDefs = `
    type ProjectsJson implements Node { 
      image: ImageSharp @link(by: "fluid.originalName")
    }
  `;
  createTypes(typeDefs);
};
