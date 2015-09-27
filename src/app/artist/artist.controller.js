(function() {
  'use strict';

  angular
    .module('alvaTape')
    .controller('ArtistController', ArtistController);

  /** @ngInject */
  function ArtistController() {
    var vm = this;

    vm.selectedMode = 'md-fling';

    vm.albums = [
      { title: 'Creature Dreams - EP', cover: '../../assets/images/mz.jpg'},
      { title: 'Half Shadows', cover: '../../assets/images/tokimonsta_halfshadows.jpg'},
      { title: 'Cosmic Intoxication', cover: '../../assets/images/cosmic-intoxica.jpg'},
    ];

  }
})();
