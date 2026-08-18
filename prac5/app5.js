var app = angular.module("sharedApp", []);

// Service to manage shared data and business logic
app.service("DataService", function () {
    var sharedMessage = "Hello from the Service!";

    return {
        getMessage: function () {
            return sharedMessage;
        },

        setMessage: function (msg) {
            sharedMessage = msg;
        },

        clearMessage: function () {
            sharedMessage = "";
        }
    };
});

// First Controller
app.controller("FirstController", function ($scope, DataService) {
    $scope.message = DataService.getMessage();

    $scope.updateMessage = function () {
        DataService.setMessage($scope.newMessage);
    };
});

// Second Controller
app.controller("SecondController", function ($scope, DataService) {
    $scope.message = DataService.getMessage();

    $scope.clearMessage = function () {
        DataService.clearMessage();
        $scope.message = DataService.getMessage();
    };
});