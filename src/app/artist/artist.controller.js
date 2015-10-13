(function() {
  'use strict';

  angular
    .module('alvaTape')
    .controller('ArtistController', ArtistController);

  /** @ngInject */
  function ArtistController($state) {
    var vm = this;

    vm.selectedMode = 'md-fling';

    vm.albums = [
      { title: 'Creature Dreams - EP', cover: '../../assets/images/mz.jpg'},
      { title: 'Half Shadows', cover: '../../assets/images/tokimonsta_halfshadows.jpg'},
      { title: 'Cosmic Intoxication', cover: '../../assets/images/cosmic-intoxica.jpg'},
    ];

    vm.songs = [
      { title: 'Pinching', cover: '../../assets/images/Pinching.jpg' },
      { title: 'Rock The Float (Aaliyah flip)', cover: '../../assets/images/Rock The Float (Aaliyah flip).jpg' },
      { title: 'Once Was Love', cover: '../../assets/images/Once Was Love.jpg' },
      { title: 'Heartbreaker (io echo x TOKiMONSTA)', cover: '../../assets/images/Heartbreaker (io echo x TOKiMONSTA).jpg' },
    ];

    vm.albumPage = function(title){
      console.log(title);
      $state.go('nav.album',
        { albumTitle: 'test' }
      );
    }

  }
})();
