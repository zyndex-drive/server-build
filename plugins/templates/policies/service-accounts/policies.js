"use strict";
/**
 * @file Policy Definition File
 * @description Policies Related to Adding and Modifying Service Accounts
 * @module - Service Accounts
 * @author Sudharshan TK
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.sac_rm = exports.sac_edit = exports.sac_add = void 0;
var mongoose_1 = require("mongoose");
var objectID = function (num) { return mongoose_1.Types.ObjectId("pol-saac@".concat(num)); };
exports.sac_add = {
    _id: objectID('001'),
    name: 'Add Service Account',
    message: 'Enable Adding of Service Accounts to Database',
    global_flag: true,
};
exports.sac_edit = {
    _id: objectID('002'),
    name: 'Edit Service Account',
    message: 'Enable Editing of Service Accounts in Database',
    global_flag: true,
};
exports.sac_rm = {
    _id: objectID('003'),
    name: 'Remove Service Account',
    message: 'Enable Removal of Service Accounts from Database',
    global_flag: true,
};
