(function() {
  'use strict';

  angular
    .module('app.users')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$q', '$scope', 'dataservice', 'logger', '$state'];
  /* @ngInject */
  function LoginController($q, $scope, dataservice, logger, $state) {
    var vm = this;
    vm.inputEmail = "";
    vm.inputPass = "";
    vm.submitSignUp = submitSignUp;
    vm.submitLogin = submitLogin;

    vm.messageCount = 0;
    vm.people = [];
    vm.title = 'login';

    ///signup local
  function submitSignUp(){
    var data = {
      "email": vm.inputEmail,
      "pass": vm.inputPass,
          };

    dataservice.signUp(data).then(function (response) {
      console.log(response.data);
      if (response.data===true) {
          logger.success('Usuario registrado con exito.');
          $scope.closeModal();
          $state.go('main');
        }else if(response.data=="signuperror"){
          logger.error('El Usuario introducido ya existe.');
        }else{
          logger.error('Ups, ha habido un error en el server.');
        }
    });
  }

  ///login local
function submitLogin(){
  var data = {
    "email": vm.inputEmail,
    "pass": vm.inputPass,
        };

        dataservice.login(data).then(function (response) {
          console.log(response.data);
            if (response.data.email === vm.inputEmail) {
                logger.success('Usuario autentificado con exito, Bienvenido de nuevo a Strongertogether');
                $state.go('main');
                $scope.closeModal();
            } else if (response.data === 'loginerror') {
                    logger.error('Ha habido un error en la autentificación, el email o la contraseña introducidos no son correctos');
            } else {
                    logger.error('Ups, ha habido un error en el server.');
            }
        });
    }
  }
})();
