'use strict';

/**
 * @ngdoc function
 * @name blogApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the blogApp
 */
angular.module('blogApp')
  .controller('EditCtrl', function ($scope, $routeParams, $location, post) {
    $scope.post = post.get({
    	id: $routeParams.id
    });
    $scope.save = function(){
    	post.update({id: $routeParams.id }, $scope.post, function(){
    		$location.path('/single/' + $routeParams.id);
    	});
    }
  });
