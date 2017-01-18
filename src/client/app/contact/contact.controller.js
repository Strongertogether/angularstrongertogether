(function() {
  'use strict';

  angular
    .module('app.contact')
    .controller('ContactController', ContactController);

    ContactController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function ContactController($q, dataservice, logger) {
    var vm = this;
    vm.news = {
      title: 'Contact module',
      description: 'Hot Towel Angular is a SPA template for Angular developers.'
    };
    vm.messageCount = 0;
    vm.people = [];
    vm.title = 'contact';

    activate();

    function activate() {
      var promises = [getMessageCount(), getPeople()];
      return $q.all(promises).then(function() {
        logger.info('Activated Contact View');
      });
    }

    function getMessageCount() {
      return dataservice.getMessageCount().then(function(data) {
        vm.messageCount = data;
        return vm.messageCount;
      });
    }

    function getPeople() {
      return dataservice.getPeople().then(function(data) {
        vm.people = data;
        return vm.people;
      });
    }
  }
})();

/*app.controller('contactCtrl', function ($scope, services) {
    $scope.contact = {
        inputName: "",
        inputEmail: "",
        inputSubject: "",
        inputMessage: ""
    };

    $scope.SubmitContact = function () {
        var data = {"inputName": $scope.contact.inputName, "inputEmail": $scope.contact.inputEmail, "inputSubject": $scope.contact.inputSubject, "inputMessage": $scope.contact.inputMessage,"token":'contact_form'};
        var contact_form = JSON.stringify(data);
        services.post('contact', 'process_contact', contact_form).then(function (response) {
            response = response.split("|");
            $scope.message = response[1];
            if (response[0].substring(1,5) == 'true') {
                $scope.class = 'alert alert-success';
            } else {
                $scope.class = 'alert alert-error';
            }
        });
    };
});*/
