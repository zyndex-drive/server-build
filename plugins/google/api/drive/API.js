"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var files_1 = require("./files");
var drives_1 = require("./drives");
var about_1 = require("./about");
var permissions_1 = require("./permissions");
/**
 * Google Drive API Routes
 */
exports.default = {
    files: files_1.api,
    drives: drives_1.api,
    about: about_1.api,
    permissions: permissions_1.api,
};
