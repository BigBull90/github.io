'use strict';

angular.module('coinexApp.compare', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/compare', {
            templateUrl: 'compare/compareView.html',
            controller: 'CompareController'
        });
    }])

    .controller('CompareController', ['$scope', '$http', function($scope, $http) {
        $scope.koinex = {};
        $scope.coindelta = [];
        $scope.mapping = {
            'btc-inr': 'BTC',
            'eth-inr': 'ETH',
            'ltc-inr': 'LTC',
            'omg-inr': 'OMG',
            'xrp-inr': 'XRP',
            'bch-inr': 'BCH'
        }

        $scope.getData = function() {
            $http.get('https://koinex.in/api/ticker').then(function(response) {
                $scope.koinex = response.data.prices;
            });
            $http.get('https://coindelta.com/api/v1/public/getticker/').then(function(response) {
                angular.forEach(response.data, function(item) {
                    if ($scope.mapping.hasOwnProperty(item.MarketName)) {
                        $scope.coindelta[$scope.mapping[item.MarketName]] = item.Last;
                    }
                })
            });
        }

        $scope.getData();


    }]);