app.controller('tasks', function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";

    $scope.fullName = function () {
        return $scope.firstName + " " + $scope.lastName;
    };
});