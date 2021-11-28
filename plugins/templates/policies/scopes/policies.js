"use strict";
/**
 * @file Policy Definition File
 * @description Policies Related to Adding and Modifying Scopes
 * @module - Scope
 * @author Sudharshan TK
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.scope_rm = exports.scope_edit = exports.scope_add = void 0;
var mongoose_1 = require("mongoose");
var objectID = function (num) { return mongoose_1.Types.ObjectId("pol-scop@".concat(num)); };
exports.scope_add = {
    _id: objectID('001'),
    name: 'Add Scopes',
    message: 'Enable Adding of Scopes to Database',
    global_flag: true,
};
exports.scope_edit = {
    _id: objectID('002'),
    name: 'Edit Scopes',
    message: 'Enable Editing of Scopes in Database',
    global_flag: true,
};
exports.scope_rm = {
    _id: objectID('003'),
    name: 'Remove Scopes',
    message: 'Enable Removal of Scopes from Database',
    global_flag: true,
};
