"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// UUID
var nanoid_1 = require("nanoid");
// API
var API_1 = __importDefault(require("../../../../../google/api/iam/service-account/API"));
// Google Request Method
var helpers_1 = require("../../../../../google/helpers");
// Code
var ALPHAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var NUMS = '0123456789';
var ALPHANUMS = "".concat(ALPHAS).concat(NUMS);
var LENGTH = 6;
var alphaUid = (0, nanoid_1.customAlphabet)(ALPHAS, LENGTH);
var alphaNumUid = (0, nanoid_1.customAlphabet)(ALPHANUMS, LENGTH);
/**
 * Generates a Unique Service Account ID Following the Google Regexp
 *
 * @returns {string} - Unique Service Account ID
 */
function generateAccountId() {
    var firstPart = alphaUid();
    var secondPart = alphaNumUid();
    var thirdPart = alphaNumUid();
    return "".concat(firstPart, "-").concat(secondPart, "-").concat(thirdPart);
}
/**
 * Creates a Service Account in a Particular Project
 *
 * @param {ITokenDoc} token - Token Document from Database
 * @param {string} projectID - Project ID to which service account is to be Created
 * @param {IServiceAccountDetails} serviceAccountDetails - Object Containing Details of the Service Account
 * @returns {Promise<IGoogleResponse<IServiceAccountResource>>} - Promise Resolving to Details of Created Service Account
 */
function default_1(token, projectID, serviceAccountDetails) {
    var uid = generateAccountId();
    var apiUrl = API_1.default.create(projectID);
    var data = {
        accountId: uid,
        serviceAccount: serviceAccountDetails,
    };
    return helpers_1.googleApiRequest.post(apiUrl, token, data);
}
exports.default = default_1;
