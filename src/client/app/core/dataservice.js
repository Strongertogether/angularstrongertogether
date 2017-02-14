(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q', 'exception', 'logger', '$rootScope', '$state'];
  /* @ngInject */
  function dataservice($http, $q, exception, logger, $rootScope, $state) {
    var service = {
      sendemail: sendemail,
      getSpecialists: getSpecialists,
      getHospitals: getHospitals,
      signUp: signUp,
      facebook: facebook,
      login: login,
      checkLoggedin: checkLoggedin
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

    function signUp(data){
      console.log("dataservice: "+ data);
      console.log(data);
      return $http.post('/api/signup', data)
           .then(success)
           .catch(fail);

      function success(response) {
        return response;
      }

      function fail() {
        return false;
      }
    }

    function login(data){
      console.log("dataservice login: "+ data);
      console.log(data);
      return $http.post('/api/login', data)
           .then(success)
           .catch(fail);

      function success(response) {
        $rootScope.authUser = response.data;
        console.log(response);
        return response;
      }

      function fail() {
        $rootScope.authUser = false;
        return false;
      }
    }

    function getSpecialists() {
         return $http.get('/api/specialists')
           .then(success)
           .catch(fail);

         function success(response) {
           return response.data;
         }

         function fail(e) {
           return exception.catcher('XHR Failed for getSpecialists')(e);
         }
       }

       function getHospitals() {

         return $http.get('/api/hospitals').then(success).catch(fail);

         function success(response) {
             return response.data;
           }

           function fail(e) {
             return exception.catcher('XHR Failed for getHospitals')(e);
           }
       }

       function facebook() {
          return $http.get('/auth/success')
                  .then(success)
                  .catch(fail);

          function success(response) {
              console.log('entre a success ');
              $rootScope.authUser = response.data;
              return response;
          }

          function fail() {
              console.log('entre a fail');
              $rootScope.authUser = false;
              return false;
          }
      }


      function checkLoggedin() {

        return $http.get('/api/loggedin')
          .then(success)
          .catch(fail);

        function success(responseUser) {
          console.log("checkLoggedin1 " + responseUser.data )
          if (responseUser.data === '0') {
            $rootScope.authUser = false;
            $state.go('users');
          }else {
            $rootScope.authUser = responseUser.data;
          }
        }

        function fail(e) {
          return exception.catcher('XHR Failed for /api/loggedin')(e);
        }
      }

      function isLoggedin() {
        return $http.get('/api/loggedin')
          .then(success)
          .catch(fail);

        function success(responseUser) {
          if (responseUser.data === '0') {
            $rootScope.authUser = false;
            return false;
          }else {
            $rootScope.authUser = responseUser.data;
            return responseUser.data;
          }
        }

        function fail(e) {
          return exception.catcher('XHR Failed for /api/loggedin')(e);
        }
      }

  }
})();
