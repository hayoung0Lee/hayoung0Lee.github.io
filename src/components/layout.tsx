import React, { FC } from "react";
import styled from "styled-components";
import Header from "./header";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import "./layout.css";
import { device } from "../utils/device";

const Container = styled.div`
  margin: auto;
  box-sizing: border-box;
`;

const HeaderWrapper = styled.div`
  background-color: black;
  padding: 0 5vw 0 5vw;

  @media ${device.laptop} {
    padding: 0 2vw 0 2vw;
  }
`;

const MainWrapper = styled.div`
  padding: 0 5vw 0 5vw;

  @media ${device.laptop} {
    padding: 0 2vw 0 2vw;
  }
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
        title={data.site.siteMetadata.title}
        meta={[
          { name: "description", content: "Hayoung's Memo blog" },
          {
            name: "keywords",
            content: "Javascript,React,Gatsby,Next.js,junior",
          },
        ]}
      ></Helmet>
      <HeaderWrapper>
        <Header
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata.title}
        />
      </HeaderWrapper>
      <MainWrapper>{children}</MainWrapper>
    </Container>
  );
};

export default Layout;
