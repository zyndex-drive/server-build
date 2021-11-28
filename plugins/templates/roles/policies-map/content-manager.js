"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var policies_1 = require("../../../templates/policies");
var policies = [
    policies_1.users.add.accept.viewer._id,
    policies_1.users.blacklist.viewer._id,
    policies_1.users.modify.viewer.policy._id,
    policies_1.users.modify.viewer.restrict._id,
    policies_1.users.modify.viewer.scope._id,
    policies_1.frontends.edit._id,
];
exports.default = policies;
