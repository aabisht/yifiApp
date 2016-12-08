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
          $urlRouterProvider.otherwise('home');;
          // .state('about', {
          //   url: '/about',
          //   templateUrl: 'views/about.html',
          //   controller: 'AboutController',
          //   controllerAs: 'AboutCtrl'
          // });
    }]);
})();
