angular.module('components', []).controller('meuController', meuController);

function meuController() {
  const vm = this;
  vm.text = '';

  vm.print = (value) => {
    console.log('Valor: ' + value);
  }
}
