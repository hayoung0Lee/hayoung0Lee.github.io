exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`);

  const result = await graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "markdown-pages" } }) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              date
              slug
            }
          }
          birthTime
          modifiedTime
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allFile.nodes.forEach(
    ({ childMarkdownRemark, birthTime, modifiedTime }) => {
      createPage({
        path: childMarkdownRemark.frontmatter.slug,
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
          birthTime: birthTime,
          modifiedTime: modifiedTime,
          slug: childMarkdownRemark.frontmatter.slug,
        },
      });
    }
  );
};
