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
    added_at: {
        type: Number,
        required: true,
        default: Date.now,
    },
    drive_id: {
        type: String,
        required: true,
        unique: true,
    },
    disallowed_frontends: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Frontend',
        },
    ],
    related_to: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Credential',
        },
    ],
});
exports.default = (0, statics_1.default)(schema);
