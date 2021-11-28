"use strict";
/**
 * @file Policy Definition File
 * @description Policies Related to Modifying Organisation Policies
 * @module - Global Setitngs
 * @author Sudharshan TK
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.policies_edit = void 0;
var mongoose_1 = require("mongoose");
var objectID = function (num) { return mongoose_1.Types.ObjectId("pol-policy@".concat(num)); };
exports.policies_edit = {
    _id: objectID('1'),
    name: 'Edit Policies',
    message: 'Enable Editing of Organisation Policies',
    global_flag: true,
};
