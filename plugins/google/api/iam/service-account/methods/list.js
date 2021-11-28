"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// API
var API_1 = __importDefault(require("../../../../../google/api/iam/service-account/API"));
// Google Request Method
var helpers_1 = require("../../../../../google/helpers");
/**
 * Lists all Service Tokens in Google Cloud Console
 *
 * @param {ITokenDoc} token - Token Document from Database
 * @param {string} projectID - Project ID to which service accounts are to be fetched
 * @returns {Promise<IGoogleResponse<IServiceAccountList>>} - Promise Resolving to Service Accounts List
 */
function default_1(token, projectID) {
    return helpers_1.googleApiRequest.get(API_1.default.list(projectID), token);
}
exports.default = default_1;
