/**
 * @ngdoc function
 * @name yifiAppApp.factory:dataFactory
 * @description
 * # DataFactory
 * Factory data functions
 */

(function () {
  'use strict';

  angular
    .module('yifiAppApp')
    .factory('dataFactory', ['$q', '$http',
      function ($q, $http) {

        return {

          /**
           * @ngdoc method
           * @name getData
           * @methodOf yifiAppApp.factory.dataFactory:getData
           * @description function is to take one parameter i.e URL and get data on bases of URL.
           */
          getData: function (href) {
            var deferred = $q.defer();
            $http.get(href)
              .then(function(response) {
                var data = response.data;
                deferred.resolve(data);
                return data;
              }, function(error) {
                return "There was an error \n"+ error;
              });
            return deferred.promise;
          }

        }

    }])

    .filter('trusted', ['$sce',
      function ($sce) {
        return function (videoID) {
          return $sce.trustAsResourceUrl("https://www.youtube.com/embed/"+videoID);
        }
      }])


})();
