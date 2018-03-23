angular.module('myApp').component('myComponent', {
  templateUrl: 'my-component/my-component.html',
  controller: MyComponentController,
  bindings: {
    text: '<',
    myFunc: '&'
  },
  transclude: true
});

function MyComponentController() {
  const vm = this;
  vm.onChange = () => {
    console.log('Function from component', vm.text);
    vm.myFunc();
  }

  vm.$onInit = function () {
    console.log('Componente iniciado');
  }
}
