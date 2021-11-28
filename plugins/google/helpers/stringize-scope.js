"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts the Array of Scopes to a Scope Parameter
 *
 * @param {TGoogleApiScope} scopes - Array of Google API Scopes
 * @returns {string} - Space Delimited Scopes
 */
function default_1(scopes) {
    var scopeString = '';
    scopes.forEach(function (scope, index) {
        if (index === scopes.length - 1) {
            scopeString += "".concat(scope);
        }
        else {
            scopeString += "".concat(scope, " ");
        }
    });
    return scopeString;
}
exports.default = default_1;
