angular.module('pokedexApp')
.component('pokeListItemComponent', {
  templateUrl: './js/components/poke-list-item/pokeListItemComponent.html',
  controller: PokeListItemController,
  bindings: {
    item: '='
  }
});

function PokeListItemController() {

}
