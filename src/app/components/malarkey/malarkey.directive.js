(function() {
  'use strict';

  angular
    .module('alvaTape')
    .directive('acmeMalarkey', acmeMalarkey);

  /** @ngInject */
  function acmeMalarkey() {
    var directive = {
      restrict: 'E',
      scope: {
        extraValues: '=',
      },
      template: '&nbsp;',
      link: linkFunc,
    };

    return directive;

    function linkFunc(scope, el, attr, vm) {
      console.log(el);
    }


  }

})();
