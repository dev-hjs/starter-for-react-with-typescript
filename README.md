# React.js and Typescript boilerplate

리액트 + 타입스크립트 프로젝트에서 사용할 수 있는 보일러플레이트예요.  
create react app으로 react.js 설정 후 react 프로젝트에 필요한 기본적인 패키지를 추가했어요.

개인 프로젝트용으로 만들었기 때문에 각 설정 파일은 개인 취향에 맞췄어요.  
저와 취향이 다른 사람에게는 맞지 않을 수도 있어요😇

패키지는 취향과 상관없이 꼭 필요한 것을 설치했기 때문에 여기 있는 대로 설치해도 괜찮아요.

> 제가 패키지를 다 알지 못해요🥺 불필요한 것이 섞였거나 더 좋은 패키지가 있을 수도 있어요.

> 오랫동안 업데이트가 되지 않았으면 여기 있는 대로 설정했을 때 문제가 발생할 수 있어요.  
> 물론 최근 업데이트 일자와 상관없이 문제가 발생할 수도 있어요🫠

## React.js 설치 👨🏻‍💻

```bash
## Create react app

$ yarn create react-app my-app --template typescript
```

## 패키지 설치 📦

```bash
## Eslint & Perttier

$ yarn add -D @babel/core @babel/eslint-parser @babel/preset-react eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-webpack-plugin prettier

## Jest

$ yarn add -D eslint-plugin-jest ts-jest

## Router

$ yarn add react-router-dom

## Sass loader

$ yarn add -D sass sass-loader

## Stylelint

$ yarn add -D @stylelint/postcss-css-in-js stylelint stylelint-config-prettier stylelint-config-standard stylelint-order stylelint-scss

## Typescript

$ yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

## 패키지 설명 📄

- `@babel/core` // @babel/eslint-parser 설치를 위해 필요
- `@babel/eslint-parser` // babel-eslint
- `@babel/preset-react` // "This experimental syntax requires enabling one of the following parser plugin(s): 'jsx, flow, typescript'" 에러 해결을 위해 필요 ([관련 글 보기](https://ffan081-medium.com/error-debugging-this-experimental-syntax-requires-enabling-one-of-the-following-parser-plugin-s-22946599a0a4))
- `@stylelint/postcss-css-in-js` // CssSyntaxError 에러 해결을 위해 필요. .stylelintrc 에서 override 방식으로 사용
- `@typescript-eslint/eslint-plugin` // Typescript 관련 린팅 규칙을 설정하는 플러그인
- `@typescript-eslint/parser` // Typescript 를 파싱하기 위해 사용
- `eslint-config-prettier` // prettier와 충돌을 일으키는 ESLint 규칙들을 비활성화 시키는 config
- `eslint-plugin-import` // ES2015+의 import/export 구문을 지원. Vue나 React 같은 프론트엔드 라이브러리를 사용할 때는 설치하지 않아도 괜찮음
- `eslint-plugin-jest`
- `eslint-plugin-prettier` // Prettier에서 인식하는 코드상의 포맷 오류를 ESLint 오류로 출력
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-jsx-a11y`
- `eslint-webpack-plugin`
- `prettier`
- `react-router-dom`
- `sass`
- `sass-loader`
- `stylelint`
- `stylelint-config-prettier`
- `stylelint-config-standard`
- `stylelint-order`
- `stylelint-scss`
- `ts-jest`

## 필수 vs code 익스텐션 🧩

위 패키지를 제대로 사용하기 위해 꼭 필요한 익스텐션이에요.  
_괄호 안에 있는 익스텐션 ID로 검색하면 편리하게 찾을 수 있어요._

- `ESLint` (dbaeumer.vscode-eslint)
- `Prettier - Code formatter` (esbenp.prettier-vscode)
- `Stylelint` (stylelint.vscode-stylelint)

## 같이 사용하면 좋은 vs code 익스텐션 🚀

필수는 아니지만, 위 패키지를 설치했을 때 편의성을 높여주는 익스텐션이에요.

- `JavaScript and TypeScript Nightly` (ms-vscode.vscode-typescript-next)
- `Jest` (Orta.vscode-jest)
- `Stylelint Disable Snippets` (hedinne.stylelint-disable-snippets)
