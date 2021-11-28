"use strict";
/**
 * @file Policy Definition File
 * @description Policies Related to Removing Various Types of Users
 * @module - User[Remove]
 * @author Sudharshan TK
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.mgr_rm = exports.mods_rm = exports.content_mgr_rm = exports.viewer_rm = void 0;
var mongoose_1 = require("mongoose");
var objectID = function (num) { return mongoose_1.Types.ObjectId("p-user-r@".concat(num)); };
exports.viewer_rm = {
    _id: objectID('001'),
    name: 'Remove Viewer',
    message: 'Enable Removal of Viewers and its Delegates',
    global_flag: true,
};
exports.content_mgr_rm = {
    _id: objectID('002'),
    name: 'Remove Content Managers',
    message: 'Enable Removal of Content Managers and Delegates',
    global_flag: true,
};
exports.mods_rm = {
    _id: objectID('003'),
    name: 'Remove Moderators',
    message: 'Enable Removal of Moderators and Delegates',
    global_flag: true,
};
exports.mgr_rm = {
    _id: objectID('004'),
    name: 'Remove Managers',
    message: 'Enable Removal of Managers and Delegates',
    global_flag: true,
};
