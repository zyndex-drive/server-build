"use strict";
/**
 * @file Policy Definition File
 * @description Policies Related to Adding and Modifying Sub Roles
 * @module - Role
 * @author Sudharshan TK
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.roles_rm = exports.roles_edit = exports.roles_add = void 0;
var mongoose_1 = require("mongoose");
var objectID = function (num) { return mongoose_1.Types.ObjectId("pol-role@".concat(num)); };
exports.roles_add = {
    _id: objectID('001'),
    name: 'Add Sub Roles',
    message: 'Enable Creating of Sub Roles',
    global_flag: true,
};
exports.roles_edit = {
    _id: objectID('002'),
    name: 'Edit Sub Roles',
    message: 'Enable Editing of Settings related to Sub Roles',
    global_flag: true,
};
exports.roles_rm = {
    _id: objectID('003'),
    name: 'Remove Sub Roles',
    message: 'Enable Removal of Sub Roles',
    global_flag: true,
};
