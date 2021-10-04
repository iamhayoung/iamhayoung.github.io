# [hayoung_log](https://iamhayoung.github.io/)

<a href="https://hits.seeyoufarm.com">
    <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fiamhayoung%2Fiamhayoung.github.io&count_bg=%23BB7E8C&title_bg=%23434343&icon=github.svg&icon_color=%23FFFFFF&title=hits&edge_flat=false"/>
</a>

<p>
Welcome to my devlog 👋 <br />
Gatsby.js를 기반으로 한 기술 블로그입니다.
</p>

(🛠 2021.10 현재 개발 진행중)

## Branches

```
└─── main               // Github pages에 필요한 static files
      └── source        // Default branch. Blog source code
    	     └── docs   // History of README.md
```

## Run

```shell
gatsby develop
```

## Deploy

정적 파일 생성 + public 디렉토리 내부에 생성된 정적 파일들을 main 브랜치에 배포

```json
"scripts": {
    "deploy": "gatsby build && gh-pages -d public -b main"
}
```

```shell
npm run deploy
```

---

© 2021 iamhayoung, Built with [Gatsby.js](https://www.gatsbyjs.com/)
