import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import CardLayout from "../components/card-layout";

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/^((?!markdown-pages/temp).)*$/" } }
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
      <h3>This is my blog home ({data.allMarkdownRemark.nodes.length})</h3>
      <CardLayout contents={data.allMarkdownRemark.nodes} />
    </Layout>
  );
};

export default IndexPage;
