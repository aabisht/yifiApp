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
    .controller('MovieDetailController', ['dataFactory', 'CONSTANTS', '$stateParams', '$uibModal',
      function (dataFactory, CONSTANTS, $stateParams, $uibModal) {

        var self = this;

        self.movieDetails = {
          movieId: $stateParams.movieID,
          imdb_code: $stateParams.imdbCode,
          movieData: [],
          movieSuggestion: [],
          movieIMDB_Data: [],
          sliderConfiguration: []
        };

        self.modalOpen = modalOpen;

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
          var imdbDataURL = "https://testnode25.herokuapp.com/" + self.movieDetails.imdb_code;
          dataFactory.getData(imdbDataURL)
            .then(function (responseIMDBData) {
              self.movieDetails.movieIMDB_Data = responseIMDBData.imdbData;
              console.log(self.movieDetails);
            }, function (error) {
              error.log(error);
          })
        }

        function modalOpen() {
          $uibModal.open({
            templateUrl: 'downloadTorrent.html',
            ariaLabelledBy: 'modal-title-top',
            ariaDescribedBy: 'modal-body-top',
            controller: function () {
              var self = this;
              var dataURL = CONSTANTS.BASE_API_URL + "movie_details.json?movie_id="+$stateParams.movieID;
              dataFactory.getData(dataURL)
                .then(function (responseData) {
                  self.torrentData = responseData.data.movie.torrents;
                  console.log(self.torrentData);
                }, function (error) {
                  error.log(error)
                });
            },
            controllerAs: 'MovieDetailCtrl'
          })
        }

      }]);
})();
