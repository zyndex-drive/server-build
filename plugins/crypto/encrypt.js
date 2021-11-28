"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_js_1 = __importDefault(require("crypto-js"));
/**
 * Crypto - Encrypt Helpers
 */
var encrypt = {
    /**
     * Encrypt a String using AES Algorithm
     *
     * @param {string} str - String to Encrypt
     * @returns {string} - Encrypted String
     */
    str: function (str) {
        var PASSPHRASE = process.env.GLOBAL_PASSPHRASE;
        if (PASSPHRASE) {
            var encryptedData = crypto_js_1.default.AES.encrypt(str, PASSPHRASE).toString();
            return encryptedData;
        }
        else {
            throw new Error('Passphrase not set in Variables, Kindly Set that');
        }
    },
    /**
     * Encrypts Data with AES Method
     *
     * @param {string | object} data - Data to be Encrypted
     * @returns { string } - Encrypted Data
     */
    obj: function (data) {
        var PASSPHRASE = process.env.GLOBAL_PASSPHRASE;
        if (PASSPHRASE) {
            var encryptedData = crypto_js_1.default.AES.encrypt(JSON.stringify(data), PASSPHRASE).toString();
            return encryptedData;
        }
        else {
            throw new Error('Passphrase not set in Variables, Kindly Set that');
        }
    },
};
exports.default = encrypt;
