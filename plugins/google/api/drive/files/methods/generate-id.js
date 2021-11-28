"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// API
var API_1 = __importDefault(require("../../../../../google/api/drive/files/API"));
// Google Request Method
var helpers_1 = require("../../../../../google/helpers");
/**
 * Generate IDs for Uploading and Copying Files
 *
 * @param {ITokenDoc} token - Token Document from Database
 * @returns {Promise<IGoogleResponse<IDriveIDResponse>>} - Promise Resolving to IDs
 */
function default_1(token) {
    var params = {
        count: 5,
        space: 'drive',
        type: 'files',
    };
    var apiUrl = API_1.default.generateId;
    return helpers_1.googleApiRequest.get(apiUrl, token, params);
}
exports.default = default_1;
