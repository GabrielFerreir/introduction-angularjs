angular.module('pokedexApp').controller('pokedexController', pokedexController);

// myController.$inject = ['$scope'];

function pokedexController() {
  const vm = this;
  vm.searchText = '';
  vm.myTitle = 'TreinaWeb';
  vm.pkList = [
    {name: 'bulbasaur', number: '001'},
    {name: 'pikachu', number: '025'},
    {name: 'mew', number: '151'},
    {name: 'chikorita', number: '152'},
    {name: 'celebi', number: '251'}
  ];
}
