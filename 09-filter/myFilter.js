angular.module('myApp')
  .filter('myFilter', function () {
    return function (input) {
      var output = input.replace(/[aeiou]/gi, '');
      return output;
    }
  });
