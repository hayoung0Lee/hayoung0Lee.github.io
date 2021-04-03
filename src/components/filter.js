import React from "react";

const Filter = ({ tag, setTag, data, base }) => {
  console.log("tag", tag);
  return (
    <>
      <h3>
        {base.charAt(0).toUpperCase() + base.slice(1)} Page (
        {tag === "all"
          ? data.allMarkdownRemark.nodes.length
          : data.allMarkdownRemark.nodes.filter((d) =>
              d.fileAbsolutePath.match(`/markdown-pages/${base}/${tag}`)
            ).length}
        )
      </h3>
      <ul>
        {data.allDirectory.nodes.map((d, index) => {
          return (
            <li key={index}>
              <button onClick={() => setTag(d.base)}>{d.base}</button>
            </li>
          );
        })}
        <li>
          <button onClick={() => setTag("all")}>all</button>
        </li>
      </ul>
    </>
  );
};

export default Filter;
