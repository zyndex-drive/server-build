"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var statics_1 = __importDefault(require("./statics"));
var schema = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.Schema.Types.ObjectId,
    },
    name: {
        type: String,
        required: true,
    },
    alias: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['main', 'sub'],
        required: true,
    },
    delgates_from: {
        type: mongoose_1.Schema.Types.ObjectId || null,
        ref: 'Role',
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
    specific_settings: [
        {
            setting: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'GlobalSetting',
            },
            flag: {
                type: String || Boolean || Number,
                required: true,
            },
        },
    ],
});
exports.default = (0, statics_1.default)(schema);
