"use strict";
/**
 * @file Policy Definition File
 * @description Policies Related to Blacklisting Various Types of Users
 * @module - User[Blacklist]
 * @author Sudharshan TK
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.mgr_blist = exports.mod_blist = exports.content_mgr_blist = exports.viewer_blist = void 0;
var mongoose_1 = require("mongoose");
var objectID = function (num) { return mongoose_1.Types.ObjectId("p-user-b@".concat(num)); };
exports.viewer_blist = {
    _id: objectID('001'),
    name: 'Blacklist Viewer',
    message: 'Enable Blacklisting of Viewers and its Delegates',
    global_flag: true,
};
exports.content_mgr_blist = {
    _id: objectID('002'),
    name: 'Blacklist Content Managers',
    message: 'Enable Blacklisting of Content Managers and its Delegates',
    global_flag: true,
};
exports.mod_blist = {
    _id: objectID('003'),
    name: 'Blacklist Moderators',
    message: 'Enable Blacklisting of Moderators and its Delegates',
    global_flag: true,
};
exports.mgr_blist = {
    _id: objectID('004'),
    name: 'Blacklist Managers',
    message: 'Enable Blacklisting of Managers and its Delegates',
    global_flag: true,
};
