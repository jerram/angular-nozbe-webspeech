'use strict';

// Declare app level module which depends on filters, and services
angular.module('nozbeApp', [
  'ngRoute',
  'nozbeApp.filters',
  'nozbeApp.services',
  'nozbeApp.directives',
  'nozbeApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/project', { templateUrl: 'partials/project-list.html', controller: 'mainController' });
  $routeProvider.when('/project/:projectName', { templateUrl: 'partials/action-list.html', controller: 'ProjectActionsListController' });
  $routeProvider.otherwise({ redirectTo: '/project' });
}]);
