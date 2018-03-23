angular.module('pokedexApp').controller('pokedexController', pokedexController);

pokedexController.$inject = ['pokeApiFactory'];

function pokedexController(pokeApiFactory) {
  const vm = this;
  vm.searchText = '';
  vm.pkList = [];
if(pokeApiFactory.pkmList.length) {
  vm.pkList = pokeApiFactory.pkmList;
} else {
  pokeApiFactory.listAll()
    .then(pkmList => {
      vm.pkList = pkmList;
    })
}


}
