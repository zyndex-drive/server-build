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
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        encrypt: true,
    },
    type: {
        type: String,
        enum: ['gmail', 'others'],
        required: true,
    },
    provider: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'SMTPProvider',
    },
    gmail_data: {
        type: Object,
    },
});
schema.plugin((0, plugins_1.cryptoPlugin)());
exports.default = (0, statics_1.default)(schema);
