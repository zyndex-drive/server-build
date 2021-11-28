"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
// Models
var _models_1 = require("../../../models");
// Others
var generate_token_1 = require("../../google/handlers/nac/generate-token");
var generate_token_2 = require("../../google/handlers/sac/generate-token");
var misc_1 = require("../../misc");
/**
 * Fetches all the Data in the Database Related to a Credential ID
 *
 * @param { string } credentialID - Credential ID from the Database
 * @param {TGoogleApiScope[]} scopes - Google Oauth API Scopes
 * @returns { IGetAllTokens } - Data Related to Credential ID
 */
function getAllTokens(credentialID, scopes) {
    return new Promise(function (resolve, reject) {
        var response = {
            success: false,
        };
        _models_1.Credentials.findById(credentialID)
            .then(function (credential) {
            if (credential) {
                response.credential = credential;
                _models_1.ServiceAccs.find({ related_to: credential._id })
                    .then(function (serviceAccs) {
                    response.serviceAcc = serviceAccs;
                    var serviceAccountIds = serviceAccs.map(function (account) { return account._id; });
                    var tokenFindParam = __spreadArray([
                        { related_to: credential._id, scopes: scopes }
                    ], serviceAccountIds.map(function (id) { return ({ related_to: id, scopes: scopes }); }), true);
                    _models_1.Tokens.find({
                        $or: tokenFindParam,
                    })
                        .then(function (tokens) {
                        if (tokens.length > 0) {
                            var normalAccessTokens = tokens.filter(function (token) {
                                return token.type === 'access' &&
                                    token.ref_model === 'Credential';
                            });
                            var serviceAccessTokens = tokens.filter(function (token) {
                                return token.type === 'access' &&
                                    token.ref_model === 'ServiceAccount';
                            });
                            var refreshTokens = tokens.filter(function (token) { return token.type === 'refresh'; });
                            response.tokens = {
                                access: {
                                    normal: normalAccessTokens,
                                    service: serviceAccessTokens,
                                },
                                refresh: refreshTokens,
                            };
                            response.success = true;
                            resolve(response);
                        }
                        else {
                            response.success = false;
                            resolve(response);
                        }
                    })
                        .catch(function (error) {
                        reject(new Error("".concat(error.name, ": ").concat(error.message)));
                    });
                })
                    .catch(function (error) {
                    reject(new Error("".concat(error.name, ": ").concat(error.message)));
                });
            }
        })
            .catch(function (error) {
            reject(new Error("".concat(error.name, ": ").concat(error.message)));
        });
    });
}
/**
 * Checks Validity of Tokens
 *
 * @param {ITokenDoc[]} tokens - Array of Token Documents from Database
 * @returns {IValidityCheck} - tokens Array with Validity
 */
function checkValidity(tokens) {
    var validityArray = tokens.map(function (token) {
        /** To be future proof, Checking all Tokens which are Expiring within 15 minutes */
        var currentTime = Date.now() + 15 * 60 * 1000;
        var tokenTime = token.expires_at;
        var response = {
            token: token,
            validity: false,
        };
        if (tokenTime > currentTime) {
            response.validity = true;
        }
        return response;
    });
    return validityArray;
}
/**
 * Deletes Tokens from Database
 *
 * @param {ITokenDoc[]} tokens - Array of Token Documents from Database
 */
function deleteInvalidTokens(tokens) {
    return new Promise(function (resolve, reject) {
        var tokenDeleteParam = tokens.map(function (token) { return token._id; });
        _models_1.Tokens.deleteMany({ _id: { $in: tokenDeleteParam } })
            .then(function () { return resolve(); })
            .catch(function (err) {
            reject(new Error("".concat(err.name, ": ").concat(err.message)));
        });
    });
}
/**
 * Generates a Access Token for the Particular Credentials and Saves it to Database
 *
 * @param {ICredentialsDoc} credentials - Credentials from Database
 * @param {TGoogleApiScope[]} scopes - Google Oauth API Scopes
 * @param {ITokenDoc} refreshToken - Refresh Token Document from Database
 * @returns {Promise<ITokenDoc>} - Generated Access Token
 */
