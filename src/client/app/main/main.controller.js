(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('MainController', MainController);

  MainController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function MainController($q, dataservice, logger) {
    var vm = this;
    vm.news = {
      title: 'main',
      description: 'Hot Towel Angular is a SPA template for Angular developers.'
    };
    vm.messageCount = 0;
    vm.people = [];
    vm.title = 'main';
    
  }
})();
