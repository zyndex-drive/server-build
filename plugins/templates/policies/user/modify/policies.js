"use strict";
/**
 * @file Policy Definition File
 * @description Policies Related to Modifying Info Related to Various Types of Users
 * @module - User[Modify]
 * @author Sudharshan TK
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.mgr_restrict = exports.mgr_scope = exports.mgr_policies = exports.mods_restrict = exports.mods_scope = exports.mods_policies = exports.content_mgr_restrict = exports.content_mgr_scope = exports.content_mgr_policies = exports.viewer_restrict = exports.viewer_scope = exports.viewer_policies = void 0;
var mongoose_1 = require("mongoose");
var objectID = function (num) { return mongoose_1.Types.ObjectId("p-user-m@".concat(num)); };
exports.viewer_policies = {
    _id: objectID('001'),
    name: 'Edit Policies of Viewer',
    message: 'Enable Granting/Removing Policies to Viewers and its Delegates',
    global_flag: true,
};
exports.viewer_scope = {
    _id: objectID('002'),
    name: 'Edit Scopes of Viewers',
    message: 'Enable Granting/Removing of Scopes to Viewers and its Delegates',
    global_flag: true,
};
exports.viewer_restrict = {
    _id: objectID('003'),
    name: 'Restrict Viewers',
    message: 'Restrict Users and its Delegates',
    global_flag: true,
};
exports.content_mgr_policies = {
    _id: objectID('004'),
    name: 'Edit Policies of Content Manager',
    message: 'Enable Granting/Removing Policies to Content Managers and its Delegates',
    global_flag: true,
};
exports.content_mgr_scope = {
    _id: objectID('005'),
    name: 'Edit Scopes of Content Managers',
    message: 'Enable Granting/Removing of Scopes to Content Managers and its Delegates',
    global_flag: true,
};
exports.content_mgr_restrict = {
    _id: objectID('006'),
    name: 'Restrict Content Managers',
    message: 'Restrict Content Managers and its Delegates',
    global_flag: true,
};
exports.mods_policies = {
    _id: objectID('007'),
    name: 'Edit Policies of Moderators',
    message: 'Enable Granting/Removing Policies to Moderators and its Delegates',
    global_flag: true,
};
exports.mods_scope = {
    _id: objectID('008'),
    name: 'Edit Scopes of Moderators',
    message: 'Enable Granting/Removing of Scopes to Moderators and its Delegates',
    global_flag: true,
};
exports.mods_restrict = {
    _id: objectID('009'),
    name: 'Restrict Moderators',
    message: 'Restrict Moderators and its Delegates',
    global_flag: true,
};
exports.mgr_policies = {
    _id: objectID('010'),
    name: 'Edit Policies of Managers',
    message: 'Enable Granting/Removing Policies to Managers and its Delegates',
    global_flag: true,
};
exports.mgr_scope = {
    _id: objectID('011'),
    name: 'Edit Scopes of Managers',
    message: 'Enable Granting/Removing of Scopes to Managers and its Delegates',
    global_flag: true,
};
exports.mgr_restrict = {
    _id: objectID('012'),
    name: 'Restrict Managers',
    message: 'Restrict Managers and its Delegates',
    global_flag: true,
};
