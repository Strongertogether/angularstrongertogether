(function() {
    'use strict';

    angular
        .module('app.hospitals')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'hospitals',
                config: {
                    url: '/hospitals',
                    templateUrl: 'app/hospitals/hospitals.html',
                    controller: 'hospitalsController',
                    controllerAs: 'vm',
                    title: 'Hospitals',
                    settings: {
                      nav: 4,
                      content: '<i class="fa fa-lock"></i> Hospitals'
                    }
                }
            }
        ];
    }
})();
