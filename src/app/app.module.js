(function() {
  'use strict';

  angular
    .module('feedme', [

		//Angular modules and extras

		'ngAnimate',
		'ngCookies',
		'ngTouch',
		'ngSanitize',
		'ngMessages',
		'ngAria',
		'ui.router',
		'ui.bootstrap',
		'toastr',

		//App modules

		'feedme.people'

    ]);

})();
