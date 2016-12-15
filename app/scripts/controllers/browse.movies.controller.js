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

        self.dropdownOptions = {
          name: "",
          quality: "all",
          genre: "all",
          rating: "all",
          orderBy: "latest"
        };

        self.pageNumber = 1;

        // self.movieCount;

        self.dropDownSelect = dropDownSelect;
        self.searchMovie = searchMovie;

        init();

        /**
         * @ngdoc method
         * @name init
         * @methodOf yifiAppApp.controller:BrowserMoviesController
         * @description function is to use initialize the data
         */
        function init() {
          var dataURL = CONSTANTS.BASE_API_URL + "list_movies.json";
          dataFactory.getData(dataURL)
            .then(function (responseData) {
              self.movieData = responseData.data;
              self.pageNumber = responseData.data.page_number;
            }, function (error) {
              error.log(error)
          });
        }


        /**
         * @ngdoc method
         * @name dropDownSelect
         * @methodOf yifiAppApp.controller:BrowserMoviesController
         * @description function is to use set value from drop-down options.
         */
        function dropDownSelect(event, type) {
          var $this = event.currentTarget;
          angular.element($this).closest('.dropdown-menu').siblings('.btn').children('span').text(angular.element($this).text());

          if(type === 'quality')
            self.dropdownOptions.quality = angular.element($this).attr('data-quality');
          else if(type === 'genre')
            self.dropdownOptions.genre = angular.element($this).attr('data-title');
          else if(type === 'rating')
            self.dropdownOptions.rating = angular.element($this).attr('data-rating');
          else if(type === 'orderBy')
            self.dropdownOptions.orderBy = angular.element($this).attr('data-order');
        }

        /**
         * @ngdoc method
         * @name searchMovie
         * @methodOf yifiAppApp.controller:BrowserMoviesController
         * @description function is to use search movie according to search parameters.
         */
        function searchMovie() {
          var dataURL = CONSTANTS.BASE_API_URL + "list_movies.json?query_term="+ self.dropdownOptions.name.trim().replace(/\s/g, '%20') +"&quality="+self.dropdownOptions.quality+"&genre="+self.dropdownOptions.genre+"&minimum_rating="+self.dropdownOptions.rating+"&order_by="+self.dropdownOptions.orderBy;



        }

      }]);

})();
