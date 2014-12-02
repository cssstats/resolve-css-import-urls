'use strict';

var getImports = require('get-imports');
var getCssUrls = require('get-css-urls');
var isUrl = require('is-url');

module.exports = function(url, css) {
  if(typeof url != 'string' || typeof css != 'string' || !isUrl(url)) {
    throw new TypeError('resolve-css-imports expected two string parameters (url, css)');
  }

  var cssUrls = getImports(css).map(function(importStatement) {
    return getCssUrls(importStatement)[0];
  });

  return cssUrls;
}