function generateNormalTokenSave(credentials, scopes, refreshToken) {
    return new Promise(function (resolve, reject) {
        (0, generate_token_1.generateAccessToken)(credentials, refreshToken.token)
            .then(function (response) {
            var uid = (0, misc_1.objectID)('t');
            var now = Date.now();
            var token = {
                _id: uid,
                token: response.access_token,
                type: 'access',
                related_to: credentials._id,
                scopes: scopes,
                ref_model: 'Credential',
                expires_at: now + response.expires_in * 1000,
                website: 'google.com',
            };
            _models_1.Tokens.create(token)
                .then(function (savedToken) {
                resolve(savedToken);
            })
                .catch(function (err) {
                reject(new Error("".concat(err.name, ": ").concat(err.message)));
            });
        })
            .catch(function (err) {
            reject(new Error(err));
        });
    });
}
/**
 * Generates a Access Token for Service Account and Saves it to Database
 *
 * @param {IServiceAccDoc} account - Service Account Document from Database
 * @param {TGoogleApiScope[]} scopes - Google Oauth API Scopes
 * @returns {Promise<ITokenDoc>} - Generated Access Token
 */
function generateServiceTokenSave(account, scopes) {
    return new Promise(function (resolve, reject) {
        (0, generate_token_2.generateAccessToken)(account, scopes)
            .then(function (response) {
            var uid = (0, misc_1.objectID)('t');
            var now = Date.now();
            var token = {
                _id: uid,
                token: response.access_token,
                type: 'access',
                related_to: account._id,
                scopes: scopes,
                ref_model: 'ServiceAccount',
                expires_at: now + response.expires_in * 1000,
                website: 'google.com',
            };
            _models_1.Tokens.create(token)
                .then(function (savedToken) {
                resolve(savedToken);
            })
                .catch(function (err) {
                reject(new Error("".concat(err.name, ": ").concat(err.message)));
            });
        })
            .catch(function (err) {
            reject(new Error(err));
        });
    });
}
/**
 * Handles Access Token Generation for Service Account Accounts
 *
 * @param {IGetAllTokens} tokenData - Response from GetallTokens Function
 * @param {TGoogleApiScope} scopes - Google Oauth API Scopes
 * @returns {Promise<ITokenDoc | false>} - Access Token for Each Service Account
 */
function serviceAccountTokenHandler(tokenData, scopes) {
    return new Promise(function (resolve, reject) {
        var serviceAcc = tokenData.serviceAcc;
        if (serviceAcc) {
            var tokens = tokenData.tokens;
            if (tokens && tokens.access.service) {
                var validityArray = checkValidity(tokens.access.service);
                var validTokens_1 = validityArray
                    .filter(function (token) { return token.validity; })
                    .map(function (token) { return token.token; });
                var invalidTokens = validityArray
                    .filter(function (token) { return !token.validity; })
                    .map(function (token) { return token.token; });
                deleteInvalidTokens(invalidTokens)
                    .then(function () {
                    if (validTokens_1.length > 0) {
                        resolve(validTokens_1);
                    }
                    else {
                        var tokenArray_1 = [];
                        serviceAcc.forEach(function (account) {
                            generateServiceTokenSave(account, scopes)
                                .then(function (serviceToken) {
                                tokenArray_1.push(serviceToken);
                            })
                                .catch(function (err) {
                                reject(new Error("".concat(err.name, ": ").concat(err.message)));
                            });
                        });
                        if (tokenArray_1.length > 1) {
                            resolve(tokenArray_1);
                        }
                        else {
                            resolve(false);
                        }
                    }
                })
                    .catch(function (err) {
                    reject(new Error(err));
                });
            }
            else {
                var tokenArray_2 = [];
                serviceAcc.forEach(function (account) {
                    generateServiceTokenSave(account, scopes)
                        .then(function (serviceToken) {
                        tokenArray_2.push(serviceToken);
                    })
                        .catch(function (err) {
                        reject(new Error("".concat(err.name, ": ").concat(err.message)));
                    });
                });
                if (tokenArray_2.length > 1) {
                    resolve(tokenArray_2);
                }
                else {
                    resolve(false);
                }
            }
        }
        else {
            resolve(false);
        }
    });
}
/**
 * Checks Validity of Access Tokens and Refreshes it
 *
 * @param { IGetAllTokens } tokenData - Response from GetallTokens Function
 * @param { TGoogleApiScope[] } scopes - Google Oauth API Scopes
 * @returns { IGetAllTokens } - Active Tokens
 */
