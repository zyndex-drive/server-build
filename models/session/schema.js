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
    ip: {
        type: String,
        required: true,
    },
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    frontend: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Frontend',
        required: true,
    },
    token_secret: {
        type: String,
        required: true,
        unique: true,
        encrypt: true,
    },
    issued_at: {
        type: Number,
        required: true,
        default: Date.now,
    },
});
exports.default = (0, statics_1.default)(schema);
