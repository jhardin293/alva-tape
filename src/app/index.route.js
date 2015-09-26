(function() {
  'use strict';

  angular
    .module('alvaTape')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/album/album.html',
        controller: 'AlbumController',
        controllerAs: 'album'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
