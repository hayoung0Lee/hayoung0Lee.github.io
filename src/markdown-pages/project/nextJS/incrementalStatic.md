---
slug: "/blog/nextJS"
title: "NextJS Incremental Static Regeneration이란?"
---

- [공부한 내용](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration)

- [상철님 글](https://github.com/Road-of-CODEr/we-hate-js/blob/master/Front-End/Next.js/basicFeatures/dataFetching/getStaticProps.md)

- [stale while revalidate](https://web.dev/stale-while-revalidate/)

- [demo](https://reactions-demo.vercel.app/)

- [Cache Control Headers and Revalidation](https://traffic-control-cdn.readthedocs.io/en/latest/basics/cache_revalidation.html)

- [Incremental Static Regeneration with Next.js](https://blog.logrocket.com/incremental-static-regeneration-with-next-js/)

- [fallback이란](Incremental Static Regeneration with Next.js)

- [When is fallback: true useful?](https://nextjs.org/docs/basic-features/data-fetching#when-is-fallback-true-useful)

- [#9 Incremental Static Regeneration Nextjs | Nextjs revalidate | SSR in nextjs](https://www.youtube.com/watch?v=1AytR6POwUA&ab_channel=ImranSayed-CodeytekAcademy)
  With Incremental Static Regeneration, user request triggers regeneration of page, while the user gets the older version of the page. But the next user gets the newer version. And this user will trigger regnertaion of the newer version.

  - revailidate(timeout)
    But we don't want to regenerate page on every request. Regenerate new version of page in the background, ONLY on the first request during that interval. Timeout is calculated with reference to the time in seconds from previeous request.
