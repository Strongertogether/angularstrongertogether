(function () {
    'use strict';

    angular
            .module('app.users')
            .controller('socialController', socialController);

    socialController.$inject = ['dataservice', '$state', '$timeout','logger'];

    function socialController(dataservice, $state, $timeout,logger) {
        var vm = this;
        vm.title = 'SocialController';
        vm.inputUser = '';
        vm.inputEmail = '';
        vm.inputPass = '';
        vm.inputPass2 = '';

social();

function social(){
    console.log('Entra en social Controller');
     dataservice.facebook().then(function (response) {
/*
          cookiesService.SetCredentials(response.data);
          headerService.login(); */
          $state.go('main');

         console.log(response);
         console.log("Email: " + response.data.email);
     });
}
    }
})();
