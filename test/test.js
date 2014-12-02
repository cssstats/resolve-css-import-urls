var assert = require('assert');
var resolveCssImports = require('..');

describe('require-css-imports', function() {

  it('should throw a type error if a string is not provided', function() {
    assert.throws(resolveCssImports);
  });

  it('should throw a type error if an invalid url is provided', function() {
    assert.throws(function() {
      resolveCSSImports('invalid-url');
    });
  });
});
