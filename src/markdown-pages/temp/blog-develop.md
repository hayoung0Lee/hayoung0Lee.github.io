---
slug: "/blog/blog-develop-journal"
title: "Github blog 를 만들면서"
date: "2021-03-31"
---

### 개발 목표

나는 정리를 잘하는 사람이 아니라, 개발하다가 갑자기 또 블로그 쓰고 그런게 너무 불편하다. 그래서 이걸 해결하기 위해서 모든것을 깃헙으로 가져오려고 이 프로젝트를 시작했다. 이프로젝트는 `블로깅을 깃헙으로만, 내입맛에 맞게 하자!!` 프로젝트 이다.

- 구현할 것
  1. Gatsby로 블로그 뼈대 만들기: 얼추 완료
  2. develop브랜치에 커밋 생기면 알아서 빌드하고 마스터 브랜치에 배포하기
  3. 기술 공부용 리포에서 `memo`라는 폴더내에 마크다운으로 파일을 작성하면, 커밋을 남겼을때 알아서 `github blog repo`에 커밋 남기기: 이때 마크다운이 변경했을때만 작동하게 만들어야한다. 이때 branch이름은 프로젝트 명 같은걸로 지정할 수 있으면 좋겠다.
  4. 블로그 repo에서 이 커밋이 왔을때, 이상이 없으면 알아서 풀리퀘스트를 남기고, 머지를 하고 브랜치를 삭제하면 좋겠다.
  5. 이렇게 해서 기술별로 글들을 모아서 볼수 있게 했으면 좋겠다.
  6. 나중에는 태그 기능을 추가해서 태그별로 블로그에서 조회가 가능하면 좋겠다.

### 공부한것

- github action: 커밋같은거를 남겼을때 깃헙에서 잠깐 컴퓨터한대 빌려서 거기서 자동으로 처리할것들 로직을 작성하는 것이다.

```yml
name: Node.js CI

on:
  push:
    branches: [develop]
  pull_request:
    branches: [develop]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}

      - name: Build Project
        env:
          GITHUB_CONTEXT: ${{ toJson(github)}}
          GITHUB_ACTOR: ${{ github.actor}}
          GITHUB_EMAIL: ${{ github.event.commits[0].committer.email}} #FIXME
        run: |
          npm install
          npm run build

      - name: Deploy Project
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.BLOG  }}
          publish_dir: ./public
          publish_branch: master
```

이렇게 해서 gatsby를 deploy했다. 신기한 개념은 다른 사람들이 만들어놓은 action들도 쓸수 있다는 것이다. 그래서 나도 적당히 만들고 나면 action을 남길 수 있을 것 같다.

```yml
name: Push to Hayoung's Blog

# Controls when the action will run.
on:
  # Triggers the workflow on push or pull request events but only for the main branch
  push:
    branches: [main]
  pull_request:
    branches: [main]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2

      # Runs a single command using the runners shell
      - name: Run a one-line script
        run: echo Hello, world!

      # Runs a set of commands using the runners shell
      # FIXME: 파일이 변했을때만 동작하도록 하기, blog쪽에서 커밋오면 알아서 풀리퀘스트 하고 머지하도록 만들기
      - name: Run a multi-line script
        env:
          GITHUB_CONTEXT: ${{ toJson(github)}}
          GITHUB_NAME: ${{ github.actor }}
          GITHUB_EMAIL: ${{ github.event.commits[0].committer.email }}
        run: |
          echo Add other actions to build,
          echo test, and deploy your project.
          echo "GITHUB_CONTEXT => $GITHUB_CONTEXT"
          echo "GITHUB_EMAIL => $GITHUB_EMAIL"
          git config --global user.email "${GITHUB_EMAIL}"
          git config --global user.name "${GITHUB_NAME}"
          git config --global user.username "${GITHUB_NAME}"
          git clone https://hayoung0Lee:${{ secrets.NEXT_TOKEN }}@github.com/hayoung0Lee/hayoung0Lee.github.io.git
          git branch -a
          cd hayoung0Lee.github.io
          git checkout -b preview
          cp ../memo/* ./src/markdown-pages/project/
          git add .
          git commit -m "Update Next.js Post"
          git push origin preview --force
```

이건 아직 수정 중인데, 저런식으로 클론을 해서 하나하나 남기고있다. 아직 잘 동작하진 않는다. 잘되면 나도 얘를 action으로 만들어서 사용해보고 싶다!

### Coming soon...
