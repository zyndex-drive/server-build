"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearCollection = exports.default = void 0;
var db_1 = require("./db");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(db_1).default; } });
var statics_1 = require("./statics");
Object.defineProperty(exports, "clearCollection", { enumerable: true, get: function () { return statics_1.clearCollection; } });
