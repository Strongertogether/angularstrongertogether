(function() {
  'use strict';

  angular
    .module('app.contact')
    .controller('ContactController', ContactController);

    ContactController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function ContactController($q, dataservice, logger) {
    var vm = this;

    vm.title = 'Contact';
    vm.inputName = '';
    vm.inputEmail = '';
    vm.inputSubject = '';
    vm.inputMessage = '';
    vm.sendContact = sendContact;


    function sendContact() {
      console.log("sendContact");
      var data = {
        name: vm.inputName,
        from: vm.inputEmail,
        to: 'strongertogetherdaw@gmail.com',
        subject: vm.inputSubject,
        text: vm.inputMessage,
      };

      dataservice.sendemail(data).then(function(response) {
        console.log("sendemail");
        if (response) {
          vm.resultMessage = 'Su email ha sido enviado correctamente';
          vm.inputName = '';
          vm.inputEmail = '';
          vm.inputSubject = '';
          vm.inputMessage = '';
        } else {
          vm.resultMessage =
            'Ha habido un error al enviar el email, intentelo mas tarde';
        }
      });

    }

  }

})();