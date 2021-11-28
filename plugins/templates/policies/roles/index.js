"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
var policies_1 = require("./policies");
exports.default = {
    add: policies_1.roles_add,
    edit: policies_1.roles_edit,
    remove: policies_1.roles_rm,
};
exports.map = [policies_1.roles_add, policies_1.roles_edit, policies_1.roles_rm];
