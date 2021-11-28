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
    domain: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    settings: {
        specifics: [
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
        default_mailer: {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'SMTPMailer',
            required: false,
        },
        disallowed_roles: {
            type: mongoose_1.Schema.Types.ObjectId,
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
    },
});
exports.default = (0, statics_1.default)(schema);