function checkTokenRefreshit(tokenData, scopes) {
    return new Promise(function (resolve, reject) {
        var success = tokenData.success, credential = tokenData.credential, serviceAcc = tokenData.serviceAcc, tokens = tokenData.tokens;
        if (success && credential && tokens) {
            var access = tokens.access, refresh_1 = tokens.refresh;
            if (refresh_1.length > 0) {
                var response_1 = {
                    success: false,
                    credential: credential,
                    serviceAcc: serviceAcc,
                };
                if (access.normal.length === 0) {
                    generateNormalTokenSave(credential, scopes, refresh_1[0])
                        .then(function (savedToken) {
                        response_1.success = false;
                        response_1.tokens = {
                            refresh: refresh_1,
                            access: {
                                normal: [savedToken],
                            },
                        };
                        resolve(response_1);
                    })
                        .catch(function (err) {
                        reject(new Error(err));
                    });
                }
                else {
                    var validityArray = checkValidity(access.normal);
                    var validTokens_2 = validityArray
                        .filter(function (token) { return token.validity; })
                        .map(function (token) { return token.token; });
                    var invalidTokens = validityArray
                        .filter(function (token) { return !token.validity; })
                        .map(function (token) { return token.token; });
                    deleteInvalidTokens(invalidTokens)
                        .then(function () {
                        response_1.success = true;
                        if (validTokens_2.length > 0) {
                            response_1.tokens = {
                                refresh: refresh_1,
                                access: {
                                    normal: validTokens_2,
                                },
                            };
                            resolve(response_1);
                        }
                        else {
                            generateNormalTokenSave(credential, scopes, refresh_1[0])
                                .then(function (savedToken) {
                                response_1.tokens = {
                                    refresh: refresh_1,
                                    access: {
                                        normal: [savedToken],
                                    },
                                };
                                resolve(response_1);
                            })
                                .catch(function (err) {
                                reject(new Error(err));
                            });
                        }
                    })
                        .catch(function (err) {
                        reject(new Error("".concat(err.name, ": ").concat(err.message)));
                    });
                }
            }
            else {
                var response = {
                    success: false,
                };
                resolve(response);
            }
        }
        else {
            var response = {
                success: false,
            };
            resolve(response);
        }
    });
}
/**
 * Resolves a Access Token for the Respective Google Credential ID (Incl. Service Accounts)
 *
 * @param { string } credentialID - Credentials ID From Database
 * @param { TGoogleApiScope[] } scopes - Google OAuth API Scopes
 * @returns { Promise<ITokenResolver> } - Resolves a Token to use in Google API
 */
function default_1(credentialID, scopes) {
    return new Promise(function (resolve, reject) {
        getAllTokens(credentialID, scopes)
            .then(function (credentialData) {
            checkTokenRefreshit(credentialData, scopes)
                .then(function (validTokens) {
                if (validTokens.tokens) {
                    serviceAccountTokenHandler(credentialData, scopes)
                        .then(function (serviceTokens) {
                        if (validTokens.tokens) {
                            if (serviceTokens) {
                                var response = {
                                    success: true,
                                    tokens: __spreadArray(__spreadArray([], validTokens.tokens.access.normal, true), serviceTokens, true),
                                };
                                resolve(response);
                            }
                            else {
                                var response = {
                                    success: true,
                                    tokens: validTokens.tokens.access.normal,
                                };
                                resolve(response);
                            }
                        }
                        else {
                            reject(new Error('No Possible Tokens Found or Generated'));
                        }
                    })
                        .catch(function () {
                        reject(new Error('Error While Fetching Service Account Tokens'));
                    });
                }
                else {
                    reject(new Error('No Tokens Found'));
                }
            })
                .catch(function (err) {
                reject(new Error(err));
            });
        })
            .catch(function (err) {
            reject(err);
        });
    });
}
exports.default = default_1;
