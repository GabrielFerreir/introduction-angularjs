angular.module('pokedexApp')
  .factory('pokeApiFactory', pokeApiFactory);

pokeApiFactory().$inject = ['$http'];

function pokeApiFactory($http) {
  return {
    get url() {
      return '//dev.treinaweb.com.br/pokeapi/'
    },
    pkmList: [],
    listAll: function () {
      return $http.get(`${this.url}pokedex/1`)
        .then(response => response.data.pokemon)
        .then(pkList => {
          return pkList.map(pokemon => {
            pokemon.number = this.getNumberFromURL(pokemon.resource_uri);
            return pokemon;
          })
            .filter(pokemon => pokemon.number < 1000)
            .sort((a, b) => (a.number > b.number ? 1 : -1))
        })
        .then(pkList => {
          this.pkmList = pkList;
          return pkList;
        })

    },
    getNumberFromURL: function (url) {
      return parseInt(url.replace(/.*\/(\d+)\/$/, '$1'));
    }
  }

}
