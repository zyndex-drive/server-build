"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var schema_1 = __importDefault(require("./schema"));
exports.default = (0, mongoose_1.model)('Session', schema_1.default);
