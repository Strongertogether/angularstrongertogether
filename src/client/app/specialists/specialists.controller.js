(function() {
  'use strict';

  angular
    .module('app.specialists')
    .controller('SpecialistsController', SpecialistsController);

  SpecialistsController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function SpecialistsController($q, dataservice, logger) {

    var vm = this;
    vm.title = 'Specialists';
    vm.messageCount = 0;
    vm.specialists = [];

    activate();

    function activate() {
      var promises = [getSpecialists()];
      return $q.all(promises).then(function() {
        logger.info('Activated Specialists View');
      });
    }

    function getSpecialists(){
      return dataservice.getSpecialists().then(function(data) {
        console.log(data);
        vm.specialists = data;
        return vm.specialists;
      });
    }
  }
})();
