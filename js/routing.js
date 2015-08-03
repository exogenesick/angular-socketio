app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'partials/main.html',
            controller: 'MainController'
        })
        .when('/account', {
            templateUrl: 'partials/account.html',
            controller: 'AccountController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
