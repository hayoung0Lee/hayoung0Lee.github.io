import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { HeaderProps } from "../utils/types";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { device } from "../utils/device";

const HeaderStyle = styled.header`
  min-height: 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

    & .hamburger {
      & > div {
        float: right;
      }
      display: none;
    }
  }

  @media ${device.laptop} {
    & nav {
      & ul {
        display: block;
        position: absolute;
        right: 0vw;
        top: 50px;
        padding-top: 10px;
        width: 150px;
        background-color: black;
        margin: 0;

        & li {
          height: 25px;
          line-height: 25px;
          padding-left: 10px;
          margin-right: 0px;
          border-top: 1px solid white;
        }
      }

      & ul.close {
        display: none !important;
        overflow: hidden;
        position: static;
      }

      & .hamburger {
        cursor: pointer;
        display: block;
      }
    }
  }

  @media ${device.mobileL} {
    & nav {
      & ul {
        right: 0vw;
      }
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  font-size: 25px;
  color: white;
`;

const Header: FC<HeaderProps> = ({ menuLinks, siteTitle }) => {
  const [hamburger, setHamburger] = useState<boolean>(false);

  const handleHamburger = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setHamburger(!hamburger);
  };

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
        <div
          className="hamburger clearfixed"
          onClick={(e) => handleHamburger(e)}
        >
          <StaticImage
            src="../images/hamburger.png"
            alt="A dinosaur"
            width={40}
          />
        </div>
        <ul className={hamburger ? "" : "close"}>
          {menuLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                style={{
                  textDecoration: "none",
                  color: "white",
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
