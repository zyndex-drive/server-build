"use strict";
/**
 * @file Policy Definition File
 * @description Policies Related to Adding Various Types of Users
 * @module - User[Add]
 * @author Sudharshan TK
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.self_mgr_add = exports.self_mod_add = exports.self_content_mgr_add = exports.mgr_add = exports.mod_add = exports.content_mgr_add = exports.viewer_add = void 0;
var mongoose_1 = require("mongoose");
var objectID = function (num) { return mongoose_1.Types.ObjectId("p-user-a@".concat(num)); };
exports.viewer_add = {
    _id: objectID('001'),
    name: 'Add Viewer',
    message: 'Enable Accepting of Requests for Viewers and its Delegates',
    global_flag: true,
};
exports.content_mgr_add = {
    _id: objectID('002'),
    name: 'Add Content Managers',
    message: 'Enable Accepting of Requests for Content Managers and its Delegates',
    global_flag: true,
};
exports.mod_add = {
    _id: objectID('003'),
    name: 'Add Moderators',
    message: 'Enable Accepting of Requests for Moderators and its Delegates',
    global_flag: true,
};
exports.mgr_add = {
    _id: objectID('004'),
    name: 'Add Managers',
    message: 'Enable Accepting of Requests for Managers and its Delegates',
    global_flag: true,
};
exports.self_content_mgr_add = {
    _id: objectID('005'),
    name: 'Promote to Content Managers',
    message: 'Enable Promoting of Users to Content Managers without their Request and its Delegates',
    global_flag: true,
};
exports.self_mod_add = {
    _id: objectID('006'),
    name: 'Promote to Moderators',
    message: 'Enable Promoting of Users to Moderators without their Request and its Delegates',
    global_flag: true,
};
exports.self_mgr_add = {
    _id: objectID('007'),
    name: 'Promote to Manager',
    message: 'Enable Promoting of Users to Managers without their Request and its Delegates',
    global_flag: true,
};
