var App = angular.module('App', [])

App.controller('AppController', ($scope, $http) => {
  $http.get('ip.min.json')
    .then(res => {
      $scope.icons = res.data
      $scope.count = Object.keys(res.data).reduce((a, b) => a + res.data[b].length, 0)
    })
})