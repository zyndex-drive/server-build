"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var statics_1 = __importDefault(require("./statics"));
var plugins_1 = require("../../plugins/db/plugins");
var schema = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.Schema.Types.ObjectId,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    alias: {
        type: String,
        required: true,
    },
    smtp: {
        url: {
            type: String,
            required: true,
        },
        port: {
            type: Number,
            required: true,
        },
    },
    imap: {
        url: {
            type: String,
            required: true,
        },
        port: {
            type: Number,
            required: true,
        },
    },
    dkim_key: {
        type: String,
        required: true,
        encrypt: true,
    },
});
schema.plugin((0, plugins_1.cryptoPlugin)());
exports.default = (0, statics_1.default)(schema);
