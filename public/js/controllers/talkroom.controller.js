app.controller('TalkRoomController', function($scope, talk) {
    console.log('TalkRoomController init');

    $scope.message = '';
    $scope.username = '';
    $scope.messages = [];

    $scope.say = function() {
    	if ('' === $scope.message || '' === $scope.username) {
			return;
    	}

	    talk.say({
	    	username: $scope.username,
	    	message: $scope.message
	    });

	    $scope.message = '';
    }

    talk.listen(function(message) {
		$scope.$apply(function() {
    		$scope.messages.push(message);
		});
    });
});
