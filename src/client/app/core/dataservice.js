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
/*
    function sendemail(data){
        return $http.post('/api/sendemail',data)
          .then(success)
          .catch(fail);

        function success(response) {
          return response.data;
        }

        function fail(e) {
          return exception.catcher('XHR Failed for getPeople')(e);
        }
      }*/
  }
})();
