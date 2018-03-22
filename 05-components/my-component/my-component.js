angular.module('components').component('myComponent', {
  templateUrl: 'my-component/my-component.html',
  controller: MyComponentController,
  bindings: {
    text: '<',
    myFunc: '&'
  }
});

function MyComponentController() {
  const vm = this;
  vm.onChange = () => {
    console.log('Function from component', vm.text);
    vm.myFunc();
  }
}
