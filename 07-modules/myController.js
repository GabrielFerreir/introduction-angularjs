angular.module('myApp', ['component']).controller('meuController', meuController);

function meuController() {
  const vm = this;
  vm.text = '';

  vm.print = (value) => {
    console.log('Valor: ' + value);
  }
}
