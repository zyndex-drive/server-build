"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
var policies_1 = require("./policies");
exports.default = {
    add: policies_1.smtp_provider_add,
    edit: policies_1.smtp_provider_edit,
    remove: policies_1.smtp_provider_rm,
};
exports.map = [policies_1.smtp_provider_add, policies_1.smtp_provider_edit, policies_1.smtp_provider_rm];
