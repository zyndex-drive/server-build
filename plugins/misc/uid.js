"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortuid = exports.objectID = void 0;
var nanoid_1 = require("nanoid");
var mongoose_1 = require("mongoose");
var ALPHANUMS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var SYMBOLS = '&%^()!@#$*<>?/][}{<>,.|:;';
var CUSTOM_ALPHA = "".concat(ALPHANUMS).concat(SYMBOLS);
var LONG_LENGTH = 10;
var SHORT_LENGTH = 8;
var longid = (0, nanoid_1.customAlphabet)(CUSTOM_ALPHA, LONG_LENGTH);
var shortid = (0, nanoid_1.customAlphabet)(ALPHANUMS, SHORT_LENGTH);
/**
 * Generates a Long Unique ID with the Given Hash Algorithm
 *
 * @param {string} prefix - Prefix to be Added before the UID
 * @returns {string} uid - Long UID
 */
function longID(prefix) {
    var prefixCheck = prefix ? (prefix.length > 1 ? false : true) : true;
    if (prefixCheck) {
        try {
            var id = longid();
            var pre = prefix ? "".concat(prefix, "@") : '';
            var uid = "".concat(pre).concat(id);
            return uid;
        }
        catch (_a) {
            throw new Error('Unable to Generate UID');
        }
    }
    else {
        throw new Error('Prefix Cant be more than one Character');
    }
}
exports.default = longID;
/**
 * Generates a Mongo Reference ID
 *
 * @param {string} prefix - prefix to be attached
 * @returns {Types.ObjectId} - Mongo Object ID
 */
function objectID(prefix) {
    try {
        var id = mongoose_1.Types.ObjectId(longID(prefix));
        return id;
    }
    catch (e) {
        throw new Error(String(e));
    }
}
exports.objectID = objectID;
/**
 * Generates a Short Unique ID
 *
 * @param {string} prefix - Prefix to be Added before the UID
 * @returns {string} uid - Short UID
 */
function shortuid(prefix) {
    var id = shortid();
    var pre = prefix ? "".concat(prefix, "@") : '';
    var uid = "".concat(pre).concat(id);
    return uid;
}
exports.shortuid = shortuid;
