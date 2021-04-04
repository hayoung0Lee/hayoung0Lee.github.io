module.exports = {
  siteMetadata: {
    title: "Hayoung's Memo",
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "JavaScript",
        link: "/javascript",
      },
      {
        name: "Project",
        link: "/project",
      },
      {
        name: "Random",
        link: "/random",
      },
      {
        name: "About Me",
        link: "/about-me",
      },
    ],
  },
  plugins: [
    // style을 위한 node package
    "gatsby-plugin-styled-components",
    // react-helmet을 쓰기위한 plugin
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`, // sourceInstance에 나타나는 이름, 이걸로 filter를 걸수가 있다.
        path: `./src/notes`,
      },
    },
    `gatsby-transformer-marked-hy`,
  ],
};
