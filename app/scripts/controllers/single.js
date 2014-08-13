'use strict';

/**
 * @ngdoc function
 * @name blogApp.controller:SingleCtrl
 * @description
 * # SingleCtrl
 * Controller of the blogApp
 */
angular.module('blogApp')
  .controller('SingleCtrl', function ($scope, $routeParams, post) {
    $scope.post = post.get({
    	id: $routeParams.id
    });
  });
