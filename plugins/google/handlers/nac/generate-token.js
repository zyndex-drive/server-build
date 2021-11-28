"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccessToken = exports.generateRefreshToken = void 0;
// Axios
var axios_1 = __importDefault(require("../../../axios"));
// Others
var API_1 = __importDefault(require("../../../google/helpers/API"));
/**
 * Constructs Google Oauth Token Exchange URL
 *
 * @param {ICredentialsDoc} credentials - Credentials Document from Database
 * @param {string} type - Type of Token to Generate (refresh_token or access_token)
 * @param {string} code - Authorization Code or Refresh Token
 * @param {string} scopes - Space Delimited Google Oauth Scopes
 * @returns {object} - Returns URL and Param in a Object
 */
function constructTokenRequestURL(credentials, type, code, scopes) {
    var url = API_1.default.generateToken;
    var params = '';
    var encoded_client_id = encodeURIComponent(credentials.client_id);
    var encoded_client_secret = encodeURIComponent(credentials.client_secret);
    var encoded_scopes = scopes ? encodeURIComponent(scopes) : '';
    var encoded_redirect_uri = encodeURIComponent(credentials.redirect_uri);
    if (type === 'access_token') {
        params += "client_id=".concat(encoded_client_id, "&client_secret=").concat(encoded_client_secret, "&refresh_token=").concat(code, "&grant_type=refresh_token");
    }
    else {
        params += "client_id=".concat(encoded_client_id, "&client_secret=").concat(encoded_client_secret, "&code=").concat(code, "&scopes=").concat(encoded_scopes, "&redirect_uri=").concat(encoded_redirect_uri, "&grant_type=authorization_code");
    }
    return { url: url, params: params };
}
/**
 * Requests a Token Response from Google Servers for Generating Access / Refresh Tokens
 *
 * @param {string} type - Type of Token to Generate (refresh_token or access_token)
 * @param {ICredentialsDoc} credentials - Credentials Doc from Database
 * @param {string} code - Authorization Code or Refresh Token
 * @param {string} scopes - Space Delimited Google API Scopes
 * @returns {Promise<IGoogTokenResponse>} - Returns Token Response
 */
function tokenRequest(type, credentials, code, scopes) {
    return new Promise(function (resolve, reject) {
        var _a = constructTokenRequestURL(credentials, type, code, scopes), url = _a.url, params = _a.params;
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
    });
}
/**
 * Generates a Refresh token with Authorization code
 *
 * @param {ICredentialsDoc} credentials - Credentials Document from Database
 * @param {string} scopes - Space Delimited Google API Scopes
 * @param {string} code - Authorization Code Received after User Authorization
 * @returns {Promise<Required<IGoogTokenResponse>>} - Refresh Token Response
 */
function generateRefreshToken(credentials, scopes, code) {
    return tokenRequest('refresh_token', credentials, code, scopes);
}
exports.generateRefreshToken = generateRefreshToken;
/**
 * Generates a Access Token with Refresh Token
 *
 * @param {ICredentialsDoc} credentials - Credentials Document from Database
 * @param {string} code - Refresh Token
 * @returns {Promise<IGoogTokenResponse>} - Access Token Response
 */
function generateAccessToken(credentials, code) {
    return tokenRequest('access_token', credentials, code);
}
exports.generateAccessToken = generateAccessToken;
