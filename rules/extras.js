module.exports = {
  plugins: [
    'no-async-without-await',
  ],
  rules: {
    'no-async-without-await/no-async-without-await': 'error',
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'func-names': ['error', 'as-needed'],
    'func-style': ['error', 'expression', {
      allowArrowFunctions: true,
    }],
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true,
    }],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'brace-style': ['error', '1tbs', {
      allowSingleLine: false,
    }],
    curly: ['error', 'all'],
  },
};
