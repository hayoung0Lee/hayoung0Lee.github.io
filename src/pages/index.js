import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import CardLayout from "../components/card-layout";

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      nodes {
        frontmatter {
          title
          slug
          date
        }
        html
        fileAbsolutePath
      }
    }
  }
`;

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <h3>
        Home (
        {
          data.allMarkdownRemark.nodes.filter(
            ({ fileAbsolutePath }) =>
              !fileAbsolutePath.match(`/markdown-pages/temp`)
          ).length
        }
        )
      </h3>
      <CardLayout
        tag={"all"}
        contents={data.allMarkdownRemark.nodes.filter(
          ({ fileAbsolutePath }) =>
            !fileAbsolutePath.match(`/markdown-pages/temp`)
        )}
      />
    </Layout>
  );
};

export default IndexPage;
