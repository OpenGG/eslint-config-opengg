# eslint-config-opengg
[![Build Status](https://travis-ci.org/OpenGG/eslint-config-opengg.svg?branch=master)](https://travis-ci.org/OpenGG/eslint-config-opengg)

Style guide based on `eslint-config-airbnb-base`.

Almost the same, but not quite.

## Usage

```bash
npm install --save-dev \
  eslint-config-opengg \
  eslint-plugin-import \
  eslint-plugin-no-async-without-await
```

## Differences with `eslint-config-airbnb-base`

0. Add `extras/no-async-without-await/no-async-without-await` rule
0. Set `errors/comma-dangle.functions` to `'never'`
0. Set `style/func-names` to `['error', 'as-needed']`
0. Set `style/func-style` to `['error', 'expression', { allowArrowFunctions: true }]`
0. Set `style/no-plusplus` to `['error', { allowForLoopAfterthoughts: true }]`
0. Remove `ForOfStatement` in `style/no-restricted-syntax`
0. Set `brace-style` to `['error', '1tbs', { allowSingleLine: false, }]`
0. Set `curly` to `['error', 'all']`
