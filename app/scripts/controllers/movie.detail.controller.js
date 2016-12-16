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

        self.movieDetails = {
          movieId: $stateParams.movieID,
          movieData: [],
          movieSuggestion: [],
          movieComments: [],
          sliderConfiguration: []
        };

        init();

        /**
         * @ngdoc method
         * @name init
         * @methodOf yifiAppApp.controller:MovieDetailController
         * @description function is to use initialize the data
         */
        function init() {

          self.movieDetails.sliderConfiguration = {
            active: 0,
            myInterval: 5000,
            noWrapSlides: false
          }

          var dataURL = CONSTANTS.BASE_API_URL + "movie_details.json?movie_id="+self.movieDetails.movieId;
          console.log(dataURL);
          dataFactory.getData(dataURL)
            .then(function (responseData) {
              self.movieDetails.movieData = responseData.data.movie;
            }, function (error) {
              error.log(error)
          });
          dataURL = CONSTANTS.BASE_API_URL + "movie_suggestions.json?movie_id="+self.movieDetails.movieId;
          dataFactory.getData(dataURL)
            .then(function (responseData) {
              self.movieDetails.movieSuggestion = responseData.data;
            }, function (error) {
              error.log(error)
          });
          // dataURL = CONSTANTS.BASE_API_URL + "movie_comments.json?movie_id="+self.movieDetails.movieId;
          // dataFactory.getData(dataURL)
          //   .then(function (responseData) {
          //     self.movieDetails.movieComments = responseData.data;
          //   }, function (error) {
          //     error.log(error)
          // });
          console.log(self.movieDetails);
        }

      }]);
})();
