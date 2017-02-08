(function() {
  'use strict';

  angular
    .module('app.users')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$q', '$scope', 'dataservice', 'logger'];
  /* @ngInject */
  function LoginController($q, $scope, dataservice, logger) {
    var vm = this;
    vm.inputEmail = "";
    vm.inputPass = "";
    vm.submitSignUp = submitSignUp;

    vm.messageCount = 0;
    vm.people = [];
    vm.title = 'login';


  function submitSignUp(){
    var data = {
      "email": vm.inputEmail,
      "pass": vm.inputPass,
          };

    dataservice.signUp(data).then(function (response) {
      console.log(response.data);
      if (response.data) {

          }else {

          }
    });
  }
  }
})();
