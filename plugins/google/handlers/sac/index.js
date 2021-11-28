"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var generate_oauth_1 = __importDefault(require("./generate-oauth"));
var generate_token_1 = require("./generate-token");
/**
 * Google Service Account Oauth Handlers
 */
exports.default = {
    generateOauth: generate_oauth_1.default,
    generateAccessToken: generate_token_1.generateAccessToken,
};
