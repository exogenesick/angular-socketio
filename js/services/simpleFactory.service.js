app.factory('simpleFactory', function(Configuration) {
    var factory = {};
    var storage = Configuration.backend;

    console.log('BUILDING FACTORY');

    factory.get = function() {
        return storage;
    };

    factory.set = function(value) {
        storage = value;
    }

    return factory;
});
