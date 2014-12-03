# Resolve CSS Import Urls

[![Build Status](https://travis-ci.org/johnotander/resolve-css-import-urls.svg?branch=master)](https://travis-ci.org/johnotander/resolve-css-import-urls)

Parse CSS import statements (`@import url(bar.css)`) in a string and return the full urls (`http://foo.com/bar.css`).

## Installation

```
npm i --save resolve-css-import-urls
```

## Usage

```javascript
var resolveCssImportUrls = require('resolve-css-import-urls');

resolveCssImportUrls("url(foo.css); lksjhlksjhdf url(bar.css);")
// => ["foo.css", "bar.css"]

resolveCssImportUrls("(foo.css); lksjhlksjhdf") // => []
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com).
