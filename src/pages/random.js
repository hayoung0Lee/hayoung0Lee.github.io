import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import CardLayout from "../components/card-layout";
import Filter from "../components/filter";

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

    allDirectory(filter: { relativeDirectory: { eq: "random" } }) {
      nodes {
        base
        relativeDirectory
      }
    }
  }
`;

// markup
const RandomPage = ({ data }) => {
  const [tag, setTag] = useState("all");
  return (
    <Layout>
      <Filter tag={tag} setTag={setTag} data={data} base={"random"} />
      <CardLayout
        contents={data.allMarkdownRemark.nodes}
        base={"random"}
        tag={tag}
      />
    </Layout>
  );
};

export default RandomPage;
