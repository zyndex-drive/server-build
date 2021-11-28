"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccessToken = void 0;
// Axios
var axios_1 = __importDefault(require("../../../axios"));
// Others
var helpers_1 = require("../../../google/helpers");
/**
 * Constructs Google Oauth Token Exchange URL for Service Account
 *
 * @param {string} jwtSignature - Service Account JWT Signature
 * @returns {object} - Google Oauth Endpoint url with params
 */
function constructTokenRequestURL(jwtSignature) {
    var url = helpers_1.api.generateToken;
    var encodedGrantType = encodeURIComponent('urn:ietf:params:oauth:grant-type:jwt-bearer');
    var params = "grant_type=".concat(encodedGrantType, "&assertion=").concat(jwtSignature);
    return { url: url, params: params };
}
/**
 * Requests a Token Response from Google Servers for Generating Access Token for Service Account
 *
 * @param {IServiceAccDoc} account - Service Account Document from Database
 * @param {TGoogleApiScope[]} scopes - Google Oauth API Scopes
 * @returns {Promise<IGoogTokenResponse>} - Returns Token Response
 */
function tokenRequest(account, scopes) {
    return new Promise(function (resolve, reject) {
        (0, helpers_1.createJwtToken)(account, scopes)
            .then(function (jwtSignature) {
            var _a = constructTokenRequestURL(jwtSignature), url = _a.url, params = _a.params;
            axios_1.default
                .post(url, params, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
                .then(function (response) {
                if (response.status === 200) {
                    resolve(response.data);
                }
                else {
                    reject(new Error('Error While Generating the Tokens'));
                }
            })
                .catch(function (error) {
                reject(new Error("".concat(error.name, ": ").concat(error.message)));
            });
        })
            .catch(function (err) {
            reject(new Error(err));
        });
    });
}
/**
 * Generates a Access Token for Service Account
 *
 * @param {IServiceAccDoc} account - Service Account Document from Database
 * @param {TGoogleApiScope[]} scopes - Google Oauth API Scopes
 * @returns {Promise<IGoogTokenResponse>} - Access Token Response
 */
function generateAccessToken(account, scopes) {
    return tokenRequest(account, scopes);
}
exports.generateAccessToken = generateAccessToken;
