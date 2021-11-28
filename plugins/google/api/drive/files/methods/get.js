"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// API
var API_1 = __importDefault(require("../../../../../google/api/drive/files/API"));
// Google Request Method
var helpers_1 = require("../../../../../google/helpers");
// Other Helpers
var fields_1 = __importDefault(require("../../../../../google/api/drive/files/fields"));
var helpers_2 = require("../../../../../google/helpers");
/**
 * Gets Details about a File in Google Drive
 *
 * @param {ITokenDoc} token - Token Document from Database
 * @param {string} fileId - ID of the Folder or File
 * @returns {Promise<IGoogleResponse<IDriveFileResource>>} - Promise Resolving to File Resource
 */
function default_1(token, fileId) {
    var params = {
        fields: (0, helpers_2.constructFields)(fields_1.default),
        supportsAllDrives: true,
    };
    var apiUrl = API_1.default.get(fileId);
    return helpers_1.googleApiRequest.get(apiUrl, token, params);
}
exports.default = default_1;
