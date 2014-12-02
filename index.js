var getImports = require('get-imports');
var isUrl = require('is-url');

module.exports = function(url) {
  if(typeof url != 'string' || !isUrl(url)) {
    console.log(url);
    throw new TypeError('resolve-css-imports expected a url as a string');
  }
}
