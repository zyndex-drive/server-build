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
 * Deletes a File in Google Drive
 *
 * @param {ITokenDoc} token - Token Document from Database
 * @param {string} fileId - ID of the Folder or File
 * @returns {Promise<IGoogleResponse>} - Promise
 */
function default_1(token, fileId) {
    var params = {
        supportsAllDrives: true,
    };
    var apiUrl = API_1.default.delete(fileId);
    return helpers_1.googleApiRequest.delete(apiUrl, token, params);
}
exports.default = default_1;
