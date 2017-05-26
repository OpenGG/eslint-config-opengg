# eslint-config-opengg
[![Build Status](https://travis-ci.org/OpenGG/eslint-config-opengg.svg?branch=master)](https://travis-ci.org/OpenGG/eslint-config-opengg)

Style guide based on `eslint-config-airbnb-config`.

Almost the same, but not quite.

# Differences

0. Add `extras/no-async-without-await/no-async-without-await` rule
0. Set `errors/comma-dangle.functions` to `'never'`
0. Set `style/func-names` to `['error', 'as-needed']`
0. Set `style/func-style` to `['error', 'expression', { allowArrowFunctions: true }]`
0. Set `style/no-plusplus` to `['error', { allowForLoopAfterthoughts: true }]`
0. Remove `ForOfStatement` in `style/no-restricted-syntax`
