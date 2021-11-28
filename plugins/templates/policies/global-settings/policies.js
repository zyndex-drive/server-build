"use strict";
/**
 * @file Policy Definition File
 * @description Policies Related to Modifying Global Settings of the Server
 * @module - Global Setitngs
 * @author Sudharshan TK
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.global_settings_edit = void 0;
var mongoose_1 = require("mongoose");
var objectID = function (num) { return mongoose_1.Types.ObjectId("pol-sett@".concat(num)); };
exports.global_settings_edit = {
    _id: objectID('001'),
    name: 'Edit Global Settings',
    message: 'Enable Editing of Global Settings of the Server',
    global_flag: true,
};
