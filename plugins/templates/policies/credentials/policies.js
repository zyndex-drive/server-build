"use strict";
/**
 * @file Policy Definition File
 * @description Policies Related to Adding and Modifying Credentials
 * @module - Credentials
 * @author Sudharshan TK
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.creds_rm = exports.creds_edit = exports.creds_add = void 0;
var mongoose_1 = require("mongoose");
var objectID = function (num) { return mongoose_1.Types.ObjectId("pol-cred@".concat(num)); };
exports.creds_add = {
    _id: objectID('001'),
    name: 'Add Credentials to DB',
    message: 'Enable Adding of Credentials from Database',
    global_flag: true,
};
exports.creds_edit = {
    _id: objectID('002'),
    name: 'Edit Credentials in DB',
    message: 'Enable Editing of Credentials from Database',
    global_flag: true,
};
exports.creds_rm = {
    _id: objectID('003'),
    name: 'Remove Credentials from DB',
    message: 'Enable Removal of Credentials from Database',
    global_flag: true,
};
