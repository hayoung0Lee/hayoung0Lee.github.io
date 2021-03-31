import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import CardLayout from "../components/card-layout";

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/markdown-pages/javascript/" } }
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
const JavaScriptPage = ({ data }) => {
  return (
    <Layout>
      <h3>JavaScript Page</h3>
      <CardLayout contents={data.allMarkdownRemark.nodes} />
    </Layout>
  );
};

export default JavaScriptPage;
