(function() {
  'use strict';

  angular
    .module('app.users')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
        state: 'users',
        config: {
          url: '/login',
          templateUrl: 'app/users/login.view.html',
          controller: 'LoginController',
          controllerAs: 'vm',
          title: 'Login',
          /*settings: {
            nav: 5,
            content: '<i class="fa fa-dashboard" ></i> Login'
          }*/
        }
      },
      {
          state: 'facebook',
          config: {
            url: '/facebook',
            controller: 'socialController'
          }
      }

    ];
  }
})();
