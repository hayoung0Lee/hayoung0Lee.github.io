import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";

const BlogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > p {
      margin: 0px;
      height: 20px;
      display: flex;
      align-items: center;
    }
  }
`;

const MarkDownStyle = styled.div`
  & > h3 {
    margin-top: 60px;
    border-bottom: 1px solid black;
  }
`;

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const { birthTime, modifiedTime } = pageContext;

  return (
    <Layout>
      <BlogHeader>
        <h2>{frontmatter.title}</h2>
        <div>
          <p>First Written: {formatDate(birthTime)}</p>
          <p>Modified: {formatDate(modifiedTime)}</p>
        </div>
      </BlogHeader>
      <MarkDownStyle dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
