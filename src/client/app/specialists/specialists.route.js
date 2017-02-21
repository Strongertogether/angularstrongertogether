(function() {
  'use strict';

  angular
    .module('app.specialists')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'specialists',
        config: {
          url: '/specialists',
          templateUrl: 'app/specialists/specialists.view.html',
          controller: 'SpecialistsController',
          controllerAs: 'vm',
          title: 'Specialists',
          settings: {
            nav: 3,
            content: '<i class="fa fa-lock"></i> Specialists'
          }
        }
      }
    ];
  }
})();
