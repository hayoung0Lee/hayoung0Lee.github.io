---
slug: "/blog/design/css-layout"
title: "Css Layout"
date: "2021-04-01"
---

# Layout 잘 만들기!

css 중에 layout쪽이라도 잘하면 좋을것 같아서 정리해본다.

- position, flex, grid를 위주로 정리해봄

# What is Viewport

- [Viewport Concepts](https://developer.mozilla.org/en-US/docs/Web/CSS/Viewport_concepts)
- [Responsive Web Design Tutorial #3 - Intro to the Viewport](https://www.youtube.com/watch?v=JANETBQZJ8E&ab_channel=TheNetNinja)
- [Viewport meta tag](https://web.dev/viewport/#:~:text=Without%20a%20viewport%20meta%20tag,sized%20correctly%20on%20all%20devices.)
- [mdn using the viewport meta tag to control layout on mobile browsers](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)
- [meta viewport 사용법](https://aboooks.tistory.com/352)
- [understanding the viewport meta tag](https://medium.com/@nids.nitesh/understanding-the-viewport-meta-tag-b5ccd8c4f0e6)
- [Difference between visual viewport and layout viewport?](https://stackoverflow.com/questions/6333927/difference-between-visual-viewport-and-layout-viewport#:~:text=The%20visual%20viewport%20is%20the,not%20change%20size%20or%20shape.)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
    <meta name="viewport" content="width=960, initial-scale=1.0" />
    <!-- initial-scale은 zoom level -->
    <title>Document</title>
  </head>
  <style>
    .container {
      /* <meta name="viewport" content="width=960, initial-scale=1.0" /> 일때 
      width:320px로 주면 모바일 디바이스의 너비가 320px이라도 960px이 너비라고 기준을 잡고 
      그린다음 크기를 여기에 맞춰버린다.   */
      width: 320px;
      background-color: bisque;
      margin: auto;
    }
  </style>
  <body>
    <div class="container">app</div>
  </body>
</html>
```

# media query

- [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [beginner's guide to media query](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries)

```css
/* desktop first */

/* Media Queries */
@mediq screen and (max-width: 700px) {
  footer {
    /* something */
  }
}
```

- [The Beginner’s Guide to Responsive Web Design (Code Samples & Layout Examples)](https://kinsta.com/blog/responsive-web-design/)
- [Media Queries Breakpoints For Responsive Design In 2021](https://devfacts.com/media-queries-breakpoints-2021/)

# rem px em differences

https://chiamakaikeanyi.dev/sizing-in-css-px-vs-em-vs-rem/#:~:text=px%20is%20not%20scalable%2C%20it%20is%20an%20absolute%20unit.&text=Element%20(%20em%20)%20and%20Root%20element,the%20value%20of%20relative%20units.

- [What’s The Difference Between PX, EM, REM, %, VW, and VH?](https://ko.wikipedia.org/wiki/%ED%95%B4%EC%83%81%EB%8F%84)

# resolution

https://ko.wikipedia.org/wiki/%ED%95%B4%EC%83%81%EB%8F%84

# what is fluid layout

> FLUID layouts use relative measurements and respond to the width of the viewport. FIXED layouts use static measurements and do not respond to the width of the viewport.

# Understanding CSS Layout

- [css layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)

- float, postion, flex, grid

# Responsive Site

- [what is responsive web design](https://www.youtube.com/watch?v=3tLb3i7GB38&list=PL4cUxeGkcC9g9Vh9MAA-XKnfJsWZnPZFw&ab_channel=TheNetNinja)
- [Responsive design made easy](https://www.youtube.com/watch?v=bn-DQCifeQQ&ab_channel=KevinPowell)

# Apply responsive design

- [my repo](https://github.com/hayoung0Lee/gatsby-gomtang)

# responsive image

- https://www.youtube.com/watch?v=LlSH8u0o1-A&list=PL4cUxeGkcC9g9Vh9MAA-XKnfJsWZnPZFw&index=10&ab_channel=TheNetNinja

# web design for developers

- [web design for developers](https://thenewstack.io/tutorial-web-design-101-for-web-developers/)
- [web design for developers youtube](https://www.youtube.com/watch?v=ykn4XNDwW7Q&ab_channel=KevinPowell)
  - make clear blocks using rem and stuff

# Fixing layouts

1.

# References
