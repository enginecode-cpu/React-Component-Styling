## 리액트 컴포넌트 스타일링을 실습한 저장소

### 실습을 위해 사용한 명령어 및 패키지

<br>

#### sass-loader 설정 커스터마이징 하기
```
yarn eject
```

<br>

`config/webpack.config.js`파일을 아래와 같이 수정한다. 아래는 `styles` 폴더에서 스타일링 작업을 할 때 컴포넌트가 깊어지는 경우를 대비해서 작업하는 것이다.(ex: `@import ../../../styles/utils`)

```js
{
  test: sassRegex,
  exclude: sassModuleRegex,
  use: getStyleLoaders({
    importLoaders: 3,
    sourceMap: isEnvProduction
      ? shouldUseSourceMap
      : isEnvDevelopment,
  }).concat({
    loader: require.resolve("sass-loader"),
    options: {
      sassOptions: {
        includePaths: [paths.appSrc + "/styles"],
      },
      sourceMap: isEnvProduction && shouldUseSourceMap,
      prependData: `@import 'utils';`,
    },
  }),
  // Don't consider CSS imports dead code even if the
  // containing package claims to have no side effects.
  // Remove this when webpack adds a warning or an error for this.
  // See https://github.com/webpack/webpack/issues/6571
  sideEffects: true,
}
```

<br>

#### `classnames` 패키지 설치
```
yarn add classnames
```

CSS 클래스를 조건부로 설정할 때 매우 유용한 라이브러리이다. CSS Module을 사용할 때 이 라이브러리를 사용하면 여러 클래스를 적용할 때 매우 편리하다.


<br>

#### `styled-components` 패키지 설치
```
yarn add styled-components
```
자바스크립트 파일 안에 스타일을 선언하는 방식이다.(CSS-in-JS)
