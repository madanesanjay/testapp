app.factory('DataService', ['$resource', function ($resource) {
        var service = {};
        service.getData = function () {
            return $resource('components/data/100.json');
        };
        return service;
    }]);