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
        encrypt: true,
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
    },
    avatar: {
        type: String,
        lowercase: true,
    },
    registered_at: {
        type: Number,
        required: true,
        default: Date.now,
    },
    verified_at: {
        type: Number,
        required: true,
    },
    token_hash: {
        type: String,
        required: true,
        encrypt: true,
    },
    restricted: {
        type: Boolean,
        default: false,
    },
    role: [
        {
            scope: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'Scope',
                required: true,
            },
            role: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'Role',
                required: true,
            },
        },
    ],
    password: {
        type: String,
        hash: true,
    },
    allowed_policies: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Policy',
        },
    ],
    disallowed_policies: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Policy',
        },
    ],
});
schema.plugin((0, plugins_1.cryptoPlugin)());
schema.plugin((0, plugins_1.hashPlugin)());
exports.default = (0, statics_1.default)(schema);
