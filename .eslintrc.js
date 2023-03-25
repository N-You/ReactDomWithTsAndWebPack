module.exports = {
  parse:'@typescript-eslint/parse',
  extends:['airbnb-typescript','prettier'],
  plugins:['prettier','react','react-hooks','jsx-a11y','@typescript-eslint'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      webpack: {
        config: './config/webpack.base.js',
      },
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        directory: './tsconfig.json',
      },
    },
    'import/ignore': ['types'], // Weirdly eslint cannot resolve exports in types folder (try removing this later)
  }
}