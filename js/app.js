var app = angular.module('tankforms', ['ngRoute'])

.config(function ($routeProvider) {

    $routeProvider.when('/',
        {
            controller: null,
            templateUrl:'./views/notready.html',
        })
        .when('/tasks',
        {
            controller:'tasks',
            templateUrl:'./views/tasks.html',
        })
        .otherwise(
        {
            redirectTo:'/'
        });
})