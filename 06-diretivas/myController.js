angular.module('meuApp').controller('meuController', meuController);

// myController.$inject = ['$scope'];

function meuController() {
  const vm = this;
  vm.text = '';

  vm.print = (value) => {
    console.log('Valor: ' + value);
  }
}
