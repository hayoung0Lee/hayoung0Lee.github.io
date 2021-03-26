import React, { FC } from "react";
import styled from "styled-components";
import { HeaderProps } from "../utils/types";
import { Link } from "gatsby";

const HeaderStyle = styled.header`
  min-height: 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & nav {
    & ul {
      display: flex;
      justify-content: space-between;
      list-style-type: none;
      padding: 0;
      flex-wrap: wrap;

      & li {
        padding: 10px;
        padding-left: 0px;
        margin-right: 10px;
      }
    }
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  font-size: 30px;
`;
const Header: FC<HeaderProps> = ({ menuLinks, siteTitle }) => {
  return (
    <HeaderStyle>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "black",
        }}
      >
        <Logo>{siteTitle}</Logo>
      </Link>
      <nav>
        <ul>
          {menuLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                activeStyle={{ fontWeight: "bold" }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
