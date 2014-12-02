var assert = require('assert');
var resolveCssImports = require('..');

describe('require-css-imports', function() {

  it('should handle a standard import statement', function() {
    assert.equal(
      resolveCssImports('http://foo.com/my-css.css', '@import url("bar.css"); @import url("css/baz.css");'),
      ['http://foo.com/bar.css', 'http://foo.com/baz.css']);
  });

  it('should throw a type error if a string is not provided', function() {
    assert.throws(resolveCssImports);
  });

  it('should throw a type error if an invalid url is provided', function() {
    assert.throws(function() {
      resolveCSSImports('invalid-url');
    });
  });
});
