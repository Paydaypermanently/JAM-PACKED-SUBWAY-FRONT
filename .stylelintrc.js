module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-styled-components'],
  processors: ['stylelint-processor-styled-components'],
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-no-unknown': null,
    'color-hex-case': 'lower',
    'declaration-block-semicolon-newline-after': null,
    'declaration-colon-newline-after': null,
    'no-descending-specificity': null,
    'no-empty-source': null,
    indentation: 2,
    'rule-empty-line-before': null,
    'selector-list-comma-newline-after': null,
    'order/properties-alphabetical-order': null,
    'selector-pseudo-class-no-unknown': null,
    'value-list-comma-newline-after': null,
    'selector-id-pattern': null,
    'alpha-value-notation': null,
    'color-function-notation': null,
    'declaration-empty-line-before': null
  }
}
