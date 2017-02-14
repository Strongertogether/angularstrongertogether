(function() {
  'use strict';

  angular
    .module('app.users')
    .controller('modalController', modalController);

  modalController.$inject = ['$q', '$scope', 'dataservice', 'logger', '$uibModalInstance'];
  /* @ngInject */
  function modalController($q, $scope, dataservice, logger, $uibModalInstance) {
    var vm = this;

    vm.messageCount = 0;
    vm.people = [];
    vm.title = 'modal';

    $scope.closeModal = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }
})();
