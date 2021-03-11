# Github blog

[Visit My blog](https://hayoung0lee.github.io/)

## How to use

```javascript
// Inside gatsby-config.js, Add Menulinks. I added JavaScript menu to make 'JavaScript Menu'
menuLinks: [
    {
    name: "home",
    link: "/",
    },
    {
    name: "JavaScript",
    link: "/javascript",
    },
],

// Make javaScript folder inside markdown-pages folder, and Write your file

// make JavaScript Page inside pages folder

// In JavaScript page component, used regext to search markdown files
export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/markdown-pages/javascript/" } }
    ) {
      nodes {
        frontmatter {
          title
          slug
          date
        }
        fileAbsolutePath
      }
    }
  }
`;
```

## How to Start Gatsby Github blog

```
gatsby new # Start Project, Select Options

git branch -m develop // Modify master branch to develop

git add .
git commit -m "Initial commit"
git push -u origin develop


// install gatsby gh-pages option
npm install gh-pages --save-dev

// add deploy command to gatsby
"deploy": "gatsby build && gh-pages -d public -b master"

// npm run deploy will do somethin to master branch
npm run deploy
```

So, do something in your develop branch and `npm run deploy` will make change into the master branch.

- [reference](https://m.blog.naver.com/lyshyn/221527017383)

## How to add Markdown file

[Follow this link](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/)

## How to use siteMetaData

[Follow this link](https://www.gatsbyjs.com/docs/creating-dynamic-navigation/#viewing-the-sitemetadata-in-graphql)

## Markdown styling

[Follow this link](https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/)
[prismjs](https://prismjs.com/)

## Font

[spoca han sans](https://spoqa.github.io/spoqa-han-sans/ko-KR/#header)

## Add github readme style

https://github.com/sindresorhus/github-markdown-css

## References

https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/
