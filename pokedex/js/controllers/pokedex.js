angular.module('pokedexApp').controller('pokedexController', pokedexController);

pokedexController.$inject = ['pokeApiFactory'];

function pokedexController(pokeApiFactory) {
  const vm = this;
  vm.searchText = '';
  vm.myTitle = 'TreinaWeb';
  vm.pkList = pokeApiFactory.pkmList;
}
