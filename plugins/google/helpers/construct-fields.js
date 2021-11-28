"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Constructs Fields Parameter for Google Requests
 *
 * @param {string[]} fields - Array of Fields
 * @param {string} prefix - Prefix to be added to each field
 * @returns {string} - Constructed Field Parameter
 */
function default_1(fields, prefix) {
    var constructedField = '';
    if (prefix) {
        for (var i = 0; i < fields.length; i++) {
            if (i < fields.length - 1) {
                constructedField += "".concat(prefix, "/").concat(fields[i], ",");
            }
            else {
                constructedField += "".concat(prefix, "/").concat(fields[i]);
            }
        }
        return constructedField;
    }
    else {
        for (var i = 0; i < fields.length; i++) {
            if (i < fields.length - 1) {
                constructedField += "".concat(fields[i], ",");
            }
            else {
                constructedField += "".concat(fields[i]);
            }
        }
        return constructedField;
    }
}
exports.default = default_1;
