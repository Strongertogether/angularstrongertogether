(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('SidebarController', SidebarController);

  SidebarController.$inject = ['$state', 'routerHelper', '$uibModal', 'dataservice', '$rootScope', '$q', 'logger'];
  /* @ngInject */
  function SidebarController($state, routerHelper, $uibModal, dataservice, $rootScope, $q, logger) {
    var vm = this;
    var states = routerHelper.getStates();
    vm.isCurrent = isCurrent;
    vm.openModal = openModal;
    vm.openSignUp = openSignUp;

    activate();

  //  function activate() { getNavRoutes(); }


        function activate() {
          getNavRoutes();

          var promises = [getAuthUser()];
          return $q.all(promises).then(function() {
            logger.info('Activated layout View');
          });

        }

    function getNavRoutes() {
      vm.navRoutes = states.filter(function(r) {
        return r.settings && r.settings.nav;
      }).sort(function(r1, r2) {
        return r1.settings.nav - r2.settings.nav;
      });
    }

    function getAuthUser(){
    return dataservice.isLoggedin().then(function(data) {
      $rootScope.authUser = data;
      return $rootScope.authUser;
    });
  }

    function isCurrent(route) {
      if (!route.title || !$state.current || !$state.current.title) {
        return '';
      }
      var menuName = route.title;
      return $state.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
    }

    //funcion para abrir el modal signin
    function openModal(){
      var modalInstance = $uibModal.open({
      animation: 'true',
      templateUrl: 'app/users/login.view.html',
      controller: 'modalController',
      size: ""
      });
    }

    //funcion para abrir el modal signup
    function openSignUp(){
      var modalInstance = $uibModal.open({
      animation: 'true',
      templateUrl: 'app/users/sign_up.view.html',
      controller: 'modalController',
      size: ""
      });
    }


  }
})();
