(function() {
    'use strict';

    angular
        .module('app.hospitals')
        .controller('hospitalsController', hospitalsController);

    hospitalsController.$inject = ['$q','dataservice','logger','$scope', '$uibModal'];

    /* @ngInject */
    function hospitalsController($q, dataservice, logger, $scope, $uibModal) {
        var vm = this;
        vm.title = 'Hospitals';
        vm.hospitals= [];
        vm.filteredHospitals = [];
        vm.numPerPage = 20;
        vm.maxSize = 5;
        vm.currentPage = 1;
        vm.markers = [];
        vm.infoMarker = infoMarker;

        $scope.$watch(update);
        // var watcher = vm.watch('./technicians.html');
        // watcher.on('change', update);

        vm.map = { center: { latitude: 39.1389498, longitude: -0.6615438 }, zoom: 9 };

        activate();

        function activate() {
          var promises = [getHospitals()];
          return $q.all(promises).then(function(){
            logger.info('Activated Hospitals View');
          });
        }

        function getHospitals(){
          return dataservice.getHospitals().then(function (data) {
            vm.hospitals = data;
            getMarkers(vm.hospitals);
            return vm.hospitals;
          });
        }

        function update(){
            var begin = ((vm.currentPage - 1) * vm.numPerPage), end = begin + vm.numPerPage;
            vm.filteredHospitals = vm.hospitals.slice(begin, end);
        }

       function getMarkers(hospitals) {

          for (var i = 0; i < hospitals.length; i++) {
            var latitude = hospitals[i].latitude;
            var longitude = hospitals[i].longitude;

            vm.Marker = { latitude:latitude, longitude:longitude, id:i }
            vm.markers.push(vm.Marker);

          }

        }
        $scope.testMarkers = vm.markers;

/*
 *  infoMarker
 */

          function infoMarker(index){
            //console.log(vm.hospitals[index]);
            $scope.selectedHospital = vm.hospitals[index];
            //var selectedHospital = vm.hospitals[index];
            //console.log($scope.selectedHospital);
            console.log(vm.selectedHospital);
            var modalInstance = $uibModal.open({
              animation: 'true',
              templateUrl: 'app/hospitals/infoHospitals.html',
              controller: 'hospitalsController',
              controllerAs: 'vm',
              scope: $scope,
              size: "lg"
            });

          };

    }
})();
