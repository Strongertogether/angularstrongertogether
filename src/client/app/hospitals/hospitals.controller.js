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
            return vm.hospitals;
          });
        }

        function update(){
            var begin = ((vm.currentPage - 1) * vm.numPerPage), end = begin + vm.numPerPage;
            vm.filteredHospitals = vm.hospitals.slice(begin, end);
        }
    }
})();
