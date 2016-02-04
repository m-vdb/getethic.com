var config = require('config');

module.exports.static = {name: 'static'};
module.exports.static.parse = function (str, line, parser, types, options) {
  var matched;  // only one token
  parser.on("*", function (token) {
    if (!matched &&
        (token.type === types.STRING)
      ) {
      this.out.push(token.match.substring(1, token.length - 1));  // remove the ""
      this.out.push('?v=' + config.get('cache_version'));
      matched = true;
      return;
    }
    throw new Error('Unexpected token "' + token.match + '" in static tag');
  });
  return true;
};

module.exports.static.compile = function (compiler, args, content, parents, options, blockName) {
  return '_output += "'+ args.join('') + '";';
};
