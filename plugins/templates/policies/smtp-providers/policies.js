"use strict";
/**
 * @file Policy Definition File
 * @description Policies Related to Adding and Modifying SMTP Providers
 * @module - Smtp Providers
 * @author Sudharshan TK
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.smtp_provider_rm = exports.smtp_provider_edit = exports.smtp_provider_add = void 0;
var mongoose_1 = require("mongoose");
var objectID = function (num) { return mongoose_1.Types.ObjectId("pol-smpp@".concat(num)); };
exports.smtp_provider_add = {
    _id: objectID('001'),
    name: 'Add SMTP Email Providers',
    message: 'Enable Adding of SMTP Email Providers to Database',
    global_flag: true,
};
exports.smtp_provider_edit = {
    _id: objectID('002'),
    name: 'Edit SMTP Email Providers',
    message: 'Enable Editing of SMTP Email Providers in Database',
    global_flag: true,
};
exports.smtp_provider_rm = {
    _id: objectID('003'),
    name: 'Remove SMTP Email Providers',
    message: 'Enable Removal of SMTP Email Providers from Database',
    global_flag: true,
};
