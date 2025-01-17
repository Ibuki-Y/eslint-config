const airbnbRulesVars = require('eslint-config-airbnb-base/rules/variables');

function noUnusedVars(rule) {
  const [error, options] = rule;
  return [
    error,
    {
      ...options,
      argsIgnorePattern: '^_+$',
    },
  ];
}

module.exports = {
  extends: ['airbnb-base', 'prettier'],
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'warn',
    // Allow following code
    // xs.forEach((x) => { x.a = 0 })
    'no-param-reassign': ['error', { props: false }],
    // Allow following code
    // (_, x) => x
    'no-unused-vars': noUnusedVars(airbnbRulesVars.rules['no-unused-vars']),
    /*
    Resolve these conflicted rules
      https://github.com/airbnb/javascript/blob/1eadb93e377da1e56c3f91f26610e5d0a00738a9/packages/eslint-config-airbnb-base/rules/best-practices.js#L26
      https://github.com/prettier/eslint-config-prettier#curly
    */
    curly: ['error', 'all'],
  },
};
