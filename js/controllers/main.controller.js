app.controller('MainController', function($scope, simpleFactory) {
    console.log('MainCtrl');
    console.log(simpleFactory.get());
    simpleFactory.set('VALUE');
});
