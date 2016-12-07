/**
 * @ngdoc function
 * @name yifiAppApp.controller:HomeController
 * @description
 * # HomeController
 * Controller of the yifiAppApp
 */
(function () {
  'use strict';

  angular
    .module('yifiAppApp')
    .controller('HomeController', ['$state', 'dataFactory',
      function ($state, dataFactory) {

        var self = this;

        init();

        /**
         * @ngdoc method
         * @name init
         * @methodOf yifiAppApp.controller:HomeController
         * @description function is to use initialize the data
         */
        function init() {

        }

    }]);

})();
