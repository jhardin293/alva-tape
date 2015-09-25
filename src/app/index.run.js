(function() {
  'use strict';

  angular
    .module('alvaTape')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
