---
slug: "/project/next/how-pages-work"
title: "Next.js 의 Page는 어떻게 동작하나 + 코드 진짜 까보기"
---

### Next.js 의 Page는 어떻게 동작하나

[Next.js Pages 문서](https://nextjs.org/docs/basic-features/pages)

여기를 읽어보면 `page는 React Component다. .js, .jsx, .ts, .tsx로 부터 export된`. 그리고 얘는 `pages directory`내에 있다. 만약 pages 내에 `about.js`가 있다면 이 곳에 `/about`으로 접근한다.

그리고 Dynamic route도 지원하는데, `pages/posts/[id].js` 이렇게 파일을 만들면 `posts/1` 이런식으로 접근이 된다.

### Pre-rendering

Next.js는 기본적으로 모든 페이지를 pre-rendering 한다.

[여기서 글을 읽었을때](https://developers.google.com/web/updates/2019/02/rendering-on-the-web) pre-rendering의 개념이 잘 와닿지 않아서 제대로 정리를 해보려고 한다.

> React users may be familiar with Gatsby, Next.js static export or Navi - all of these make it convenient to author using components. However, it’s important to understand the difference between static rendering and prerendering: static rendered pages are interactive without the need to execute much client-side JS, whereas prerendering improves the First Paint or First Contentful Paint of a Single Page Application that must be booted on the client in order for pages to be truly interactive.

> If you’re unsure whether a given solution is static rendering or prerendering, try this test: disable JavaScript and load the created web pages. For statically rendered pages, most of the functionality will still exist without JavaScript enabled. For prerendered pages, there may still be some basic functionality like links, but most of the page will be inert.

> Another useful test is to slow your network down using Chrome DevTools, and observe how much JavaScript has been downloaded before a page becomes interactive. Prerendering generally requires more JavaScript to get interactive, and that JavaScript tends to be more complex than the Progressive Enhancement approach used by static rendering.

솔직히 사람들이 용어 그냥 섞어 쓰는 것 같다. Pre-render가 static generation만을 의미하는게 아니다, 뭐 요정도 느낌 잡으면 되지 않을까 싶다.

- Next.js는 두가지 형태의 pre-render를 제공한다. `Static Generation` 과 `Server-side Rendering`

  - `Static Generation(Recommended)`: 빌드타임에 html이 만들어지고, 각 요청마다 재사용
  - `Server-side rendering`: 각 요청마다 html을 생성

- Next.js는 `Static Generation`를 `Server-side Rendering`보다 우선해서 쓰기를 원한다. Static하게 만들어진건 CDN에 올리기도 쉽기 때문이다. 그래도 경우에 따라 Server-side rendering이 유일한 방법일수 있다. 그리고 Client-side rendering도 앞의 두가지 방법과 섞어서 쓸수 있다.

### Static Generation(Recommended)

Page가 Static Geration 된단 말은 `next build`할때 만들어진단 소리다. 이때는 Data를 `포함 할 수도, 안할 수도 있다`.

- Data가 있는 경우
  - `content`데이터를 가져와야할 때: `getStaticProps`
  - `paths`가 외부에 의존하고 있을 때: `getStaticPaths`

#### getStaticProps를 사용해보자

```javascript
// Post를 Fetch 어디선가 해와야한다. pre-rendering하기 위해서
function Blog({ post }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}

export default Blog;
```

이걸 보자... Post를 어디선가 가지곤 와야 pre-rendering을 할 수 있을 것이다. 그래서 Next.js는 `export async function getStaticProps() {` 이렇게 지원하고 있다. 빌드타임에 얘를 불러서 page 컴포넌트에 props로 넘겨줄수 있도록 한다.

```javascript
// 실제 코드
export async function getStaticProps() {
  // 외부에 데이터를 요청한다.
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  // 이렇게 넘겨주면, posts를 props로 컴포넌트에 넘겨준다
  return {
    props: {
      posts,
    },
  };
}
```

이렇게 각 페이지에 데이터를 넘겨줄 수 있다!

#### getStaticPaths를 사용해보자

Next.js는 **dynamic routes** 를 기반으로 pages를 생성할 수 있다고 하는데 이말의 뜻은 `pages/posts/[id].js`라는 이름의 파일을 만들고 `posts/id` 이런 path로 page를 만들수있다는 것이다.
그런데 어떤 `id`를 사용하는지가 외부데이터에 의존하고 있을 수 있다.

예를들자면 db에 작성한 Post가 하나있는데, 얘만 가지고 빌드타임에 만들고 싶을 수 있다. 그리고 나중에 두번째 포스트가 추가되면 얘가지고도 빌드하고 싶고. 그래서 `path가 외부에 의존한다`는 말은 대략 외부에 어떤 포스트가 있는지에 따라서 path가 결정된다는 말이다.

```javascript
// 빌드타임에 얘를 불러서 post id를 가져와서 path를 생성한다.
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  // post의 id에 따른 path를 생성한다.
  const paths = posts.map((post) => `/posts/${post.id}`);

  // 요 path들만 가지고 빌드
  // { fallback: false } 다른건 다 404에러 띄우라는것
  return { paths, fallback: false };
}
```

이건 이렇게 써서 어떤 path를 빌드타임에 만들어야할지를 알려주는 용도이다.

이러고나서 `getStaticProps`에서 이 path를 `params`로 받는다

```javascript
// 다시한번, 얘는 빌드타임에 불린다.
export async function getStaticProps({ params }) {
  // params에 포스트의 id에 접근한다.
  const res = await fetch(`https://.../posts/${params.id}`);
  const post = await res.json();

  // 이전이랑 똑같이 Post데이터를 넘겨준다
  return { props: { post } };
}
```

이때 params.id로 path에 접근할 수 있는 이유는 file명이 `pages/posts/[id].js`이기 때문이다. `pages/posts/[postId]/[commentId]`이면 params.postId, params.commentId로 해당 parameter에 접근할 수 있따.

### Server-side Rendering

SSR을 하면 request마다 html이 생성된다. 만약에 이 페이지가 자주 업데이트되는 데이터가 필요하다면 `getServerSideProps`를 통해서 이를 해결한다.

```javascript
// request마다 호출된다
export async function getServerSideProps() {
  // 외부 api를 호출한다
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  // data를 props를 통해서 넘겨준다
  return { props: { data } };
}
```

사용버만 보면 `getStaticProps`랑 비슷한데, 가장 큰 차이점은 `getServerSideProps`는 매번 호출 된다는 것이다.

### Next가 내부에서 어떻게 동작하는지 궁금해서 까본다.

까볼때, 우선 prettier설정을 바꿔서([참고](https://github.com/prettier/prettier-vscode/issues/1081)) `npm run dev` 나 `npm run start`를 했을때의 동작을 본다.

1. 우선 npm run dev라고 입력하면 `package.json`에서 `next dev`가 실행된다. 이때 next는 path에 등록되있어서 바로 사용할 수 있다.
2. node_modules내의 next 폴더에 가면 아래의 내용이 있다.
   <img src="../memo-next/next_modules.png" alt="next module" onerror="this.src='https://raw.githubusercontent.com/hayoung0Lee/NextJs-DeepDive-Again/main/memo-next/next_modules.png';" />

여기 최상단에 있는 파일들은 열어보니까 dist에 있는걸 가져와서 exports하고있어서 dist 폴더 내부를 살펴보기로 했다(이렇게 큰 패키지는 어떻게 구성되는지 잘 모르기때문에 일단 느낌대로 따라가고 있다. )

3. 일단 젤처음에 시작되는 next executable이 어떻게 생겼는지를 살펴보려고 한다.
   <img src="../memo-next/next_executable.png" alt="next executable" onerror="this.src='https://raw.githubusercontent.com/hayoung0Lee/NextJs-DeepDive-Again/main/memo-next/next_executable.png';" />

- 얘는 commands를 실행하는 부분으로 구성되어있다.(default는 dev)
- commands가 있는 부분은 commands에 따라서 아래의 동작을 실행한다.

```javascript
const defaultCommand = "dev";
const commands = {
  build: async () =>
    await Promise.resolve()
      .then(() => _interopRequireWildcard(require("../cli/next-build")))
      .then((i) => i.nextBuild),
  start: async () =>
    await Promise.resolve()
      .then(() => _interopRequireWildcard(require("../cli/next-start")))
      .then((i) => i.nextStart),
  export: async () =>
    await Promise.resolve()
      .then(() => _interopRequireWildcard(require("../cli/next-export")))
      .then((i) => i.nextExport),
  dev: async () =>
    await Promise.resolve()
      .then(() => _interopRequireWildcard(require("../cli/next-dev")))
      .then((i) => i.nextDev),
  telemetry: async () =>
    await Promise.resolve()
      .then(() => _interopRequireWildcard(require("../cli/next-telemetry")))
      .then((i) => i.nextTelemetry),
};
```

각 동작을 저기 안에 두고 여기서 처리를 하는 식으로 구성되어있다. 그외의 부분들은 설정파일이 이상하거나 하는 부분을 처리하는 것 같다.

- `_interopRequireWildcard`에 어떤 obj가 넘어가는지 보려고 콘솔에 찍어봣다.

```javascript
function _interopRequireWildcard(obj) {
  console.log("next의 _interopRequireWildcard", obj);
  if (obj && obj.__esModule) {
    return obj;
  }
```

<img src="../memo-next/interop.png" alt="next executable" onerror="this.src='https://raw.githubusercontent.com/hayoung0Lee/NextJs-DeepDive-Again/main/memo-next/interop.png';" />

이렇게 두번나오는데 왜 두번인지는 잘 모르겠다!!! 형태가 다른데, 뭔가 처리할텐데 거기까진 파악이 어렵다.

1. next-dev안에 startServer
   이파일은 next dev 했을때 실행되는 부분으로 파악된다.

<img src="../memo-next/next-dev-code.png" alt="next-dev-code" onerror="this.src='https://raw.githubusercontent.com/hayoung0Lee/NextJs-DeepDive-Again/main/memo-next/next-dev-code.png';" />

코드에 저렇게 추가해서 진짜 여기까지 와서 실행하는지 한번 봤다.

<img src="../memo-next/next-dev-result.png" alt="next-dev-result" onerror="this.src='https://raw.githubusercontent.com/hayoung0Lee/NextJs-DeepDive-Again/main/memo-next/next-dev-result.png';" />

실제로 여기서 실행 중이었다.

startServer까지 이렇게 도달하는구나! Port가 사용중이다이런에러도 요쪽에서 처리중이었다.

- 아래는 start-server가 어떻게 생겼는지 본건데 여기서 createServer를 호출하고 있다.
  <img src="../memo-next/start-server.png" alt="start-server" onerror="this.src='https://raw.githubusercontent.com/hayoung0Lee/NextJs-DeepDive-Again/main/memo-next/start-server.png';" />

  이 이상은 더이상 파악이 조금 어려워서 createServer가 있는 부분을 찾아보았다.

1. CreateServer가 있는곳: `next/dist/server/next.js`
   여기서 CreateServer를 하고 있다.

```javascript
function createServer(options) {
  console.log("next create server", options);
  const standardEnv = ["production", "development", "test"];
  if (options == null) {
    throw new Error(
```

이렇게 찍어보면

<img src="../memo-next/createServer.png" alt="createServer" onerror="this.src='https://raw.githubusercontent.com/hayoung0Lee/NextJs-DeepDive-Again/main/memo-next/createServer.png';" />

6. 파악하고 싶은것 pages가 어떻게 대강 처리되는지 로직
   진행중...

### 후기

JavaScript로 이런 프레임워크를 만들어내는 사람들은 멋있다..
