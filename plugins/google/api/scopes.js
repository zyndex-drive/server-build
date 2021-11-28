"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var scopes_1 = __importDefault(require("./drive/scopes"));
var scopes_2 = __importDefault(require("./iam/scopes"));
/**
 * Consolidated Google Oauth Scopes
 */
exports.default = {
    drive: scopes_1.default,
    iam: scopes_2.default,
};
