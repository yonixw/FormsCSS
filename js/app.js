var app = angular.module('tankforms', ['ngRoute', 'ngMaterial'])

.config(function ($routeProvider) {

    $routeProvider.when('/',
        {
            controller: '',
            templateUrl: './js/views/notready.html',
        })
        .when('/tasks',
        {
            controller: 'tasks',
            templateUrl: './js/views/task_view.html',
        })
        .otherwise(
        {
            redirectTo: '/'
        });
});

// Add way to print html directly (unsafe from XSS) [SO? 9381926]
app.filter("trusthtml", ['$sce', function ($sce) {
    return function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
    }
}]);



//app.run(['$route', function ($route) {
//    $route.reload();
//}]);


