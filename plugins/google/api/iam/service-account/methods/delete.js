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
 * Deletes a Service Account in the Project
 *
 * @param {ITokenDoc} token - Token Document from Database
 * @param {string} projectID - Project ID to which service accounts are to be fetched
 * @param {string} serviceAccEmail - Unique Email or ID of Service Account
 * @returns {Promise<IGoogleResponse>} - Promise Resolving to Deleted Response
 */
function default_1(token, projectID, serviceAccEmail) {
    var apiUrl = API_1.default.delete(projectID, serviceAccEmail);
    return helpers_1.googleApiRequest.delete(apiUrl, token);
}
exports.default = default_1;
