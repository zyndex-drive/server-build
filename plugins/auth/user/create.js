"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _models_1 = require("../../../models");
/**
 * Create a User and Save it to Database
 *
 * @param {IUser} user - User Object containing Details
 * @returns {IUserDoc} - Saved User from Database
 */
function default_1(user) {
    return new Promise(function (resolve, reject) {
        var newUser = new _models_1.Users(user);
        newUser
            .save()
            .then(resolve)
            .catch(function (err) {
            reject(new Error("".concat(err.name, ": ").concat(err.message)));
        });
    });
}
exports.default = default_1;
