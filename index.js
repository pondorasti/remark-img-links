const visit = require("unist-util-visit")

module.exports = function (options) {
  function visitor(node) {
    // Sanitize URL by removing leading `/`
    const relativeUrl = node.url.replace(/^\//, "")
    
    node.url = new URL(relativeUrl, options.absolutePath).href
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
