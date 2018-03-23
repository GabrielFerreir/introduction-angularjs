angular.module('myApp', ['component']).controller('meuController', meuController);

meuController.$inject = ['myFactory'];

function meuController(myFactory) {
  const vm = this;
  vm.text = '';

  console.log(myFactory);

  vm.print = (value) => {
    console.log('Valor: ' + value);
  }
}
