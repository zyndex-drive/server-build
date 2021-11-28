"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_1 = __importDefault(require("./get"));
var list_1 = __importDefault(require("./list"));
var create_1 = __importDefault(require("./create"));
var update_1 = __importDefault(require("./update"));
exports.default = {
    get: get_1.default,
    list: list_1.default,
    create: create_1.default,
    update: update_1.default,
};
