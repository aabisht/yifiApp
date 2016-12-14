/**
 * @ngdoc function
 * @name yifiAppApp.controller:BrowserMoviesController
 * @requires dataFactory
 * @requires CONSTANTS
 * @description
 * # BrowserMoviesController
 * Controller of the yifiAppApp
 */
(function () {
  'use strict';

  angular
    .module('yifiAppApp')
    .controller('BrowserMoviesController', ['dataFactory', 'CONSTANTS',
      function (dataFactory, CONSTANTS) {

        var self = this;

        self.dropDownSelect = dropDownSelect;

        init();

        /**
         * @ngdoc method
         * @name init
         * @methodOf yifiAppApp.controller:BrowserMoviesController
         * @description function is to use initialize the data
         */
        function init() {



        }

        function dropDownSelect(event) {
          var $this = event.currentTarget;
          angular.element($this).closest('.dropdown-menu').siblings('.btn').children('span').text(angular.element($this).text());
        }

      }]);

})();
