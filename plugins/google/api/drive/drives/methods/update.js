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
 * Updates Details about a Shared Drive
 *
 * @param {ITokenDoc} token - Token Document from Database
 * @param {string} driveId - The ID of the Shared Drive
 * @param {Partial<IDriveResourceDetails>} drivePatchData - Drive Data to be Updated
 * @returns {Promise<IGoogleResponse<IDriveResourceType>>} - Promise Resolving to Details
 */
function default_1(token, driveId, drivePatchData) {
    var params = {
        fields: (0, helpers_2.constructFields)(fields_1.default),
    };
    var url = API_1.default.update(driveId);
    return helpers_1.googleApiRequest.patch(url, token, drivePatchData, params);
}
exports.default = default_1;
