"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeFields = exports.encodeFields = void 0;
var dot_prop_1 = __importDefault(require("dot-prop"));
/**
 * Encode Particular Fields with Base64 in a Object
 *
 * @param {Object} obj - Object to Encrypt Fields
 * @param {string[]} encryptedFields - Array of Fields to Encrypt
 * @returns {Object} Object with Encrypted Fields
 */
function encodeFields(obj, encryptedFields) {
    var modObj = obj;
    if (encryptedFields) {
        encryptedFields.forEach(function (field) {
            if (dot_prop_1.default.has(obj, field)) {
                var inValue = dot_prop_1.default.get(obj, field);
                if (typeof inValue === 'string') {
                    var encryptedValue = Buffer.from(inValue).toString('base64');
                    modObj = dot_prop_1.default.set(modObj, field, encryptedValue);
                }
            }
        });
    }
    return modObj;
}
exports.encodeFields = encodeFields;
/**
 * Decode Particular Fields with Base64 in a Object
 *
 * @param {Object} obj - Encoded Object
 * @param {string[]} encryptedFields - Array of Fields to Decode
 * @returns {Object} Object with Decoded Fields
 */
function decodeFields(obj, encryptedFields) {
    var modObj = obj;
    if (encryptedFields) {
        encryptedFields.forEach(function (field) {
            if (dot_prop_1.default.has(obj, field)) {
                var inValue = dot_prop_1.default.get(obj, field);
                var decryptedValue = void 0;
                if (typeof inValue === 'string') {
                    decryptedValue = Buffer.from(inValue, 'base64').toString('utf8');
                }
                modObj = dot_prop_1.default.set(modObj, field, decryptedValue);
            }
        });
    }
    return modObj;
}
exports.decodeFields = decodeFields;
