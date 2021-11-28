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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Models
var _models_1 = require("../../../../models");
// Others
var API_1 = __importDefault(require("../../../google/helpers/API"));
var misc_1 = require("../../../misc");
var crypto_1 = require("../../../crypto");
var generate_token_1 = require("../../../google/handlers/nac/generate-token");
var stringize_scope_1 = __importDefault(require("../../../google/helpers/stringize-scope"));
// Response Handlers
var responses_1 = require("../../../../plugins/server/responses");
/**
 * Constructs Google Oauth Authorization URL
 *
 * @param {ICredentialsDoc} credentials - Credentials Document from Database
 * @param {TGoogleApiScope[]} scopes - Array of Google Oauth Scopes
 * @param {string} state - State of the app to be passed
 * @returns {string} - Google Oauth User Consent URL
 */
function constructOauthURL(credentials, scopes, state) {
    var encodedClient_id = encodeURIComponent(credentials.client_id);
    var encodedRedirect_uri = encodeURIComponent(credentials.redirect_uri);
    var encodedState = encodeURIComponent(state);
    var scopeParam = (0, stringize_scope_1.default)(scopes);
    var encodedScope_param = encodeURIComponent(scopeParam);
    var params = "client_id=".concat(encodedClient_id, "&redirect_uri=").concat(encodedRedirect_uri, "&response_type=code&scope=").concat(encodedScope_param, "&access_type=offline&state=").concat(encodedState);
    return "".concat(API_1.default.authorize, "?").concat(params);
}
/**
 * Redirect the User to the OAuth Authentication URL
 *
 * @param {Response} res - Express Response Object
 * @param {string} id - Credentials ID
 * @param {TGoogleApiScope[]} scopes - Google API Scopes
 */
function redirectUser(res, id, scopes) {
    _models_1.Credentials.findById(id)
        .then(function (credentials) {
        if (credentials) {
            var state = crypto_1.encrypt.str(String(credentials._id));
            var url = constructOauthURL(credentials, scopes, state);
            res.redirect(url);
        }
        else {
            (0, responses_1.notFound)(res, 'Credential ID Not found in DB, Kindly Recheck');
        }
    })
        .catch(function (err) {
        (0, responses_1.internalServerError)(res, err.name, err.message);
    });
}
/**
 * Saves the Refresh Token and Access Token in the Database for Long Term Use
 *
 * @param {ICredentialsDoc} credentials - Credentials Document from Database
 * @param {TGoogleApiScope[]} scopes - Google Oauth API Scopes
 * @param {IGoogTokenResponse} refreshToken - Refresh Token Response
 * @param {IGoogTokenResponse} accessToken - Access Token Response
 * @returns {Promise<ITokenDoc[]>} - Saved Token Documents
 */
function handleTokenSaving(credentials, scopes, refreshToken, accessToken) {
    return new Promise(function (resolve, reject) {
        var now = Date.now();
        Promise.all([(0, misc_1.objectID)('t'), (0, misc_1.objectID)('t')])
            .then(function (_a) {
            var uid1 = _a[0], uid2 = _a[1];
            var tokensArr = [
                {
                    _id: uid1,
                    token: crypto_1.encrypt.str(refreshToken.refresh_token),
                    type: 'refresh',
                    related_to: credentials._id,
                    scopes: scopes,
                    ref_model: 'Credential',
                    expires_at: now + 100 * 365 * 24 * 3600 * 1000,
                    website: 'google.com',
                },
                {
                    _id: uid2,
                    token: crypto_1.encrypt.str(accessToken.access_token),
                    type: 'access',
                    related_to: credentials._id,
                    scopes: scopes,
                    ref_model: 'Credential',
                    expires_at: now + accessToken.expires_in * 1000,
                    website: 'google.com',
                },
            ];
            _models_1.Tokens.insertMany(tokensArr)
                .then(function (tokenDocs) {
                resolve(tokenDocs);
            })
                .catch(function (error) {
                reject(new Error("".concat(error.name, ": ").concat(error.message)));
            });
        })
            .catch(function (e) {
            console.log(e);
            reject(new Error('Error Occured while Generating a UID'));
        });
    });
}
/**
 * Handle Token Generation after User Authorization from Google Oauth
 *
 * @param {Response} res - Express Response Object
 * @param {string} id - Credentials ID
 * @param {string} code - Authorization Code Received from Google Server
 * @param {TGoogleApiScope[]} scopes - Google API Scopes
 */
function handleUserAuthorization(res, id, code, scopes) {
    var _this = this;
    _models_1.Credentials.findById(id)
        .then(function (credentials) { return __awaiter(_this, void 0, void 0, function () {
        var scopeParam, refreshToken, accessToken, savedDocs, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!credentials) return [3 /*break*/, 9];
                    scopeParam = (0, stringize_scope_1.default)(scopes);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    return [4 /*yield*/, (0, generate_token_1.generateRefreshToken)(credentials, scopeParam, code)];
                case 2:
                    refreshToken = _a.sent();
                    if (!refreshToken.refresh_token) return [3 /*break*/, 5];
                    return [4 /*yield*/, (0, generate_token_1.generateAccessToken)(credentials, refreshToken.refresh_token)];
                case 3:
                    accessToken = _a.sent();
                    return [4 /*yield*/, handleTokenSaving(credentials, scopes, refreshToken, accessToken)];
                case 4:
                    savedDocs = _a.sent();
                    (0, responses_1.okResponse)(res, savedDocs);
                    return [3 /*break*/, 6];
                case 5: throw new Error('No Refresh Token Found in Response, Kindly Retry');
                case 6: return [3 /*break*/, 8];
                case 7:
                    e_1 = _a.sent();
                    console.log(e_1);
                    (0, responses_1.internalServerError)(res, 'Token Generation', String(e_1));
                    return [3 /*break*/, 8];
                case 8: return [3 /*break*/, 10];
                case 9:
                    (0, responses_1.notFound)(res, 'Credential ID Not found in DB, Kindly Recheck');
                    _a.label = 10;
                case 10: return [2 /*return*/];
            }
        });
    }); })
        .catch(function (err) {
        (0, responses_1.internalServerError)(res, err.name, err.message);
    });
}
/**
 * Express Handler for Generating Google Oauth Refresh Token and Authorization Token
 *
 * @param {Request} req - Express Request Object
 * @param {Response} res - Express Response Object
 * @param {TGoogleApiScope[]} scopes - Google API Scopes
 */
function default_1(req, res, scopes) {
    var _a = req.query, creds = _a.creds, code = _a.code, state = _a.state;
    console.log(code, creds, String(state));
    if (!code && creds) {
        redirectUser(res, String(creds), scopes);
    }
    else if (code && state) {
        var stringizedCode = String(code);
        var credID = crypto_1.decrypt.str(decodeURIComponent(String(state)));
        handleUserAuthorization(res, credID, stringizedCode, scopes);
    }
    else {
        (0, responses_1.badRequest)(res, 'creds', 'Query Parameters');
    }
}
exports.default = default_1;
