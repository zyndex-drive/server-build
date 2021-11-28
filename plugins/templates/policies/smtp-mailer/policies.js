"use strict";
/**
 * @file Policy Definition File
 * @description Policies Related to Adding and Modifying SMTP Mailers
 * @module - Smtp mailers
 * @author Sudharshan TK
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.smtp_mailer_rm = exports.smtp_mailer_edit = exports.smtp_mailer_add = void 0;
var mongoose_1 = require("mongoose");
var objectID = function (num) { return mongoose_1.Types.ObjectId("pol-smpm@".concat(num)); };
exports.smtp_mailer_add = {
    _id: objectID('001'),
    name: 'Add SMTP Emails Accounts',
    message: 'Enable Adding of SMTP Emails Accounts to Database',
    global_flag: true,
};
exports.smtp_mailer_edit = {
    _id: objectID('002'),
    name: 'Edit SMTP Emails Accounts',
    message: 'Enable Editing of SMTP Emails Accounts in Database',
    global_flag: true,
};
exports.smtp_mailer_rm = {
    _id: objectID('003'),
    name: 'Remove SMTP Emails Accounts',
    message: 'Enable Removal of SMTP Emails Accounts from Database',
    global_flag: true,
};
