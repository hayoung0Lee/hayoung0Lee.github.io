---
slug: "/project/next/npm-scripts"
title: "package.json의 scripts 부분 원리"
---

### How does Scripts Part find executable

[link](https://docs.npmjs.com/cli/v6/using-npm/scripts#path)

```
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
},
```

next 처럼 executable scripts를 가지고 있는 모듈을 사용하면 이 executable이 scripts를 실행하는 용도의 `PATH`에 포함된다고 한다. 그래서 위처럼 `npm run dev` 하면 알아서 `node_modules/.bin` 안에 있는 executable을 찾아서 실행한다.
