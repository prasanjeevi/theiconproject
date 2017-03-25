var App = angular.module('App', [])

App.controller('AppController', ($scope, $http, $window) => {
  $scope.icons = {
  "glyphicons": [
    "asterisk",
    "plus",
    "euro",
    "eur"
  ]
  }
})
