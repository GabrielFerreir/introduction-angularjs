angular.module('myApp', []).controller('meuController', meuController);

function meuController() {
  const vm = this;
  vm.text = 'Gabriel';

  vm.print = (value) => {
    console.log('Valor: ' + value);
  }
}
