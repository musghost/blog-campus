'use strict';

/**
 * @ngdoc service
 * @name blogApp.post
 * @description
 * # post
 * Factory in the blogApp.
 */
angular.module('blogApp')
  .factory('post', function ($resource) {
  	return $resource('http://localhost:1337/posts/:id', null, {
  			'update': { method: 'PUT' }
  		});
  });
