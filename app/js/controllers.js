'use strict';

/* Controllers */
var projectControllers = angular.module('nozbeApp.controllers', []);

projectControllers.controller('mainController', ['$scope', '$http',
  function($scope, $http) {
    $scope.apiKey = "<Add your API key here>";

    var endpoint = 'https://webapp.nozbe.com/api/projects/' + $scope.apiKey;
    console.log("Running Project controller");
    console.log('The endpoint is ' + endpoint);

    $http.get('http://10.2.2.3/proxy.php?endpoint=' + endpoint).success(function(data) {
      console.log('Projects: ' + data + ' - and thats all');
      $scope.projects = data;
    }).error(function(error) {
      console.log('Cant load the API dude' + error);
      console.log(data);
      $scope.messages = 'Cant load the API dude' + error;
    });
  }]);

projectControllers.controller('ProjectActionsListController', ['$scope', '$routeParams', '$http', 'Project',
  function($scope, $routeParams, $http, Project) {
    $scope.project = Project.get({projectId: $routeParams.projectId}, function(project) {
      //$scope.mainImageUrl = project.images[0];
    });

    var endpoint = 'https://webapp.nozbe.com/api/actions/what-project/id-' + project.id + '/key-' + $scope.apiKey;
    console.log("Running Action controller");
    console.log('The endpoint is ' + endpoint);

    $http.get('http://10.2.2.3/proxy.php?endpoint=' + endpoint).success(function(data) {
      console.log('Actions: ' + data + ' - and thats all');
      $scope.actions = data;
    }).error(function(error) {
      console.log('Cant load the API dude' + error);
      console.log(data);
      $scope.messages = 'Cant load the API dude' + error;
    });
  }]);
