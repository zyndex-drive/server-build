"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// Crypto
var node_webcrypto_ossl_1 = require("node-webcrypto-ossl");
// Others
var helpers_1 = require("../../google/helpers");
var crypto = new node_webcrypto_ossl_1.Crypto();
var subtleCrypto = crypto.subtle;
var jwtHeader = {
    alg: 'RS256',
    typ: 'JWT',
};
/**
 * Converts a Base64 String to Uint8array Buffer
 *
 * @param {string} base64 - Base64 String
 * @returns {ArrayBufferLike} - uint8array buffer
 */
function base64ToArrayBuffer(base64) {
    var binaryString = Buffer.from(base64, 'base64').toString('utf8');
    var bytes = new Uint8Array(binaryString.length);
    for (var i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}
/**
 * Converts a String to Uint8array Buffer
 *
 * @param {string} str - String
 * @returns {ArrayBufferLike} - uint8array buffer
 */
function stringToArrayBuffer(str) {
    var bytes = new Uint8Array(str.length);
    for (var i = 0; i < str.length; i++) {
        bytes[i] = str.charCodeAt(i);
    }
    return bytes.buffer;
}
/**
 * Converts a Array Buffer to Base64 Encoded String
 *
 * @param {Uint8Array} buffer - Uint8Array
 * @returns {string} - Base64 Encoded String
 */
function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    for (var i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    var base64 = Buffer.from(binary).toString('base64');
    return base64;
}
/**
 * Imports Service Account Private Key as a Cryptokey
 *
 * @param {string} pemKey - Private Key of Service Account
 * @returns {Promise<CryptoKey>} - CryptoKey Object for Private Key
 */
function importPrivateKey(pemKey) {
    return __awaiter(this, void 0, void 0, function () {
        var pemDER, cryptoKey;
        return __generator(this, function (_a) {
            pemDER = base64ToArrayBuffer(pemKey
                .split('\n')
                .map(function (s) { return s.trim(); })
                .filter(function (l) { return l.length && !l.startsWith('---'); })
                .join(''));
            cryptoKey = subtleCrypto.importKey('pkcs8', pemDER, {
                name: 'RSASSA-PKCS1-v1_5',
                hash: 'SHA-256',
            }, false, ['sign']);
            return [2 /*return*/, cryptoKey];
        });
    });
}
/**
 * Create a JWT Key for the Service Account
 *
 * @param {string} text - JWT Stringified Payload
 * @param {CryptoKey} key - Cryptographic Service Account Private key
 * @returns {Promise<ArrayBuffer>} - JWT Array Buffer
 */
function createSignature(text, key) {
    return __awaiter(this, void 0, void 0, function () {
        var textBuffer, jwtKey;
        return __generator(this, function (_a) {
            textBuffer = stringToArrayBuffer(text);
            jwtKey = subtleCrypto.sign('RSASSA-PKCS1-v1_5', key, textBuffer);
            return [2 /*return*/, jwtKey];
        });
    });
}
/**
 * Creates a JWT Token for a Service Account to Generate Access Token
 *
 * @param {IServiceAccDoc} serviceAccount - ServiceAccount Document from Database
 * @param {TGoogleApiScope[]} scopes - Google Oauth API Scopes
 * @returns {string} - JWT Signature for the Service Account
 */
function default_1(serviceAccount, scopes) {
    return __awaiter(this, void 0, void 0, function () {
        var iat, stringizedScopes, payload, encPayload, encHeader, key, signed, jwtSignature, jwtToken;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    iat = Date.now() / 1000;
                    stringizedScopes = (0, helpers_1.stringizeScope)(scopes);
                    payload = {
                        iss: serviceAccount.private_key.id,
                        scope: stringizedScopes,
                        aud: 'https://oauth2.googleapis.com/token',
                        exp: iat + 3600,
                        iat: iat,
                    };
                    encPayload = Buffer.from(JSON.stringify(payload)).toString('base64');
                    encHeader = Buffer.from(JSON.stringify(jwtHeader)).toString('base64');
                    return [4 /*yield*/, importPrivateKey(serviceAccount.private_key.key)];
                case 1:
                    key = _a.sent();
                    return [4 /*yield*/, createSignature("".concat(encHeader, ".").concat(encPayload), key)];
                case 2:
                    signed = _a.sent();
                    jwtSignature = arrayBufferToBase64(signed)
                        .replace(/\//g, '_')
                        .replace(/\+/g, '-');
                    jwtToken = "".concat(encHeader, ".").concat(encPayload, ".").concat(jwtSignature);
                    return [2 /*return*/, jwtToken];
            }
        });
    });
}
exports.default = default_1;
