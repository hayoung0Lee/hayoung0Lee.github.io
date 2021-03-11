import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/markdown-pages/everything/" } }
    ) {
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
const EverythingPage = ({ data }) => {
  return (
    <Layout>
      <h3>Everything Page</h3>
      <ul>
        {data.allMarkdownRemark.nodes.map((d, id) => {
          return (
            <li key={id}>
              {d.frontmatter.title} <Link to={d.frontmatter.slug}>읽기</Link>!
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default EverythingPage;
