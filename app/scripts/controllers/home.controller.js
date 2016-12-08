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
    .controller('HomeController', ['$state', 'dataFactory', 'CONSTANTS',
      function ($state, dataFactory, CONSTANTS) {

        var self = this;

        init();

        /**
         * @ngdoc method
         * @name init
         * @methodOf yifiAppApp.controller:HomeController
         * @description function is to use initialize the data
         */
        function init() {
          var dataURL = CONSTANTS.BASE_API_URL + "list_movies.json";

          self.sliderConfiguration = {
            active: "0",
            myInterval: "5000",
            noWrapSlides: "false"
          };

          dataFactory.getData(dataURL)
            .then(function (responseData) {
              self.movieData = responseData.data.movies;
              // console.log(self.movieData);
            }, function (error) {
              error.log(error)
            })

        }

    }]);

})();
