angular.module('components', []).controller('meuController', meuController);

meuController.$inject = ['$q', '$timeout'];

function meuController($q, $timeout) {
  const vm = this;
  vm.text = '';
  vm.myVar = 'Old';

  vm.print = (value) => {
    console.log('Valor: ' + value);
  }

  function myPromise() {
    var deferred = $q.defer();
    $timeout(function () {
      deferred.resolve()
    }, 2000);
    return deferred.promise;
  }

  myPromise().then(function () {
    vm.myVar = 'New';
  });

}
