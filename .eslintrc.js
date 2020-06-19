module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'func-names': 0,
    'no-return-assign': 0,
    'consistent-return': 0,
    'import/no-extraneous-dependencies': 0,
    camelcase: 0,
    'vue/no-use-v-if-with-v-for': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
