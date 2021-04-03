exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`);

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/^((?!markdown-pages/temp).)*$/" }
        }
      ) {
        nodes {
          frontmatter {
            title
            slug
            date
          }
          fileAbsolutePath
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
