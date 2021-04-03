import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import CardLayout from "../components/card-layout";
import Filter from "../components/filter";

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/markdown-pages/project/" } }
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
    allDirectory(filter: { relativeDirectory: { eq: "project" } }) {
      nodes {
        base
        relativeDirectory
      }
    }
  }
`;

// markup
const ProjectPage = ({ data }) => {
  const [tag, setTag] = useState("all");
  return (
    <Layout>
      <Filter tag={tag} setTag={setTag} data={data} base={"project"} />
      <CardLayout
        base={"project"}
        tag={tag}
        contents={data.allMarkdownRemark.nodes}
      />
    </Layout>
  );
};

export default ProjectPage;
