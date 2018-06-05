// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // if obj is array
  if (Array.isArray(obj)) {
    var primitives = [];

    for (var i = 0; i < obj.length; i++) {
      var currentEle = obj[i];

      primitives.push(stringifyJSON(currentEle));
    }

    return '[' + primitives.join(',') + ']';
  }

  // if obj is object
  // '{"x":5,"y":6}'
  if (obj && typeof obj === 'object') {
    var primitives = [];

    for (var key in obj) {
      var value = obj[key];
      if (value === undefined || typeof value === 'function') {
        continue;
      }
      primitives.push(stringifyJSON(key) + ':' + stringifyJSON(value));
    }
    return '{' + primitives.join(',') + '}';
  }

  // if obj is string
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  // '' + function(){} === "function(){}"
  return '' + obj;
};
