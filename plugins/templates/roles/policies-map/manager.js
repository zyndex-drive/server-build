"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var policies_1 = require("../../../templates/policies");
var policies = [
    policies_1.users.add.accept.contentMgr._id,
    policies_1.users.add.accept.mods._id,
    policies_1.users.add.accept.viewer._id,
    policies_1.users.blacklist.manager._id,
    policies_1.users.blacklist.mods._id,
    policies_1.users.blacklist.viewer._id,
    policies_1.users.modify.contentMgr.policy._id,
    policies_1.users.modify.contentMgr.restrict._id,
    policies_1.users.modify.contentMgr.scope._id,
    policies_1.users.modify.mods.policy._id,
    policies_1.users.modify.mods.restrict._id,
    policies_1.users.modify.mods.scope._id,
    policies_1.users.modify.viewer.policy._id,
    policies_1.users.modify.viewer.restrict._id,
    policies_1.users.modify.viewer.scope._id,
    policies_1.frontends.edit._id,
    policies_1.globalSettings.edit._id,
    policies_1.roles.add._id,
    policies_1.roles.edit._id,
    policies_1.roles.remove._id,
    policies_1.policy.edit._id,
    policies_1.smtpProviders.add._id,
    policies_1.smtpProviders.edit._id,
    policies_1.smtpProviders.remove._id,
    policies_1.smtpMailers.add._id,
    policies_1.smtpMailers.edit._id,
    policies_1.smtpMailers.remove._id,
];
exports.default = policies;
