"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapCheck = exports.clearAll = void 0;
var statics_1 = require("../../plugins/db/statics");
var policies_1 = require("../../plugins/templates/policies");
/**
 * Clears the Policy Collection by Deleting all the Records
 *
 * @param {IPolicyModel} this - Policy Model
 * @returns {Promise<IInlineResponse<string>>} - Response whether cleared or not
 */
function clearAll() {
    return (0, statics_1.clearCollection)(this);
}
exports.clearAll = clearAll;
/**
 * Checks the Predefined map of Policies with the Docs present in Database
 *
 * @param {IPolicyModel} this - Policy Model
 * @returns {Promise<IInlineResponse<boolean>>} - Response whether map is matching or not
 */
function mapCheck() {
    var _this = this;
    return new Promise(function (resolve, reject) {
        var result = {
            success: false,
            data: false,
            error: null,
        };
        _this.find({})
            .then(function (docs) {
            var policyMatches = [];
            result.success = true;
            var _loop_1 = function (i) {
                var map = policies_1.map[i];
                var doc = docs.filter(function (doc) { return doc._id === map._id; })[0];
                if (doc && map && doc._id === map._id) {
                    var name_1 = doc.name === map.name;
                    var message = doc.message === map.message;
                    policyMatches.push(name_1 && message);
                }
                else {
                    policyMatches.push(false);
                }
            };
            for (var i = 0; i < policies_1.map.length; i++) {
                _loop_1(i);
            }
            if (policyMatches.includes(false)) {
                result.data = false;
            }
            else {
                result.data = true;
            }
            resolve(result);
        })
            .catch(function (err) {
            result.error = err;
            reject(new Error("".concat(err.name, ": ").concat(err.message)));
        });
    });
}
exports.mapCheck = mapCheck;
/**
 * Appends all the Static Helpers with Schema
 *
 * @param {Schema<IPolicyDoc, IPolicyModel>} schema - Model Schema
 * @returns {Schema<IPolicyDoc, IPolicyModel>} - Schema with Static Helpers
 */
function default_1(schema) {
    schema.statics.clearAll = clearAll;
    schema.statics.mapCheck = mapCheck;
    return schema;
}
exports.default = default_1;
