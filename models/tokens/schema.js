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
    token: {
        type: String,
        required: true,
        encrypt: true,
    },
    type: {
        type: String,
        required: true,
    },
    related_to: {
        type: mongoose_1.Schema.Types.ObjectId || String,
        refPath: 'ref_model',
    },
    ref_model: {
        type: String,
        enum: ['Credential', 'ServiceAccount'],
    },
    expires_at: {
        type: Number,
        required: true,
    },
    scopes: [{ type: String, required: true }],
    website: {
        type: String,
        required: true,
    },
    additional_tokens: [
        {
            type: {
                type: String,
            },
            token: {
                type: String,
            },
        },
    ],
});
schema.plugin((0, plugins_1.cryptoPlugin)());
exports.default = (0, statics_1.default)(schema);
