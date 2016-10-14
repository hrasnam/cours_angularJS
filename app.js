(function () {
    'use strict';
    angular.module('myFirstApp',[]);
    
    .controller('MyFirstController', function ($scope) {
        $scope.name = "Marek";
        $scope.sayHello = function () {
            return "Hello Coursera!";
        };
    });
})();