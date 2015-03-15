var hanson = require('hanson');

module.exports = function(source) {
  this.cacheable && this.cacheable();
  var value = hanson.parse(source);
  this.value = [value];
  return 'module.exports = ' + hanson.stringify(value);
};
