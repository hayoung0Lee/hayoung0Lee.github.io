import React, { FC } from "react";
import styled from "styled-components";
import Header from "./header";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

const Container = styled.div`
  width: 80vw;
  margin: auto;
  box-sizing: border-box;
`;

const Layout: FC<React.ReactNode> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);

  return (
    <Container>
      <Helmet
        title={"title"}
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" },
        ]}
      ></Helmet>
      <Header
        menuLinks={data.site.siteMetadata.menuLinks}
        siteTitle={data.site.siteMetadata.title}
      />
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
