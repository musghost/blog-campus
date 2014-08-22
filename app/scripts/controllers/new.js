'use strict';

/**
 * @ngdoc function
 * @name blogApp.controller:NewCtrl
 * @description
 * # NewCtrl
 * Controller of the blogApp
 */
angular.module('blogApp')
  .controller('NewCtrl', function ($scope, post) {
    $scope.save = function(){
    	var newPost = new post.newPosts($scope.post);
    	newPost.$save();
    }
  });
