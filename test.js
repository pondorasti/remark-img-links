const test = require("tape")
const remark = require("remark")
const html = require("remark-html")
const imgLinks = require("./")

test("remark-img-links", function (t) {
  t.plan(1)

  remark()
    .use(imgLinks, { absolutePath: "https://cdn.domain.com/" })
    .use(html)
    .process("![Screenshot](images/screenshot.png)", (err, file) => {
      const expectedYield =
        '<p><img src="https://cdn.domain.com/images/screenshot.png" alt="Screenshot"></p>\n'
      t.equal(String(file), expectedYield)
    })

  t.end()
})
