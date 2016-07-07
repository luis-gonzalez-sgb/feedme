(function() {
  'use strict';

  angular
    .module('feedme')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('people', {
        url: 'people/',
        templateUrl: 'app/people/people.html',
        controller: 'PeopleController',
        controllerAs: 'people'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
