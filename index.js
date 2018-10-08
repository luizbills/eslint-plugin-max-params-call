module.exports = {
  rules: {
    'max-params-call': require('./rules/max-params-call')
  },
  ruleConfig: {
    'max-params-call': ['error', 1]
  }
}
