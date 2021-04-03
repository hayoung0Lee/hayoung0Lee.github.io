import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import CardLayout from "../components/card-layout";

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/markdown-pages/random/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
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
const RandomPage = ({ data }) => {
  return (
    <Layout>
      <h3>Random Page ({data.allMarkdownRemark.nodes.length})</h3>
      <CardLayout contents={data.allMarkdownRemark.nodes} />
    </Layout>
  );
};

export default RandomPage;
