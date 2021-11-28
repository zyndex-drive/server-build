"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// API
var API_1 = __importDefault(require("../../../../../google/api/drive/drives/API"));
// Google Request Method
var helpers_1 = require("../../../../../google/helpers");
// Other Helpers
var fields_1 = __importDefault(require("../../../../../google/api/drive/drives/fields"));
var helpers_2 = require("../../../../../google/helpers");
/**
 * Lists all Shared Drives in the Respective Account
 *
 * @param {ITokenDoc} token - Token Document from Database
 * @param {string} pageToken - Drive API pagination token (optional)
 * @param {string} q - Search String (optional)
 * @returns {Promise<IGoogleResponse>} - Promise Resolving to Drives List
 */
function default_1(token, pageToken, q) {
    var params = {
        fields: (0, helpers_2.constructFields)(fields_1.default, 'drives'),
        pageToken: pageToken ? pageToken : '',
        q: q ? q : '',
    };
    return helpers_1.googleApiRequest.get(API_1.default.list, token, params);
}
exports.default = default_1;
