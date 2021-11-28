"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../../../db/helpers");
/**
 * Creates a Hash Plugin which will add option to hash Fields using Bcrypt in a Schema
 *
 * @returns {Function} Hash Plugin
 */
function default_1() {
    var plugin = function (schema) {
        var toHashFields = (0, helpers_1.fieldsPicker)(schema, 'hash');
        schema.pre('validate', function (next) {
            var _this = this;
            (0, helpers_1.hashString)(this, toHashFields)
                .then(function (hashedDoc) {
                _this.set(hashedDoc);
                next();
            })
                .catch(function (err) {
                console.log(err);
                throw new Error('Password Hashing Failed');
            });
        });
    };
    return plugin;
}
exports.default = default_1;
