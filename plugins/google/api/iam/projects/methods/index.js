"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_1 = __importDefault(require("./get"));
var list_1 = __importDefault(require("./list"));
/**
 * IAM - Projects API Methods
 */
exports.default = {
    get: get_1.default,
    list: list_1.default,
};
