var App = angular.module('App', [])

App.controller('AppController', ($scope, $http, $window) => {
  $http.get('notfound.json')
    .then(res => {
      $scope.icons = res.data
      $scope.count = Object.keys(res.data).reduce((a, b) => a + res.data[b].length, 0)
      $window.alert(res.status);
    }, function(res){$window.alert(res.statusText)})
})
