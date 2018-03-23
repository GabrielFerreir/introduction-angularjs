// angular.module('meuApp').directive('myDirective', function () {
//   return {
//     restrict: 'E',
//     templateUrl: 'myDirective.html',
//     scope: {
//       text: '=',
//       myFunc: '='
//     },
//     link: function (scope, elem, attrs) {
//       var vm = scope;
//       vm.onChange = function () {
//         console.log('Function from component', vm.text);
//         vm.myFunc(vm.text);
//       }
//     }
//   }
// });
angular.module('meuApp').directive('myDirective', function () {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      var vm = scope;
      elem[0].style.backgroundColor = 'red';
    }
  }
});
