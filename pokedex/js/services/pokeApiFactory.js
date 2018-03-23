angular.module('pokedexApp')
  .factory('pokeApiFactory', pokeApiFactory);

function pokeApiFactory() {
  return {
    pkmList: [
      {name: 'bulbasaur', number: 1},
      {name: 'pikachu', number: 25},
      {name: 'mew', number: 151},
      {name: 'chikorita', number: 152},
      {name: 'celebi', number: 251}
    ]
  }

}
