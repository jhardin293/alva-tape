(function() {
  'use strict';

  angular
    .module('alvaTape')
    .controller('AlbumController', AlbumController);

  /** @ngInject */
  function AlbumController($state) {
    console.log($state);
    var vm = this;

    vm.selectedMode = 'md-fling';

    vm.streamingServices = [
      {name: 'Apple Music', logo: '../../assets/images/apple.svg', link:'' },
      {name: 'Spotify', logo: '../../assets/images/spotify.svg', link:'' },
      {name: 'Google Play Music', logo: '../../assets/images/google.svg', link:'' },
      {name: 'BandCamp', logo: '../../assets/images/bandcamp.svg', link:'' },
      {name: 'Soundcloud', logo: '../../assets/images/soundcloud.svg', link:'' }
    ];
  }
})();
