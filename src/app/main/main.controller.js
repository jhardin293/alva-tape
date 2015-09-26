(function() {
  'use strict';

  angular
    .module('alvaTape')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.selectedMode = 'md-fling';

    vm.streamingServices = [
      {name: 'Apple Music', logo: '../../assets/icons/apple.svg', link:'' },
      {name: 'Spotify', logo: '../../assets/icons/spotify.svg', link:'' },
      {name: 'Google Play Music', logo: '../../assets/icons/google.svg', link:'' },
      {name: 'BandCamp', logo: '../../assets/icons/bandcamp.svg', link:'' },
      {name: 'Soundcloud', logo: '../../assets/icons/soundcloud.svg', link:'' }
    ];
  }
})();
