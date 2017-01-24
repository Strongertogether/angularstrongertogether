(function() {
  'use strict';

  angular
    .module('app.specialists')
    .controller('SpecialistsController', MenusController);

  MenusController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function MenusController(logger) {
    var vm = this;
    vm.title = 'Specialists';
    vm.messageCount = 0;
    vm.menus = [];

    activate();

    function activate() {
      var promises = [getMenus()];
      return $q.all(promises).then(function() {
        logger.info('Activated Specialists View');
      });
    }

    function getMenus(){
      return dataservice.getMenus().then(function(data) {
        vm.menus = data;
        return vm.menus;
      });
    }
  }
})();
