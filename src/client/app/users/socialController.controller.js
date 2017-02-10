(function () {
    'use strict';

    angular
            .module('app.login')
            .controller('socialController', SignupController);

    SignupController.$inject = ['dataservice', '$state', '$timeout','logger'];

    function SignupController(dataservice, $state, $timeout,logger) {
        var vm = this;
        vm.title = 'Signup';
        vm.inputUser = '';
        vm.inputEmail = '';
        vm.inputPass = '';
        vm.inputPass2 = '';

social();

function social(){
    console.log('hola');
     dataservice.facebook().then(function (response) {
         console.log(response);
     });
}
    }
})();
