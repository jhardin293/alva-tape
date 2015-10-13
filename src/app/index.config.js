(function() {
  'use strict';

  angular
    .module('alvaTape')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
