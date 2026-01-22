var myApp = angular.module("eventModule", []);

myApp.controller("eventController", function ($scope) {

    $scope.events = [
        {
            name: "Hackathon",
            venue: "Computer Lab A",
            time: "9:00 AM – 5:00 PM"
        },
        {
            name: "Technical Workshop",
            venue: "Seminar Hall 1",
            time: "10:00 AM – 1:00 PM"
        },
        {
            name: "Tech Talk",
            venue: "Auditorium",
            time: "2:00 PM – 4:00 PM"
        },
        {
            name: "Coding Contest",
            venue: "Computer Lab B",
            time: "11:00 AM – 2:00 PM"
        }
    ];

    $scope.submitForm = function () {
        $scope.submitted = true;
    };

});
