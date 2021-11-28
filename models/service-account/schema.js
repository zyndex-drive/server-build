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
    project_id: {
        type: String,
        required: true,
    },
    unique_id: {
        type: String,
        required: true,
    },
    private_key: {
        id: {
            type: String,
            required: true,
        },
        key: {
            type: String,
            required: true,
            encrypt: true,
        },
    },
    client: {
        id: {
            type: String,
            required: true,
            encrypt: true,
        },
        email: {
            type: String,
            required: true,
        },
    },
    related_to: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Credential',
        required: true,
    },
});
schema.plugin((0, plugins_1.cryptoPlugin)());
exports.default = (0, statics_1.default)(schema);
