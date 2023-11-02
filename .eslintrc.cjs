module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'plugin:eslint-plugin-import/recommended',
    'plugin:react-hooks/recommended',
    'eslint-config-airbnb',
    'eslint-config-prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'array-callback-return': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'import/no-useless-path-segments': 'off',
    'consistent-return': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'arrow-body-style': 'off',
    'react-hooks/rules-of-hooks': 'off',

    //

    //
    'react/jsx-curly-brace-presence': 'off',
    'react/no-unescaped-entities': 0,
    'jsx-a11y/interactive-supports-focus': [
      0,
      {
        tabbable: ['button', 'link'],
      },
    ],
    'react/function-component-definition': [
      0,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-unneeded-ternary': 'off',
    'jsx-a11y/no-static-element-interactions': [
      'error',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
        allowExpressionValues: true,
      },
    ],

    'no-param-reassign': [2, { props: false }],
  },
  overrides: [
    // typescript
    {
      files: ['./src/**/*.ts', './src/**/*.tsx'],
      extends: [
        'plugin:eslint-plugin-import/typescript',
        'eslint-config-airbnb-typescript',
      ],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['tsconfig.json'],
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      rules: {
        '@typescript-eslint/indent': 'off',
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: [
              '**/msw/**',
              '**/react-query/utils.tsx',
              '**/react-router/utils.ts',
            ],
          },
        ],
        'no-use-before-define': 0,
        '@typescript-eslint/no-use-before-define': 'off',
        'no-unused-expressions': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        'no-shadow': 0,
        '@typescript-eslint/no-shadow': 'off',
      },
    },
    // tests
    {
      files: ['./src/**/*.test.ts', './src/**/*.test.tsx'],
      extends: ['plugin:testing-library/react', 'plugin:jest-dom/recommended'],
      rules: {
        'testing-library/no-debugging-utils': 'warn',
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
