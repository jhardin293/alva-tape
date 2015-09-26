(function() {
  'use strict';

  angular
    .module('alvaTape')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/album');

    $stateProvider
      .state('nav', {
        abstract: true,
        url: '/',
        templateUrl: 'app/nav/nav.html',
        controller: 'NavController',
        controllerAs: 'nav'
      })
      .state('nav.album', {
        url: 'album',
        templateUrl: 'app/album/album.html',
        controller: 'AlbumController',
        controllerAs: 'album'
      })
      .state('nav.artist', {
        url: 'artist',
        templateUrl: 'app/artist/artist.html',
        controller: 'ArtistController',
        controllerAs: 'artist'
      });

  }

})();
