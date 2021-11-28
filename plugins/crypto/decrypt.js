"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_js_1 = __importDefault(require("crypto-js"));
/**
 * Crypto - Decrypt Helpers
 */
var decrypt = {
    /**
     * Decrypt String Encrypted with AES Algorithm
     *
     * @param {string} encryptedStr - Data to be Decrypted
     * @returns { string } - Decrypted String
     */
    str: function (encryptedStr) {
        var PASSPHRASE = process.env.GLOBAL_PASSPHRASE;
        if (PASSPHRASE) {
            var decryptedStr = crypto_js_1.default.AES.decrypt(encryptedStr, PASSPHRASE).toString(crypto_js_1.default.enc.Utf8);
            return decryptedStr;
        }
        else {
            throw new Error('Passphrase not set in Variables, Kindly Set that');
        }
    },
    /**
     * Decrypt Object Encrypted with AES Algorithm
     *
     * @param {string} cryptText - Data to be Decrypted
     * @returns { string } - Decrypted Object
     */
    obj: function (cryptText) {
        var PASSPHRASE = process.env.GLOBAL_PASSPHRASE;
        if (PASSPHRASE) {
            var decryptedData = JSON.parse(crypto_js_1.default.AES.decrypt(cryptText, PASSPHRASE).toString(crypto_js_1.default.enc.Utf8));
            return decryptedData.data;
        }
        else {
            throw new Error('Passphrase not set in Variables, Kindly Set that');
        }
    },
};
exports.default = decrypt;
