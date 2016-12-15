/**
 * @ngdoc function
 * @name yifiAppApp.controller:MovieDetailController
 * @requires dataFactory
 * @requires CONSTANTS
 * @description
 * # HomeController
 * Controller of the yifiAppApp
 */
(function () {
  'use strict';

  angular
    .module('yifiAppApp')
    .controller('MovieDetailController', ['dataFactory', 'CONSTANTS', '$stateParams',
      function (dataFactory, CONSTANTS, $stateParams) {

        var self = this;

        self.movieID = $stateParams.movieID;

        init();

        /**
         * @ngdoc method
         * @name init
         * @methodOf yifiAppApp.controller:MovieDetailController
         * @description function is to use initialize the data
         */
        function init() {
          var dataURL = CONSTANTS.BASE_API_URL + "movie_details.json?movie_id="+self.movieID;

          console.log(dataURL)
        }

      }]);
})();
