# React.js with TypeScript Starter

리액트 + 타입스크립트 프로젝트를 시작할 때 필요한 스타터예요.  
create react app으로 react.js 설치 후 react 프로젝트에 필요한 기본적인 패키지를 추가했어요.

개인 프로젝트용으로 만들었기 때문에 각 설정 파일은 개인 취향에 맞췄어요.  
저와 취향이 다른 사람에게는 맞지 않을 수도 있어요😇

패키지는 필요한 것만 골라서 설치하세요.

> 제가 설정이나 패키지를 다 알지 못해요🥺 불필요한 것이 섞였거나 더 좋은 것이 있을 수도 있어요.

> 저장소 업데이트가 오랫동안 되지 않았으면 여기 있는 대로 설정했을 때 문제가 발생할 수 있어요.  
> 물론 최근 업데이트 일자와 상관없이 문제가 발생할 수도 있어요🫠

<br>

## React.js 설치 👨🏻‍💻

```bash
## Create react app with typescript

$ yarn create react-app <my-app-name> --template typescript
```

이미 만든 폴더에 설치한다면 `yarn create react-app ./ --template typescript`를 입력하면 돼요.
초기 설정과 관련된 사항은 [Create React App 공식 문서](https://create-react-app.dev/docs/adding-typescript/#installation)를 참고하세요.

<br>

## Package.json 수정 ✏️

CRA로 리액트 설치 후 아래 설정을 삭제해주세요.
이 설정은 .eslintrc.js로 옮겨두었어요.

```json
{
  "eslintConfig": {
    "extends": ["react-app", "react-app/jest"]
  }
}
```

<br>

## 패키지 설치 📦

```bash
## Eslint & Prettier

$ yarn add -D eslint-config-prettier eslint-plugin-prettier prettier

## Jest

$ yarn add -D @types/jest eslint-plugin-jest ts-jest

## Lodash

$ yarn add lodash-es
$ yarn add -D @types/lodash-es

## React

$ yarn add react-router-dom
$ yarn add -D @types/react-test-renderer react-test-renderer

## Sass loader

$ yarn add -D sass sass-loader

## Stylelint

$ yarn add -D @stylelint/postcss-css-in-js postcss-syntax stylelint stylelint-config-prettier stylelint-config-standard stylelint-order stylelint-scss

## TypeScript

$ yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

```
💁🏻‍♀️ 아래 패키지는 CRA template typescript에 포함돼 있어서 별도로 설치하지 않아도 돼요.

- @babel/core
- @types/jest
- @types/node
- @types/react
- @types/react-dom
- css-loader
- css-minimizer-webpack-plugin
- dotenv
- dotenv-expand
- eslint
- eslint-plugin-import
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-jsx-a11y
- eslint-webpack-plugin
- file-loader
- jest
- jest-resolve
- jest-watch-typeahead
- mini-css-extract-plugin
- postcss
- postcss-flexbugs-fixes
- postcss-loader
- postcss-normalize
- postcss-preset-env
- sass-loader
- source-map-loader
- style-loader
- tailwindcss
- typescript
```

```
💁🏻 typescript를 사용한다면 아래 패키지는 필요하지 않아요.

- @babel/eslint-parser : babel-eslint
- @babel/preset-react : "This experimental syntax requires enabling one of the following parser plugin(s): 'jsx, flow, typescript'" 에러 해결을 위해 필요[관련 글](https://ffan0811.medium.com/error-debugging-this-experimental-syntax-requires-enabling-one-of-the-following-parser-plugin-s-22946599a0a4)
```

<br>

## 패키지 설명 📄

위에서 설치한 패키지가 무엇인지 알아보세요.

- [@stylelint/postcss-css-in-js](https://www.npmjs.com/package/@stylelint/postcss-css-in-js) : typescript 환경에서 stylelint를 사용할 때 발생하는 _CssSyntaxError_ 해결을 위해 필요
- [@types/jest](https://www.npmjs.com/package/@types/jest) : jest의 타입 정의와 hint 제공
- [@types/lodash-es](https://www.npmjs.com/package/@types/lodash-es) : lodash 타입 정의 제공
- [@types/react-test-renderer](https://www.npmjs.com/package/@types/react-test-renderer) : react-test-renderer 타입 정의 제공
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) : typescript 관련 린팅 규칙 제공
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) : typescript를 위한 eslint 파서ig-prettier` : prettier와 충돌을 일으키는 eslint 규칙 비활성화
- [eslint](https://www.npmjs.com/package/eslint) : 코드의 문법을 검사하는 린팅과 코드의 스타일을 잡아주는 포맷팅 기능
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) : prettier와 충돌이 발생하는 rule을 비활성화
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) : es2015+ import/export 구문 지원
- [eslint-plugin-jest](eslint-plugin-jest) : jest 관련 규칙 제공
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) : jsx 내에서 웹 접근성 규칙 관련 피드백 제공
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier) : prettier에서 인식하는 코드상의 포맷 오류를 eslint 오류로 출력
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) : react 규칙 관련 피드백 제공
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) : react hooks 규칙 관련 피드백 제공
- [eslint-webpack-plugin](https://www.npmjs.com/package/eslint-webpack-plugin)
- [lodash-es](https://www.npmjs.com/package/lodash-es) : 필요한 lodash 함수만 골라 사용하고, 사용하지 않은 함수는 tree shaking할 수 있는 lodash 패키지
- [postcss-syntax](https://www.npmjs.com/package/postcss-syntax) : typescript 환경에서 stylelint를 사용할 때 발생하는 _CssSyntaxError_ 해결을 위해 필요
- [prettier](https://www.npmjs.com/package/prettier) : 코드의 스타일을 잡아주는 포맷팅 기능
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) : 라우터 지원
- [react-test-renderer](https://www.npmjs.com/package/react-test-renderer) : 테스트 시 reactDOM의 스냅샷 생성
- [stylelint](https://www.npmjs.com/package/stylelint)
- [stylelint-config-prettier](https://www.npmjs.com/package/stylelint-config-prettier)
- [stylelint-config-standard](https://www.npmjs.com/package/stylelint-config-standard)
- [stylelint-order](https://www.npmjs.com/package/stylelint-order)
- [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)
- [ts-jest](https://www.npmjs.com/package/ts-jest) : typescript 환경에서 jest를 사용할 때 필요

```
❌ deprecate 되었어요.

- eslint-loader : eslint-webpack-plugin으로 대체
```

```
🙌 여기서는 사용하지 않지만, 유용한 패키지예요.

- @craco/craco : CRA로 리액트를 설치했을 때 webpack 설정 지원
- cra-bundle-analyzer : eject하지 않고 webpack-bundle-analyzer와 동일한 기능 사용 가능
- eslint-import-resolver-typescript : tsconfig에서 path alias 사용을 위해 필요. CRA로 리액트를 설치했다면 craco와 함께 사용할 것
```

<br>

## 설정 파일 💾

제 취향이 듬뿍 담긴 파일이니 각자 취향에 맞춰 수정 후 사용하세요.👻

### Eslint & Perttier

- `.eslintignore`
- `.eslintrc.js`
- `.prettierignore`
- `.prettierrc`

### Git & Github

- `.github`
- `.gitignore`

### Jest

- `jest.config.ts`

### Stylelint

- `.stylelintignore`
- `.stylelintrc.js`

### Typescript

- `tsconfig.json`

<br>

## 필수 vs code 설정 🔧

settings에서 아래 설정을 변경해주세요.

- Editor: Default Formatter => `esbenp.prettier-vscode`
- Eslint > Format: Enable => `true`

<br>

## 필수 vs code 익스텐션 🧩

위 패키지를 제대로 사용하기 위해 꼭 필요한 익스텐션이에요.  
_괄호 안에 있는 익스텐션 ID로 검색하면 편리하게 찾을 수 있어요._

- `ESLint` (dbaeumer.vscode-eslint)
- `Prettier - Code formatter` (esbenp.prettier-vscode)
- `Stylelint` (stylelint.vscode-stylelint)

<br>

## 추천 vs code 익스텐션 🚀

필수는 아니지만, 편의성을 높여주는 익스텐션이에요.

- `JavaScript and TypeScript Nightly` (ms-vscode.vscode-typescript-next)
- `Jest` (Orta.vscode-jest)
- `Stylelint Disable Snippets` (hedinne.stylelint-disable-snippets)

<br>

## 더 많은 설정을 원한다면 ⭐️

이곳에서 더 많은 설정과 패키지를 찾아보세요.

[Starter Kit for Settings](https://github.com/biniruu/starter-kit-for-settings)
