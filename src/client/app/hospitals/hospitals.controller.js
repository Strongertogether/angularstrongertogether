(function() {
    'use strict';

    angular
        .module('app.hospitals')
        .controller('hospitalsController', hospitalsController);

    hospitalsController.$inject = ['$q','dataservice','logger','$scope'];

    /* @ngInject */
    function hospitalsController($q, dataservice, logger, $scope) {
        var vm = this;
        vm.title = 'Hospitals';
        vm.hospitals= [];
        vm.filteredHospitals = [];
        vm.numPerPage = 5;
        vm.maxSize = 5;
        vm.currentPage = 1;
        vm.markers = [];

        $scope.$watch(update);
        // var watcher = vm.watch('./technicians.html');
        // watcher.on('change', update);

        vm.map = { center: { latitude: 38.8101561, longitude: -0.6043774 }, zoom: 10 };

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

            vm.Marker = {
              coords: {
                  latitude:latitude,
                  longitude:longitude
                },
              id:i
            }

            vm.markers.push(vm.Marker);

          }

        }


        /*
                    vm.Marker = {
                      coords: {
                          latitude:latitude,
                          longitude:longitude
                        },
                      id:i
                    }

                    vm.markers.push(vm.Marker);
          */


        /*
         * Test marker google maps
         *

            $scope.marker = {
              id: 0,

              latitude: 38.8101561,
              longitude: -0.6043774

              options: { draggable: true },
              events: {
                dragend: function (marker, eventName, args) {
                  $log.log('marker dragend');
                  var lat = marker.getPosition().lat();
                  var lon = marker.getPosition().lng();
                  $log.log(lat);
                  $log.log(lon);

                  $scope.marker.options = {
                    draggable: true,
                    labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
                    labelAnchor: "100 0",
                    labelClass: "marker-labels"
                  };
                }
              }
            };
*/

    }
})();
