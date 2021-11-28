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
 * Lists all Projects in Google Cloud Console
 *
 * @param {ITokenDoc} token - Token Document from Database
 * @returns {Promise<IGoogleResponse<ICloudProjectList>>} - Promise Resolving to Projects List
 */
function default_1(token) {
    return helpers_1.googleApiRequest.get(API_1.default.list, token);
}
exports.default = default_1;
