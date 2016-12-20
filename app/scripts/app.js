/**
 * @ngdoc overview
 * @name yifiAppApp
 * @description
 * # yifiAppApp
 *
 * Main module of the application.
 */
(function () {
  'use strict';
  angular
    .module('yifiAppApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngSanitize',
      'ngTouch',
      'ui.router',
      'ui.bootstrap'
    ])
    .config(['$stateProvider', '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'HomeController',
            controllerAs: 'HomeCtrl'
          })
          .state('browse-movies', {
            url: '/browse-movies',
            templateUrl: 'views/browse-movies.html',
            controller: 'BrowserMoviesController',
            controllerAs: 'BrowserMoviesCtrl'
          })
          .state('detailsPage', {
            url: '/browse-movies/:movieName',
            templateUrl: 'views/movie-details.html',
            controller: 'MovieDetailController',
            controllerAs: 'MovieDetailCtrl',
            params: {
              movieID: '',
              imdbCode: ''
            }
          });
          $urlRouterProvider.otherwise('home');
    }]);
})();
