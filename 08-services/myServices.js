// SERVICE
angular.module('myApp').service('myService', function () {
  this.nome = 'TreinaWeb';
});

// FACTORY
angular.module('myApp').factory('myFactory', function () {
  return {
    name: 'TreinaWeb'
  }
});

angular.module('myApp').provider('myProvider', function () {
  this.$get = function (nome) {
    this.name = nome;
    return this;
  }
});


