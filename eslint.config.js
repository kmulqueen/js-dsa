module.exports = [
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-unused-vars': 'warn',
    },
  },
];
