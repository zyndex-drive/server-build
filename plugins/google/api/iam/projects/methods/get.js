"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// API
var API_1 = __importDefault(require("../../../../../google/api/iam/projects/API"));
// Google Request Method
var helpers_1 = require("../../../../../google/helpers");
/**
 * Gets Details about a Project in Google Cloud Console
 *
 * @param {ITokenDoc} token - Token Document from Database
 * @param {string} projectId -   for which Details is to be fetched
 * @returns {Promise<IGoogleResponse<ICloudProjectResource>>} - Promise Resolving to Projects List
 */
function default_1(token, projectId) {
    return helpers_1.googleApiRequest.get(API_1.default.get(projectId), token);
}
exports.default = default_1;
