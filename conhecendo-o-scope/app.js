angular.module('meuApp', [])

.controller('meuController', meuController);

function meuController($scope) {
  const vm = this;
  console.log(this);
  vm.nome = "Gabriel Ferreira";
  vm.numero = 0;

  setInterval(() => {
    $scope.$apply(() => {
      vm.numero++;
    });
  }, 1000)
}
