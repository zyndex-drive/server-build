"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scopes = exports.drive = exports.iam = void 0;
var iam_1 = require("./iam");
Object.defineProperty(exports, "iam", { enumerable: true, get: function () { return __importDefault(iam_1).default; } });
var drive_1 = require("./drive");
Object.defineProperty(exports, "drive", { enumerable: true, get: function () { return __importDefault(drive_1).default; } });
var scopes_1 = require("./scopes");
Object.defineProperty(exports, "scopes", { enumerable: true, get: function () { return __importDefault(scopes_1).default; } });
