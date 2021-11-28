"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearAll = void 0;
var statics_1 = require("../../plugins/db/statics");
/**
 * Clears the User Collection by Deleting all the Records
 *
 * @param {IUserModel} this - User Model
 * @returns {Promise<IInlineResponse<string>>} - Response whether cleared or not
 */
function clearAll() {
    return (0, statics_1.clearCollection)(this);
}
exports.clearAll = clearAll;
/**
 * Appends all the Static Helpers with Schema
 *
 * @param {Schema<IUserDoc, IUserModel>} schema - Model Schema
 * @returns {Schema<IUserDoc, IUserModel>} - Schema with Static Helpers
 */
function default_1(schema) {
    schema.statics.clearAll = clearAll;
    return schema;
}
exports.default = default_1;
