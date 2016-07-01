(function() {
  'use strict';

  angular
    .module('feedme')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
