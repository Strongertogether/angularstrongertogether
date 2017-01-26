(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function dataservice($http, $q, exception, logger) {
    var service = {
      sendemail: sendemail
      //getSpecialists: getSpecialists
    };

    return service;

    function getMessageCount() { return $q.when(72); }

    function sendemail(data){
      console.log(data);
      return $http.post('/api/sendmail', data)
           .then(success)
           .catch(fail);

      function success() {
        return true;
      }

      function fail() {
        return false;
      }
    }

    /*function getSpecialists() {
      return $http.post('/api/specialists')
        .then(success)
        .catch(fail);

      function success() {
        eturn true;
      }

      function fail() {
        return false;
      }
    }*/
  }
})();
