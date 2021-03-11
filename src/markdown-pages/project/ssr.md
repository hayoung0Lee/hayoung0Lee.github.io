---
slug: "/project/next/ssr"
title: "Next.js DeepDive"
---

### Next.js 왜 공부하는가?

React를 접하고 Create-react-app, Gatsby와 Next.js를 접해봤는데, 각각은 다 장점이 있는 것 같다.

- Create-react-app(CRA)은 확실히 대쉬보드같은거 간단하게, 만들면서 겁색같은 기능이 필요없고, head에 있는 메타 태그를 별로 건드릴게 없을때 사용할 것 같다.
- Gatsby는 확실히 Static Site Generator에 제일 집중하는 느낌이 큰데, 플러그인 지원도 정말 괜찮고 블로그같은거 만들기 좋은 것 같다. 다루는것도 편하다. 잘 몰라도 플러그인 시스템이 되게 잘되어있다(이것도 나중에 한번 자세히 살펴는 볼 생각).
- Next.js는 이 앞의 두개들과는 다르게 서버사이드 렌더링이 최강점이라고 하는데 이 친구를 좀 자세히 이해해보려고 한다.

### 우선 서버사이드 렌더링이란?

- 웹개발자의 가장 핵심적인 결정은 애플리케이션에서 로직과 렌더링을 구현해 내는 것이다. google developer 문서에는 `rehydration` 접근 방식을 통해 서버 렌더링이나 정적 렌더링을 고려하도록 권장한다.

- 렌더링 관련 용어

  - SSR(Server-Side rendering): 앱이 렌더링 되는 곳이 서버이다
  - CSR(Client-Side rendering): 브라우저에서 애플리케이션을 렌더링. DOM api를 사용
  - Rehydration: 서버에서 렌더링된 HTML의 DOM 트리를 재사용하기 위해 JavaScript 뷰를 boot up하는 것
  - Prerendering: 빌드타임에 클라이언트 측 애플리케이션을 실행해서 초기 상태를 정적 HTML로 만들어두는 것

- 성능 관련 용어:

  - TTFB(Time to First Byte): 클릭후 첫 비트가 들어오는때까지의 시간
  - FP(First paint): 픽셀이 처음으로 사용자에게 표시되는때
  - FCP(First Contentful Paint): 요청 콘텐츠(기사 본문 등)가 표시되는 시점
  - TTI(Time To Interactive): 페이지가 상호작용 가능하게 될때까지의 시간

- 서버에서 렌더링 하는 경우(SSR)?

  - FP, FCP, TTI는 줄어든다. 왜냐하면 서버에서 이미 렌더링을 했기 때문이다. 하지만 서버에서 렌더링하는 시간이 소요되기 때문에 TTFB가 길어진다.

- 정적 렌더링의 경우(Static rendering)?

  - FP, FCP, TTI도 빠른데, TTFB도짧다. 왜냐하면 이미 요청에 대해서 HTML파일을 생성해놨기 때문이다. 이렇게 하면 CDN에 배포해서 엣지 캐싱을 할수 있다.
  - Gatsby같은 도구.
  - 단점은 모든 URL에 대해서 개별 HTML을 생성해야하는데, 이게 예측이 어렵다면 만들기 어렵다.
  - JS 조금만 적용해도 클라이언트단에서 interactive 하다.
  - prerendering의 경우는 static rendering이랑은 다른 개념이라고 한다.

- 클라이언트 사이드 렌더링(CSR)?
  - 모든게 JS로 클라이언트에서 처리된다.
  - 앱이 커질수록 JavaScript량이 많아진다.
    > Experiences built with CSR that rely on large JavaScript bundles should consider aggressive code-splitting, and be sure to lazy-load JavaScript - "serve only what you need, when you need it". For experiences with little or no interactivity, server rendering can represent a more scalable solution to these issues.

### Combining server rendering and CSR via rehydration

- [너무 중요](https://developers.google.com/web/updates/2019/02/rendering-on-the-web#rehydration)

- 두가지를 적절히 섞는 방법
  - Full page 로드나 reload는 서버가 담당하고, `javascript와 렌더링에 필요한 data`가 embeded된다. 제대로 하면 server sider rendering 처럼 빠른 `First contentful paint`를 가질 수 있다.
  - 그런데 이러고나면 `rehydration`이라는 것을 한다.
    - SSR + rehydration의 단점은 TTI(Time to interactive)가 느려질 수 있다는 거다(First Paint는 빨라지지만). 이건 SSR의 페이지가 interactive 해지기 위해서는 client side js가 실행되어야하고 event handler가 attach되어야 하기 때문이다.

### How to decide redering method

![redering](https://developers.google.com/web/updates/images/2019/02/rendering-on-the-web/infographic.png)

### 참고한 자료

- **[web rendering](https://developers.google.com/web/updates/2019/02/rendering-on-the-web)**
- [Should you build a server-side rendered react application?](https://robertcooper.me/post/react-server-side-rendering)
- [client-side vs server-side vs pre-rendering for web apps](https://www.toptal.com/front-end/client-side-vs-server-side-pre-rendering#:~:text=What%20is%20client%2Dside%20rendering,dynamically%20directly%20in%20the%20browser.)
