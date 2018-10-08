const create = function (context) {
  return {
    CallExpression (node) {
      const limit = context.options[0]
      if (limit >= 0 && node.arguments.length > limit) {
        context.report({
          node,
          message: 'error message here',
        })
      }
    }
  }
}

module.exports = {
  create
}
