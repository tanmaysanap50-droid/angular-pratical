var app = angular.module("ratingApp", []);

app.controller("MainController", function($scope) {
    $scope.productRating = 3;
});

app.directive("starRating", function() {
    return {
        restrict: "E",
        scope: { rating: "=" },

        template:
        '<span ng-repeat="star in stars" ' +
        'class="star" ' +
        'ng-class="{filled: star.filled}" ' +
        'ng-click="setRating($index + 1)">★</span>',

        link: function(scope) {

            function updateStars() {
                scope.stars = [];

                for (var i = 0; i < 5; i++) {
                    scope.stars.push({
                        filled: i < scope.rating
                    });
                }
            }

            scope.setRating = function(value) {
                scope.rating = value;
                updateStars();
            };

            updateStars();
        }
    };
});