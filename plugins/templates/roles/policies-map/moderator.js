"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var policies_1 = require("../../../templates/policies");
var policies = [
    policies_1.users.add.accept.contentMgr._id,
    policies_1.users.add.accept.viewer._id,
    policies_1.users.blacklist.manager._id,
    policies_1.users.blacklist.viewer._id,
    policies_1.users.modify.contentMgr.policy._id,
    policies_1.users.modify.contentMgr.restrict._id,
    policies_1.users.modify.contentMgr.scope._id,
    policies_1.users.modify.viewer.policy._id,
    policies_1.users.modify.viewer.restrict._id,
    policies_1.users.modify.viewer.scope._id,
];
exports.default = policies;
