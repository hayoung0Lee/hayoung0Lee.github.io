import React, { FC } from "react";
import styled from "styled-components";
import { HeaderProps } from "../utils/types";
import { Link } from "gatsby";

const HeaderStyle = styled.header`
  border: 1px solid black;
  min-height: 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > h1 {
    padding: 0;
    @media only screen and (max-width: 600px) {
      display: flex;
    }
  }

  & > h1 > a {
    @media only screen and (max-width: 600px) {
      margin: auto;
      max-width: 300px;
      // border: 1px solid black;
    }
  }

  & > div {
    @media only screen and (max-width: 600px) {
      // border: 1px solid black;
      display: flex;
    }
  }

  & nav > ul {
    padding: 0;
  }
`;

const Header: FC<HeaderProps> = ({ menuLinks, siteTitle }) => {
  return (
    <HeaderStyle>
      <h1 style={{ margin: 0, flex: 1 }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div>
        <nav>
          <ul
            style={{
              display: "flex",
              flex: 1,
              flexWrap: "wrap",
            }}
          >
            {menuLinks.map((link) => (
              <li
                key={link.name}
                style={{
                  listStyleType: `none`,
                  padding: `1rem`,
                }}
              >
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </HeaderStyle>
  );
};

export default Header;
