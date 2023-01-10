module.exports = {
  extends: ['ts-react-important-stuff', 'plugin:prettier/recommended'],
  parser: '@babel/eslint-parser',
  ignorePatterns: [
    'node_modules',
    'lib',
    'coverage',
    '/src/stories/**',
    '/src/assets/styles/_textStyles.tsx',
    '/docs/**',
  ],
};
