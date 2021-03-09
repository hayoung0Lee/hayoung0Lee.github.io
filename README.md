# Github blog

[Visit My blog](https://hayoung0lee.github.io/)

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

## References

https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/
