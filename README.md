# eslint-config-opengg

Style guide almost same as eslint-config-airbnb-config.

Almost, but not quite.

# diffrences

0. Add `extras/no-async-without-await/no-async-without-await` rule
0. Set `errors/comma-dangle.functions` to `'never'`
0. Set `style/func-names` to `['error', 'as-needed']`
0. Set `style/func-style` to `['error', 'expression', { allowArrowFunctions: true }]`
0. Set `style/no-plus-plus` to `['error', { allowForLoopAfterthoughts: true }]`
0. Remove `ForOfStatement` in `style/no-restricted-syntax`
