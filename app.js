$(function() {
    $('#copy-button').tooltip();

    var clipboardDemos = new Clipboard('#copy-button')
    clipboardDemos.on('success', function(e) {
      e.clearSelection()
      showTooltip(e.trigger, 'Copied')
    })
});

function showTooltip(elem, msg) {
  $(elem).attr('title', msg)
      .tooltip('fixTitle')
      .tooltip('show')
      .attr('title', "Copy to Clipboard")
      .tooltip('fixTitle');  
}

var App = angular.module('App', [])

App.controller('AppController', function($scope, $http) {
  $http.get('ip.min.json')
    .then(function(res) {
      $scope.icons = res.data
      $scope.count = Object.keys(res.data).reduce(function(a, b) { return a + res.data[b].length }, 0)
      
      $scope.show = function(item, lib) {
        console.log(item)
        var elem = angular.element(item)
        $scope.iconClass = elem.attr('class')
        $scope.icon = elem.attr('class')
        $scope.lib =  '<link rel="stylesheet" href="' + angular.element('#' + lib).attr('href') + '">'
        angular.element('#icon-detail-modal').modal('show');
      }

      $scope.showMaterial = function(item) {
        var elem = angular.element(item)
        $scope.iconClass = '<i class="material-icons">' + item + '</i>'
        $scope.icon = item
        $scope.isHtml = true;
        $scope.lib =  '<link rel="stylesheet" href="' 
          + angular.element('#materialicons-css').attr('href') 
          + '">'
        angular.element('#icon-detail-modal').modal('show');
      }
    })
})
