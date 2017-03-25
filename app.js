var App = angular.module('App', [])

App.controller('AppController', function($scope, $http) {
  $http.get('ip.min.json')
    .then(function(res) {
      $scope.icons = res.data
      $scope.count = Object.keys(res.data).reduce(function(a, b) { return a + res.data[b].length }, 0)
    })
})
