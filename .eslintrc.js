module.exports = {
  env: { browser: true, es6: true, node: true },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'eslint-config-prettier',
    'plugin:import/recommended',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime', // If you are using the new JSX transform from React 17, you should enable this
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier/@typescript-eslint',
    'tsconfig.json',
  ],
  ignorePatterns: ['.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    babelOptions: { presets: ['@babel/preset-react'] },
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    project: 'tsconfig.json',
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: ['import', 'jest', 'jsx-a11y', 'prettier', 'react', 'react-hooks', '@typescript-eslint'],
  root: true,
  rules: {
    '@typescript-eslint/no-var-requires': 'error',
    'array-bracket-spacing': ['warn', 'never'],
    camelcase: ['error', { properties: 'never' }],
    'comma-dangle': 'off',
    'computed-property-spacing': ['error', 'never', { enforceForClassMembers: false }],
    'generator-star-spacing': 'off',
    'import/no-unresolved': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': [
      'warn',
      {
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
      },
    ], // (웹 접근성 문제로)상호작용하지 않는 태그(li, div 등)에 onClick 등과 같은 이벤트를 연결할 때 필요
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      'warn',
      {
        ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        li: ['button', 'menuitem', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell'],
      },
    ], // (웹 접근성 문제로)상호작용하지 않는 태그에 onClick 등과 같은 이벤트를 연결하고 해당 태그의 사용 목적을 role 속성으로 명시할 때 필요
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-duplicate-imports': 'error',
    'no-extra-semi': 'error',
    'no-inner-declarations': 'off',
    'no-new-object': 'error',
    'no-unused-vars': 'warn',
    'no-var': 'error',
    // 중괄호 안에 간격 삽입. objectsInObjects: false 옵션은 사용할 수 없음. prettier의 bracketSpacing에 의해 덮어쓰기 되기 때문.
    'object-curly-spacing': ['warn', 'always'],
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prettier/prettier': 'warn',
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    // 'react/jsx-curly-spacing': ['warn', { when: 'always', children: true, objectLiterals: 'never' }], // prettier와 충돌하여 사용할 수 없음
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    // 'react/react-in-jsx-scope': 'off', // If you are not using JSX, or if you are setting React as a global variable
    'react/self-closing-comp': ['warn', { component: true, html: false }],
    'react/prop-types': [
      'warn',
      {
        // ignore: [], // optional array of props name to ignore during validation
        // customValidators: [], // optional array of validators used for propTypes validation
        skipUndeclared: true, // optional boolean to only error on components that have a propTypes block declared
      },
    ],
    'space-before-function-paren': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
    react: {
      version: 'detect', // eslint-plugin-react가 자동 리액트버전탐지
    },
  },
}
