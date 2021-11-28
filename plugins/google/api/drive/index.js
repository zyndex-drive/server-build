"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.api = exports.scopes = void 0;
var scopes_1 = require("./scopes");
Object.defineProperty(exports, "scopes", { enumerable: true, get: function () { return __importDefault(scopes_1).default; } });
var API_1 = require("./API");
Object.defineProperty(exports, "api", { enumerable: true, get: function () { return __importDefault(API_1).default; } });
var methods_1 = require("./methods");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(methods_1).default; } });
