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
 * Downloads a File from Drive using Streaming Request
 *
 * @param {ITokenDoc} token - Token Document from Database
 * @param {string} fileId - ID of the Folder or File
 * @returns {GotReturn} - Promise Resolving to File Data
 */
function default_1(token, fileId) {
    var apiUrl = API_1.default.get(fileId);
    var params = {
        alt: 'media',
    };
    return helpers_1.googleApiRequest.stream(apiUrl, token, params);
}
exports.default = default_1;
