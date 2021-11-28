"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkID = exports.clearAll = void 0;
var statics_1 = require("../../plugins/db/statics");
/**
 * Clears the Credentials Collection by Deleting all the Records
 *
 * @param {ICredentialsModel} this - Credentials Model
 * @returns {Promise<IInlineResponse<string>>} - Response whether cleared or not
 */
function clearAll() {
    return (0, statics_1.clearCollection)(this);
}
exports.clearAll = clearAll;
/**
 * Checks the Credentials Collection for the Given ID
 *
 * @param {ICredentialsModel} this - Credentials Model
 * @param {Types.ObjectId} id - Credential ID String
 * @returns {Promise<boolean>} - Response whether true or false
 */
function checkID(id) {
    var _this = this;
    return new Promise(function (resolve, reject) {
        _this.findById(id)
            .then(function (creds) {
            if (creds) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        })
            .catch(function (err) {
            reject(new Error("".concat(err.name, ": ").concat(err.message)));
        });
    });
}
exports.checkID = checkID;
/**
 * Appends all the Static Helpers with Schema
 *
 * @param {Schema<ICredentialsDoc, ICredentialsModel>} schema - Model Schema
 * @returns {Schema<ICredentialsDoc, ICredentialsModel>} - Schema with Static Helpers
 */
function default_1(schema) {
    schema.statics.clearAll = clearAll;
    schema.statics.checkID = checkID;
    return schema;
}
exports.default = default_1;
