"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// API
var API_1 = __importDefault(require("../../../../../google/api/drive/about/API"));
// Google Request Method
var helpers_1 = require("../../../../../google/helpers");
// Other Helpers
var fields_1 = __importDefault(require("../../../../../google/api/drive/about/fields"));
var helpers_2 = require("../../../../../google/helpers");
/**
 * Get all Details about User, Drive
 *
 * @param {ITokenDoc} token - Token Document from Database
 * @returns {Promise<IGoogleResponse<IDriveAboutResource>>} - Promise Resolving to Details of User and Drives
 */
function default_1(token) {
    var params = {
        fields: (0, helpers_2.constructFields)(fields_1.default),
    };
    return helpers_1.googleApiRequest.get(API_1.default.get, token, params);
}
exports.default = default_1;
