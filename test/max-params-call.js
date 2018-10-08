const rule = require('../rules/max-params-call')
const RuleTester = require('eslint').RuleTester

var ruleTester = new RuleTester({
  //parserOptions: { ecmaVersion: 2018 }
});

ruleTester.run('max-params-call', rule, {

  valid: [
    {
      code: 'fn (1)',
      options: [1]
    },
    {
      code: 'fn (2, 1)',
      options: [2]
    }
  ],

  invalid: [
    {
      code: 'fn (1, 2)',
      errors: [{
          message: 'invalid call expression',
          type: 'CallExpression'
      }],
      options: [1]
    },
    {
      code: 'fn (1)',
      errors: [{
          message: 'invalid call expression',
          type: 'CallExpression'
      }],
      options: [0]
    }
  ]

});