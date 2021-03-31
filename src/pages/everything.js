import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import CardLayout from "../components/card-layout";

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/markdown-pages/everything/" } }
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
const EverythingPage = ({ data }) => {
  return (
    <Layout>
      <h3>Everything Page</h3>
      <CardLayout contents={data.allMarkdownRemark.nodes} />
    </Layout>
  );
};

export default EverythingPage;
