"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Models
var _models_1 = require("../../../../models");
// Others
var misc_1 = require("../../../misc");
var crypto_1 = require("../../../crypto");
var generate_token_1 = require("../../../google/handlers/sac/generate-token");
/**
 * Saves the Access Token in the Database for Long Term Use
 *
 * @param {IServiceAccDoc} account - Credentials Document from Database
 * @param {TGoogleApiScope[]} scopes - Google Oauth API Scopes
 * @param {IGoogTokenResponse} accessToken - Access Token Response
 * @returns {Promise<ITokenDoc[]>} - Saved Token Documents
 */
function handleTokenSaving(account, scopes, accessToken) {
    return new Promise(function (resolve, reject) {
        var now = Date.now();
        var uid = (0, misc_1.objectID)('t');
        var tokenGen = {
            _id: uid,
            token: crypto_1.encrypt.str(accessToken.access_token),
            type: 'access',
            related_to: account._id,
            scopes: scopes,
            ref_model: 'ServiceAccount',
            expires_at: now + accessToken.expires_in * 1000,
            website: 'google.com',
        };
        _models_1.Tokens.create(tokenGen)
            .then(function (tokenDoc) {
            resolve(tokenDoc);
        })
            .catch(function (error) {
            reject(new Error("".concat(error.name, ": ").concat(error.message)));
        });
    });
}
/**
 * Generate Oauth Token for a Google Service Account
 *
 * @param {string} account - Service Account ID from Database
 * @param {TGoogleApiScope[]} scopes - Google Oauth API Scopes
 * @returns {Promise<IGoogTokenResponse>} - Promise Resolving to Access Token
 */
function default_1(account, scopes) {
    return new Promise(function (resolve, reject) {
        _models_1.ServiceAccs.findById(account)
            .then(function (serviceAccDoc) {
            if (serviceAccDoc) {
                (0, generate_token_1.generateAccessToken)(serviceAccDoc, scopes)
                    .then(function (accessToken) {
                    handleTokenSaving(serviceAccDoc, scopes, accessToken)
                        .then(resolve)
                        .catch(function (err) {
                        reject(new Error(String(err)));
                    });
                })
                    .catch(function (err) {
                    reject(new Error(String(err)));
                });
            }
            else {
                reject(new Error('Unable to Find Service Account in the Database'));
            }
        })
            .catch(function (error) {
            reject(new Error("".concat(error.name, ": ").concat(error.message)));
        });
    });
}
exports.default = default_1;
