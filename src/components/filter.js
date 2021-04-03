import React from "react";
import styled from "styled-components";
import { device } from "../utils/device";

const Option = styled.ul`
  & li {
    box-sizing: border-box;
    list-style: none;
    border: 1px solid black;
    border-radius: 5px;
    display: inline-block;
    min-width: 90px;
    text-align: center;
    padding: 12px 10px;
    margin: 0 10px;
    cursor: pointer;
  }

  & li.current {
    background-color: grey;
    border: 1px solid grey;
    color: white;
  }

  display: flex;
  justify-content: center;

  @media ${device.mobileL} {
    display: block;

    & li {
      margin-bottom: 10px;
    }
  }
`;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    display: block;

    & h3 {
      margin-top: 10px;
      width: 100%;
      text-align: center;
    }
  }
`;

const Filter = ({ tag, setTag, data, base }) => {
  return (
    <FilterWrapper>
      <h3>
        {base.charAt(0).toUpperCase() + base.slice(1)} Page (
        {tag === "all"
          ? data.allMarkdownRemark.nodes.length
          : data.allMarkdownRemark.nodes.filter((d) =>
              d.fileAbsolutePath.match(`/markdown-pages/${base}/${tag}`)
            ).length}
        )
      </h3>
      <Option>
        {data.allDirectory.nodes.map((d, index) => {
          return (
            <li
              key={index}
              className={tag === d.base ? "current" : ""}
              onClick={() => setTag(d.base)}
            >
              {d.base}
            </li>
          );
        })}
        <li
          className={tag === "all" ? "current" : ""}
          onClick={() => setTag("all")}
        >
          all
        </li>
      </Option>
    </FilterWrapper>
  );
};

export default Filter;
