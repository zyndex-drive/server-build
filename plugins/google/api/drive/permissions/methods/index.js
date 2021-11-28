"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = __importDefault(require("./list"));
var get_1 = __importDefault(require("./get"));
var create_1 = __importDefault(require("./create"));
var update_1 = __importDefault(require("./update"));
var delete_1 = __importDefault(require("./delete"));
exports.default = {
    list: list_1.default,
    get: get_1.default,
    create: create_1.default,
    update: update_1.default,
    delete: delete_1.default,
};
