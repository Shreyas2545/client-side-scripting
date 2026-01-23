var myApp = angular.module("eventModule", []);

myApp.controller("eventController", function ($scope) {

    $scope.events = [
        { name: "Hackathon", venue: "Computer Lab A", time: "9:00 AM – 5:00 PM", selected: false },
        { name: "Technical Workshop", venue: "Seminar Hall 1", time: "10:00 AM – 1:00 PM", selected: false },
        { name: "Tech Talk", venue: "Auditorium", time: "2:00 PM – 4:00 PM", selected: false },
        { name: "Coding Contest", venue: "Computer Lab B", time: "11:00 AM – 2:00 PM", selected: false },
        { name: "AI & ML Seminar", venue: "Conference Room", time: "3:00 PM – 5:00 PM", selected: false }
    ];

    $scope.submitForm = function () {
        $scope.submitted = true;
    };

});
