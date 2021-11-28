"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
var dot_prop_1 = __importDefault(require("dot-prop"));
/**
 * Parse SchemType Objects to handle Custom Schema Options
 *
 * @param {Schema} schema - Mongoose Object Schema
 * @param {string} criteria - Custom Option in the Schema to Check
 * @returns {string[]} - Array of path names passing the criteria
 */
function default_1(schema, criteria) {
    var encryptedFields = [];
    schema.eachPath(function (path, schemaType) {
        var keys = Object.keys(schemaType);
        var props = Object.create(schemaType);
        if (keys && props) {
            var options = props['options'];
            if (dot_prop_1.default.has(options, criteria)) {
                encryptedFields.push(path);
            }
        }
    });
    return encryptedFields;
}
exports.default = default_1;
