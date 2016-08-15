var app = angular.module('tankforms', ['ngRoute'])

.config(function ($routeProvider) {

    $routeProvider.when('/',
        {
            controller: '',
            templateUrl: './js/views/notready.html',
        })
        .when('/tasks',
        {
            controller: 'tasks',
            templateUrl: './js/views/tasks.html',
        })
        .otherwise(
        {
            redirectTo: '/'
        });
});