app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'partials/main.html',
            controller: 'MainController'
        })
        .when('/talkroom', {
            templateUrl: 'partials/talkroom.html',
            controller: 'TalkRoomController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
