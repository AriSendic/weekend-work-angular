(function() {
  angular.module("app").controller("driversCtrl", function($scope, $http) {
    $scope.setup = function() {
      $http.get('https://data.cityofchicago.org/resource/p8iv-nnh8.json').then(function(response) {
        $scope.drivers = response.data;
      });
    };
  });
}());