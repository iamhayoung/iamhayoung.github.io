# [iamhayoung.dev](https://iamhayoung.dev)

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fiamhayoung%2Fiamhayoung.github.io&count_bg=%23BB7E8C&title_bg=%23434343&icon=github.svg&icon_color=%23FFFFFF&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

## Welcome to [iamhayoung.dev](https://iamhayoung.dev) 👋

프론트엔드 개발자인 저만의 삶을 담아 나갈 기술 블로그입니다.
Gatsby.js를 기반으로 개발되었습니다.

🛠 2021.10 현재 개발 진행중...

## Wiki

기술 블로그 개발에 관한 생각, 메모들을 Wiki에 남기고 있습니다 👉 [Wiki](https://github.com/iamhayoung/iamhayoung.github.io/wiki)

## Branches

```
main           // Github Pages에 반영되는 static files
source         // Default branch. Blog source code
    └── docs   // History of README.md
```

## Run

```shell
gatsby develop
```

## Deploy

### 1. GitHub Actions

`source` 브랜치로 push 시, deploy jobs가 실행되어 `main` 브랜치로 빌드됨

### 2. Scripts

```shell
npm run deploy
```

```json
"scripts": {
    "deploy": "gatsby build && npm run copy && gh-pages -d public -b main"
}
```

1. 정적 파일 생성
2. 도메인 정보를 담은 `CNAME` 파일 복사
3. `/public` 디렉토리 내부에 생성된 정적 파일들을 `main` 브랜치에 배포

---

© 2022 iamhayoung, Built with [Gatsby.js](https://www.gatsbyjs.com/)
