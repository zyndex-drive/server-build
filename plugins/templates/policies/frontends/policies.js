"use strict";
/**
 * @file Policy Definition File
 * @description Policies Related to Adding and Modifying Frontends
 * @module - Frontends
 * @author Sudharshan TK
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.frontend_rm = exports.frontend_edit = exports.frontend_add = void 0;
var mongoose_1 = require("mongoose");
var objectID = function (num) { return mongoose_1.Types.ObjectId("pol-fend@".concat(num)); };
exports.frontend_add = {
    _id: objectID('001'),
    name: 'Add Frontends',
    message: 'Enable Adding of Frotnends from Database',
    global_flag: true,
};
exports.frontend_edit = {
    _id: objectID('002'),
    name: 'Edit Credentials',
    message: 'Enable Editing of Frontend Details from Database',
    global_flag: true,
};
exports.frontend_rm = {
    _id: objectID('003'),
    name: 'Remove Credentials',
    message: 'Enable Removal of Frontends from Database',
    global_flag: true,
};
