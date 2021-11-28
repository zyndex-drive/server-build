"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// API
var API_1 = __importDefault(require("../../../../../google/api/drive/permissions/API"));
// Google Request Method
var helpers_1 = require("../../../../../google/helpers");
// Other Helpers
var fields_1 = __importDefault(require("../../../../../google/api/drive/permissions/fields"));
var helpers_2 = require("../../../../../google/helpers");
/**
 * Lists all Permissions for a File / Folder / Shared Drive
 *
 * @param {ITokenDoc} token - Token Document from Database
 * @param {string} fileId - The ID of the File / Folder / Shared Drive
 * @returns {Promise<IGoogleResponse<IPermissionsList>>} - Promise Resolving to Permissions List
 */
function default_1(token, fileId) {
    var params = {
        fields: (0, helpers_2.constructFields)(fields_1.default, 'permissions'),
    };
    var url = API_1.default.list(fileId);
    return helpers_1.googleApiRequest.get(url, token, params);
}
exports.default = default_1;
