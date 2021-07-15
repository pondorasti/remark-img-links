const visit = require("unist-util-visit")

module.exports = function (options) {
  function visitor(node) {
    node.url = new URL(node.url.replace(/^\//, ""), options.absolutePath).href
  }

  function transform(tree) {
    if (options && options.absolutePath) {
      visit(tree, "image", visitor)
    } else {
      throw Error("Missing required `absolutePath` option.")
    }
  }

  return transform
}
