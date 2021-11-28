"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// API
var API_1 = __importDefault(require("../../../../../google/api/drive/files/API"));
// Google Request Method
var helpers_1 = require("../../../../../google/helpers");
// Other Helpers
var handle_query_1 = __importDefault(require("../handle-query"));
var fields_1 = __importDefault(require("../../../../../google/api/drive/files/fields"));
var helpers_2 = require("../../../../../google/helpers");
/**
 * Search Files & Folders in Google Drive
 *
 * @param {ITokenDoc} token - Token Document from Database
 * @param {string} folderId - ID of the Folder or File
 * @param {boolean} scopeCurrentFolder - Restrict Search to Current Folder or not
 * @param {IDriveFileSearchDetails} searchOptions - Additional Options to Search Drive
 * @param {IDriveFileAdvancedQuery} advancedSearchOptions - Advanced Search Options to Filter
 * @returns {Promise<IGoogleResponse<IDriveFileResource>>} - Promise Resolving to List of Files
 */
function default_1(token, folderId, scopeCurrentFolder, searchOptions, advancedSearchOptions) {
    var query = '';
    var searchId = folderId ? folderId : 'root';
    if (scopeCurrentFolder && advancedSearchOptions) {
        query += "'".concat(searchId, "' in parents and ");
        query += "".concat((0, handle_query_1.default)(advancedSearchOptions));
    }
    else if (scopeCurrentFolder) {
        query += "'".concat(searchId, "' in parents");
    }
    else if (advancedSearchOptions) {
        query += "".concat((0, handle_query_1.default)(advancedSearchOptions));
    }
    var params = __assign({ fields: (0, helpers_2.constructFields)(fields_1.default, 'files'), q: query, supportsAllDrives: true }, searchOptions);
    var apiUrl = API_1.default.list;
    return helpers_1.googleApiRequest.get(apiUrl, token, params);
}
exports.default = default_1;
