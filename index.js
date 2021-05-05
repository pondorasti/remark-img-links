const visit = require("unist-util-visit")

module.exports = function (options) {
  if (!options || !options.absolutePath) {
    throw Error("Missing required `absolutePath` option.")
  }

  function visitor(node) {
    node.url = new URL(node.url, options.absolutePath).href
  }

  function transform(tree) {
    visit(tree, "image", visitor)
  }

  return transform
}
