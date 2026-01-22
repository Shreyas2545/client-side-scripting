var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope) {
    $scope.styleData = {
        "color": "green",
        "background-color": "white",
        "font-family": "sans-serif",
        "text-align": "center",
        "font-size": "50px"
    };
    $scope.userName = " ";
});
