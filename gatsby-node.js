exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`);

  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            slug
            date
          }
          html
          rawMarkdownBody
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.nodes.forEach(
    ({ frontmatter, html, rawMarkdownBody }) => {
      createPage({
        path: frontmatter.slug,
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
          html,
          rawMarkdownBody,
          frontmatter,
        },
      });
    }
  );
};
