"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../../../db/helpers");
/**
 * Creates a Base64 Encoder Plugin which will add option to Encode Fields in a Schema
 *
 * @returns {Function} Base64 Plugin
 */
function default_1() {
    var plugin = function (schema) {
        var toEncodeFields = (0, helpers_1.fieldsPicker)(schema, 'base64encode');
        schema.pre('validate', function (next) {
            var encodedDoc = (0, helpers_1.encodeFields)(this, toEncodeFields);
            this.set(encodedDoc);
            next();
        });
        schema.post('init', function () {
            var decodedDoc = (0, helpers_1.decodeFields)(this, toEncodeFields);
            return decodedDoc;
        });
    };
    return plugin;
}
exports.default = default_1;
