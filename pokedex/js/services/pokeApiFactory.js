angular.module('pokedexApp')
  .factory('pokeApiFactory', pokeApiFactory);

function pokeApiFactory() {
  return {
    pkmList: [
      {name: 'bulbasaur', number: '001'},
      {name: 'pikachu', number: '025'},
      {name: 'mew', number: '151'},
      {name: 'chikorita', number: '152'},
      {name: 'celebi', number: '251'}
    ]
  }

}
