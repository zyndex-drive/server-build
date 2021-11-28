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
    alias: {
        type: String,
        required: true,
        hash: true,
    },
    client_id: {
        type: String,
        required: true,
        encrypt: true,
    },
    client_secret: {
        type: String,
        required: true,
        encrypt: true,
    },
    redirect_uri: {
        type: String,
        required: true,
        encrypt: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
});
schema.plugin((0, plugins_1.cryptoPlugin)());
schema.plugin((0, plugins_1.hashPlugin)());
exports.default = (0, statics_1.default)(schema);
