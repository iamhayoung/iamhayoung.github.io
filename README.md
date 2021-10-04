# [hayoung-log](https://https://iamhayoung.github.io/) <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fiamhayoung%2Fiamhayoung.github.io&count_bg=%23C6A0B5&title_bg=%23555555&icon=github.svg&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>

Welcome to my blog💖

## Branches

```bash
└─── main            // Github pages에 필요한 source files
			└── source     // Blog source code
    				└── docs // History of README.md
```

## Run

```bash
gatsby develop
```

## Deploy

```json
"scripts": {
  	 // 정적 파일 생성 && public 디렉토리 내부에 생성된 정적 파일들을 main 브랜치에 배포
    "deploy": "gatsby build && gh-pages -d public -b main"
}
```

```bash
npm run deploy
```

© 2021, Built with [Gatsby](https://www.gatsbyjs.com/)
