import React from "react";
// import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";
import "./blogTemplate.css";

const BlogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 50px;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 20px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > p {
      margin: 0px;
      min-height: 20px;
      display: flex;
      align-items: center;
    }
  }
`;

const MarkDownStyle = styled.div`
  // custom style
  & > h3 {
    border-bottom: 1px solid rgba(27, 31, 35, 0.1);
    margin-top: 50px;
    margin-bottom: 20px;
  }
`;

export default function Template({ pageContext }) {
  const { frontmatter, html } = pageContext;

  return (
    <Layout>
      <BlogHeader>
        <h2>{frontmatter.title}</h2>
        <div>
          <p>{frontmatter.date}</p>
        </div>
      </BlogHeader>
      <MarkDownStyle
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
}
