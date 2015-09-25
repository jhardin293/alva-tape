(function() {
  'use strict';

  angular
    .module('alvaTape')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.topDirections = ['left', 'up'];
    vm.bottomDirections = ['down', 'right'];

    vm.isOpen = false;

    vm.availableModes = ['md-fling', 'md-scale'];
    vm.selectedMode = 'md-fling';

    vm.availableDirections = ['up', 'down', 'left', 'right'];
    vm.selectedDirection = 'up';
  }
})();
