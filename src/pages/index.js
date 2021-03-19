import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import CardLayout from "../components/card-layout";

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          slug
          date
        }
        fileAbsolutePath
      }
    }
  }
`;

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <h3>전체글을 보여줄까 고민중인 페이지</h3>
      <CardLayout contents={data.allMarkdownRemark.nodes} />
    </Layout>
  );
};

export default IndexPage;
