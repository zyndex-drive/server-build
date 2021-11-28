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
exports.checkSecretPass = void 0;
// Model Imports
var _models_1 = require("../../../models");
// Response Handlers
var responses_1 = require("../../server/responses");
var roles_1 = require("../../templates/roles");
var policies_1 = require("../../templates/policies");
/**
 * Checks the Given DB whether it has any Doc Present and if map is Present, Checks with the map length
 *
 * @param {Model} db - Model to Search the Records
 * @param {map} map - Map to Compare the Records
 * @returns {Promise<boolean>} - Returns whether true or false
 */
function checkDBPresent(db, map) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var collections = db.find({}).exec();
                    collections
                        .then(function (result) {
                        if (result) {
                            if (result.length > 0) {
                                if (map) {
                                    if (map.length === result.length) {
                                        resolve(true);
                                    }
                                    else {
                                        resolve(false);
                                    }
                                }
                                else {
                                    resolve(true);
                                }
                            }
                            else {
                                resolve(false);
                            }
                        }
                        else {
                            reject(new Error('Unknown Error while Querying Collection'));
                        }
                    })
                        .catch(function (e) {
                        reject(new Error("".concat(e.name, ": ").concat(e.message)));
                    });
                })];
        });
    });
}
/**
 * Checks Whether all the Database Collections are Properly Setup and allows the Setup Route
 *
 * @param {Request} req - Express Request Object
 * @param {Response} res - Express Response Object
 * @param {NextFunction} next - Express Next Function
 */
function checkSetupStatus(req, res, next) {
    var promises = [
        checkDBPresent(_models_1.Credentials),
        checkDBPresent(_models_1.Frontends),
        checkDBPresent(_models_1.Policies, policies_1.map),
        checkDBPresent(_models_1.Roles, roles_1.map),
        checkDBPresent(_models_1.GlobalSettings),
        checkDBPresent(_models_1.Scopes),
        checkDBPresent(_models_1.Users),
    ];
    Promise.all(promises)
        .then(function (setups) {
        if (setups.includes(false)) {
            res.locals.setups = true;
            next();
        }
        else {
            res.status(200).json({
                success: true,
                setup: true,
                message: 'All the Collections have been Setup Correctly',
            });
        }
    })
        .catch(function (err) {
        (0, responses_1.internalServerError)(res, err.name, err.message);
    });
}
exports.default = checkSetupStatus;
/**
 * Validates the Given Secret with Environment Secret for Setting Up First Time Data
 *
 * @param {Request} req - Express Request Object
 * @param {Response} res - Express Response Object
 * @param {NextFunction} next - Express NextFunction
 */
function checkSecretPass(req, res, next) {
    var secret = process.env.SECRET;
    if (secret) {
        var headerPass = req.headers['x-secret-pass'];
        if (headerPass && typeof headerPass === 'string') {
            var correctedSecret = secret.toLowerCase();
            var correctedHeaderPass = headerPass.toLowerCase();
            if (correctedHeaderPass === correctedSecret) {
                res.locals.secretcheck = true;
                next();
            }
            else {
                (0, responses_1.unAuthorized)(res, 'Header Secret is Not Matching with the Environment Secret, Kindly Send the Correct Pass');
            }
        }
        else {
            (0, responses_1.badRequest)(res, 'x-secret-pass', 'Request Headers');
        }
    }
    else {
        (0, responses_1.internalServerError)(res, 'Secret Error', 'No Secret Set in the Environment, Kindly Set in Vars');
    }
}
exports.checkSecretPass = checkSecretPass;
