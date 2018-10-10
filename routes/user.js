"use strict";
var Route;
(function (Route) {
    class User {
        user(req, res, next) {
            res.render("user");
        }
    }
    Route.User = User;
})(Route || (Route = {}));
module.exports = Route;
