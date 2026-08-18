angular.module('apiApp', [])
.controller('ApiController', ['$scope', '$http', function($scope, $http) {

    $scope.users = [];
    $scope.searchText = '';
    $scope.sortField = 'name';
    $scope.reverseSort = false;

    // Fetch data from JSONPlaceholder API
    $http.get('https://jsonplaceholder.typicode.com/users')
    .then(function(response) {
        $scope.users = response.data;
    }, function(error) {
        console.error('Error fetching data:', error);
    });

    // Sorting function
    $scope.sortBy = function(field) {
        if ($scope.sortField === field) {
            $scope.reverseSort = !$scope.reverseSort;
        } else {
            $scope.sortField = field;
            $scope.reverseSort = false;
        }
    };

}]);