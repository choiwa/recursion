// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var result = [];
  var checkClassName = function(ele) {
    if (ele.classList && ele.classList.contains(className)) {
      result.push(ele);
    }

    if (ele.childNodes) {
      ele.childNodes.forEach(function(item) {
        checkClassName(item);
      });
    }
  };

  checkClassName(document.body);
  return result;
};
