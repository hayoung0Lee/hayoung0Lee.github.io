---
slug: "/css/history of layout"
title: "History of Layout"
date: "2021-04-04"
---

This article is based on these three materials. [floats, flexbox, grid - the progression of CSS layouts](https://www.youtube.com/watch?v=R7gqJkdc5dM&ab_channel=KevinPowell), [Modern CSS Explained for Dinosaurs](https://medium.com/actualize-network/modern-css-explained-for-dinosaurs-5226febe3525), [Why CSS grid-area is the best property for laying out content](https://www.youtube.com/watch?v=duH4DLq5yoo&ab_channel=KevinPowell).

### History of Float, Flex and Grid

1. Float-based layout - how to use float

> The CSS float property was originally introduced to float an image inside a column of text on the left or right (something you often see in newspapers). Web developers in the early 2000s took advantage of the fact that you could float not just images, but any element, meaning you could create the illusion of rows and columns by floating entire divs of content. But again, floats weren’t designed for this purpose, so creating this illusion was difficult to pull off in a consistent fashion. - from Modern CSS Explained for Dinosaurs

원래 layout을 목적으로 등장한 것은 아니지만(신문처럼 이미지를 텍스트가 둘러쌀수 있도록 하기 위해서 등장했다), 이를 활용해서 rows, columns 이 있는 것과 같은 효과를 낼 수는 있었지만 float를 clear도 해줘야하고 쓸때마다 복잡했던 방법! Holy Grail이라고 성배를 만드는 문제가 있는데, 보면 단순해보이지만 float로 해결하려면 상당히 복잡했고 flex가 등장했다.

<img src="https://miro.medium.com/max/1400/1*_2LrWDjxL8Q33fL6Ci4hIw.png" alt="from Modern CSS Explained for Dinosaurs">

2. Flex-based layout - how to use Flex

> The flexbox CSS property was first proposed in 2009, but didn’t get widespread browser adoption until around 2015. Flexbox was designed to define how space is distributed across a single column or row, which makes it a better candidate for defining layout compared to using floats. This meant that after about a decade of using float-based layouts, web developers were finally able to use CSS for layout without the need for the hacks needed with floats. - from Modern CSS Explained for Dinosaurs

> It’s important to note again that flexbox was designed to space elements within a single column or row — it was not designed for an entire page layout! - from Modern CSS Explained for Dinosaurs

flex는 한 columns이나 rows를 기준으로 공간을 배치하기 위해서 만들어진 것이다. 그런데 세개의 박스를 한 row에 세우고 싶으면 이 부분을 div로 감싸줘야해서 layout변경을 위해 html을 바꾸어야하는 문제가 있다. 그래도 float방식보다는 좋은데, 여전히 한 row나 colum내에서 배치를 하기 위해서 고안된것이라는 한계가 있다.배치하고 싶은애들을 감싸고 `display: flex` 속성을 줘서 내부 아이템들을 flex items로 만들어 layout을 변경할 수 있다.

- Check these if you want to know more about flex system
  - [how to use it](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  - [how to use it(ko)](https://heropy.blog/2018/11/24/css-flexible-box/)

3. **Grid-based layout - How to use Grid**

> CSS grid was first proposed in 2011 (not too long after the flexbox proposal), but took a long time to gain widespread adoption with browsers. As of early 2018, CSS grid is supported by most modern browsers (a huge improvement over even a year or two ago). - from Modern CSS Explained for Dinosaurs

> Once you get used to the grid syntax, it clearly becomes the ideal way to express layout in CSS. The only real downside to a grid-based layout is browser support, which again has improved tremendously over the past year. It’s hard to overstate the importance of CSS grid as the first real tool in CSS that was actually designed for layout. - from Modern CSS Explained for Dinosaurs

- [how to use it](https://css-tricks.com/css-grid-one-layout-multiple-ways/)
- [how to use it(ko)](https://heropy.blog/2019/08/17/css-grid/)
  <!-- - [start branch](https://github.com/hayoung0Lee/gatsby-gomtang/tree/start) -->

flex도 정말 좋은데 이건 row나 column 중에 하나의 방향으로 배치를 할 수 있는데, grid는 정말로 layout을 위한 장치로 2 dimensional하게 layout을 할 수 있다. 가장 큰 장점은 flex와는 다르게 마크업에서 flex-item을 만들기 위해 추가했던 parent div가 필요없어졌다. flex랑 같이 사용하면 좋다. 그런데 아직 browser support가 완벽하진 않다고 하는데 찾아보장. [can I use grid](https://caniuse.com/?search=css%20grid)

- grid-template-rows vs grid-rows

# references

- [floats, flexbox, grid - the progression of CSS layouts](https://www.youtube.com/watch?v=R7gqJkdc5dM&ab_channel=KevinPowell)
- [Modern CSS Explained for Dinosaurs](https://medium.com/actualize-network/modern-css-explained-for-dinosaurs-5226febe3525)
- [Why CSS grid-area is the best property for laying out content](https://www.youtube.com/watch?v=duH4DLq5yoo&ab_channel=KevinPowell)

<!-- - 나쁜아이는 아니다. https://css-tricks.com/all-about-floats/
- [[CSS]float 이해하기 & clear하는 방법](https://ddorang-d.tistory.com/12) -->
