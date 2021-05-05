[![Build](https://github.com/Pondorasti/remark-img-links/workflows/main/badge.svg)](https://github.com/Pondorasti/remark-img-links/actions)
[![NPM](https://img.shields.io/npm/v/@pondorasti/remark-img-links.svg)](https://www.npmjs.com/package/@pondorasti/remark-img-links)
[![Size](https://img.shields.io/bundlephobia/minzip/@pondorasti/remark-img-links.svg)](https://bundlephobia.com/result?p=@pondorasti/remark-img-links)

# remark-img-lings

[**remark**](https://github.com/remarkjs/remark) plugin to prefix relative image paths with an absolute URL.

## Installation

```
npm install @pondorasti/remark-img-links
```

## Usage

### Source
```js
const html = require("remark-html")
const remark = require("remark")
const imgLinks = require("@pondorasti/remark-img-links")

remark()
  .use(imgLinks, { absolutePath: "https://cdn.domain.com/" })
  .use(html)
  .process("![Screenshot](images/screenshot.png)", (err, file) => {
    if (err) throw err
    console.log(String(file))
  })
```

### Yields
```html
<p><img src="https://cdn.domain.com/images/screenshot.png" alt="Screenshot"></p>
```

## API
### `remark.use(imgLinks[, options])`
* `options.absolutePath` (**required**) - the absolute path that will be prepended to the begging of image links.

## Contributions
If you are interested in contributing to this project, please open an issue with a description of what you would like to add.

## License
[MIT](LICENSE) © [Alexandru Turcanu](https://github.com/Pondorasti)
