"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../../../db/helpers");
/**
 * Creates a Crypto Plugin which will add option to encrypt Fields in a Schema
 *
 * @returns {Function} Crypto Plugin
 */
function default_1() {
    var plugin = function (schema) {
        var encryptedFields = (0, helpers_1.fieldsPicker)(schema, 'encrypt');
        schema.pre('validate', function (next) {
            var encryptedDoc = (0, helpers_1.encryptFields)(this, encryptedFields);
            this.set(encryptedDoc);
            next();
        });
        schema.post('init', function () {
            var decryptedDoc = (0, helpers_1.decryptFields)(this, encryptedFields);
            return decryptedDoc;
        });
    };
    return plugin;
}
exports.default = default_1;
