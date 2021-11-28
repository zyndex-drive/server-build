"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
var iam_1 = require("./api/iam");
var drive_1 = require("./api/drive");
/**
 * Comprehensive Google Outh/Cloud API Routes
 */
exports.api = {
    iam: iam_1.api,
    drives: drive_1.api,
};
