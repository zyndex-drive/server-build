"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptFields = exports.encryptFields = void 0;
var crypto_1 = require("../../crypto");
var dot_prop_1 = __importDefault(require("dot-prop"));
/**
 * Encrypts Particular Fields in a Object
 *
 * @param {Object} obj - Object to Encrypt Fields
 * @param {string[]} encryptedFields - Array of Fields to Encrypt
 * @returns {Object} Object with Encrypted Fields
 */
function encryptFields(obj, encryptedFields) {
    var modObj = obj;
    if (encryptedFields) {
        encryptedFields.forEach(function (field) {
            if (dot_prop_1.default.has(obj, field)) {
                var inValue = dot_prop_1.default.get(obj, field);
                var encryptedValue = void 0;
                if (typeof inValue === 'string') {
                    encryptedValue = crypto_1.encrypt.str(inValue);
                }
                else {
                    var cryptoData = {
                        data: inValue,
                    };
                    encryptedValue = crypto_1.encrypt.obj(cryptoData);
                }
                modObj = dot_prop_1.default.set(modObj, field, encryptedValue);
            }
        });
    }
    return modObj;
}
exports.encryptFields = encryptFields;
/**
 * Decrypts Particular Fields in a Object
 *
 * @param {Object} obj - Encrypted Object
 * @param {string[]} encryptedFields - Array of Fields to Encrypt
 * @returns {Object} Object with Decrypted Fields
 */
function decryptFields(obj, encryptedFields) {
    var modObj = obj;
    if (encryptedFields) {
        encryptedFields.forEach(function (field) {
            if (dot_prop_1.default.has(obj, field)) {
                var inValue = dot_prop_1.default.get(obj, field);
                var decryptedValue = void 0;
                if (typeof inValue === 'string') {
                    decryptedValue = crypto_1.decrypt.str(inValue);
                }
                modObj = dot_prop_1.default.set(modObj, field, decryptedValue);
            }
        });
    }
    return modObj;
}
exports.decryptFields = decryptFields;
