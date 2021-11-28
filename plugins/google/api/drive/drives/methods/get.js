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
 * Gets Details about a Shared Drive
 *
 * @param {ITokenDoc} token - Token Document from Database
 * @param {string} driveId - The ID of the Shared Drive
 * @returns {Promise<IGoogleResponse<IDriveResourceType>>} - Promise Resolving to Details
 */
function default_1(token, driveId) {
    var params = {
        fields: (0, helpers_2.constructFields)(fields_1.default),
    };
    return helpers_1.googleApiRequest.get(API_1.default.get(driveId), token, params);
}
exports.default = default_1;
