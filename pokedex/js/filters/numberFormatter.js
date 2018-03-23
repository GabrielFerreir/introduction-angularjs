angular.module('pokedexApp')
  .filter('NumberFormatter', function () {
    return function (input, quant) {
      var mask = '';
      for (var i = 0; i < quant; i++) {
        mask = mask + '0';
      }
      var output = (mask + parseInt(input)).slice(quant * -1);
      return output;
    }
  });
