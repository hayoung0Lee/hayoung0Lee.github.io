import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

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

export default IndexPage;