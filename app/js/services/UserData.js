eventsApp.factory('userData', function($resource) {
    var resource = $resource('/data/user/:id', {id:'@id'}, {"getAll": {method: "GET", isArray: true, params: {something: "foo"}}});
    return {
        getUser: function(userId) {
            return resource.get({id:userId});
        },
        save: function(user) {
            user.id = 999;
            return resource.save(user);
        },
        getAllUsers: function() {
            return resource.query();
        }
    };
});