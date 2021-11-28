"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt_1 = __importDefault(require("bcrypt"));
var dot_prop_1 = __importDefault(require("dot-prop"));
/**
 * Hashes Particular Fields in a Object
 *
 * @param {Object} obj - Object to Hash Fields
 * @param {string[]} encryptedFields - Array of Fields to Hash
 * @returns {Object} Object with Hashed Fields
 */
function default_1(obj, encryptedFields) {
    return new Promise(function (resolve, reject) {
        try {
            if (encryptedFields) {
                var forLoopPromise = new Promise(function (resolve, reject) {
                    var modObj = obj;
                    encryptedFields.forEach(function (field, index) {
                        if (dot_prop_1.default.has(obj, field)) {
                            var inValue = dot_prop_1.default.get(obj, field);
                            if (typeof inValue === 'string') {
                                bcrypt_1.default
                                    .hash(inValue, 10)
                                    .then(function (result) {
                                    modObj = dot_prop_1.default.set(modObj, field, result);
                                })
                                    .catch(function (err) {
                                    reject(err);
                                });
                            }
                        }
                        if (index === encryptedFields.length - 1)
                            resolve(modObj);
                    });
                });
                forLoopPromise
                    .then(function (modObj) { return resolve(modObj); })
                    .catch(function (err) {
                    console.log(err);
                    reject(err);
                });
            }
        }
        catch (err) {
            console.log(err);
            reject(err);
        }
    });
}
exports.default = default_1;
