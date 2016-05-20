(function() {
	'use strict';

	angular
		.module('TPapp', ['ui.router']);

	angular
		.module('TPapp')
		.config(function($urlRouterProvider, $stateProvider){

			$urlRouterProvider.otherwise('/');

			$stateProvider
			.state('main', {
				url: '/',
				templateUrl: 'site/partials/main.html',
				controller: 'MainCtrl as ctrl'
			})
			.state('map', {
				url: '/map',
				templateUrl: 'site/partials/map.html',
				controller: 'MapCtrl as ctrl'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'site/partials/about.html',
				controller: 'AboutCtrl as ctrl'
			})
			.state('blog',{
				url: '/blog',
				templateUrl: 'site/partials/blog.html',
				controller: 'BlogCtrl as ctrl'
			});

		});

})();