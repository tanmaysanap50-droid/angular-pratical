var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider

    .when("/", {
        templateUrl: "home.html",
        controller: "HomeController"
    })

    .when("/about", {
        templateUrl: "about.html",
        controller: "AboutController"
    })

    .when("/contact", {
        templateUrl: "contact.html",
        controller: "ContactController"
    })

    .otherwise({
        redirectTo: "/"
    });
});

app.controller("HomeController", function($scope) {
    $scope.message = "Welcome to the Home Page!";
});

app.controller("AboutController", function($scope) {
    $scope.message = "Learn more about us on the about page.";
});

app.controller("ContactController", function($scope) {
    $scope.message = "Contact us at contact@example.com";
});

app.run(function($rootScope, $location) {
    $rootScope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});