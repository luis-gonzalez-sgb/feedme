(function() {
  'use strict';

  angular
    .module('feedme')
    .controller('MainController', MainController);

  /** @ngInject */
  MainController.$inject= [
    "$timeout",
    "webDevTec",
    "toastr"
  ]

  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1467807332960;    

    function activate() {
      vm.getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    vm.showToastr = function() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    vm.getWebDevTec = function() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }

    activate();

  }

})();
