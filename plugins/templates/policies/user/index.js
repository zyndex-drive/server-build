"use strict";
/**
 * @file Policy Definition File
 * @description All the Policies Related to Users
 * @module - User
 * @author Sudharshan TK
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
var add_1 = __importStar(require("./add"));
var remove_1 = __importStar(require("./remove"));
var modify_1 = __importStar(require("./modify"));
var blacklist_1 = __importStar(require("./blacklist"));
exports.default = { add: add_1.default, remove: remove_1.default, modify: modify_1.default, blacklist: blacklist_1.default };
exports.map = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], add_1.map, true), remove_1.map, true), blacklist_1.map, true), modify_1.map, true);
