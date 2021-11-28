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
 * Get all Details about a Service Account
 *
 * @param {ITokenDoc} token - Token Document from Database
 * @param {string} projectID - Project ID to which service accounts are to be fetched
 * @param {string} serviceAccEmail - Unique Email or ID of Service Account
 * @returns {Promise<IGoogleResponse<IServiceAccountResource>>} - Promise Resolving to Details of Service Account
 */
function default_1(token, projectID, serviceAccEmail) {
    return helpers_1.googleApiRequest.get(API_1.default.get(projectID, serviceAccEmail), token);
}
exports.default = default_1;
