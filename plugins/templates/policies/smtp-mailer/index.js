"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
var policies_1 = require("./policies");
exports.default = {
    add: policies_1.smtp_mailer_add,
    edit: policies_1.smtp_mailer_edit,
    remove: policies_1.smtp_mailer_rm,
};
exports.map = [policies_1.smtp_mailer_add, policies_1.smtp_mailer_edit, policies_1.smtp_mailer_rm];
