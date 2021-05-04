const visit = require("unist-util-visit")

module.exports = function (options) {
  if (!options || !options.absolutePath) {
    throw Error("Missing required `absolutePath` option.")
  }

  function visitor(node) {
    node.url = options.absolutePath + node.url
  }

  function transform(tree) {
    visit(tree, "image", visitor)
  }

  return transform
}
