(function() {
  'use strict';

  angular
    .module('feedme.people')
    .controller('PeopleController', PeopleController);

    function PeopleController($log){
		
      $log.debug("PeopleController");

    }

	PeopleController.$inject = [
		'$log'
    ];

})();