"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
var policies_1 = require("./policies");
var policies_2 = require("./policies");
var policies_3 = require("./policies");
var policies_4 = require("./policies");
exports.default = {
    viewer: {
        policy: policies_1.viewer_policies,
        scope: policies_1.viewer_scope,
        restrict: policies_1.viewer_restrict,
    },
    contentMgr: {
        policy: policies_2.content_mgr_policies,
        scope: policies_2.content_mgr_scope,
        restrict: policies_2.content_mgr_restrict,
    },
    mods: {
        policy: policies_3.mods_policies,
        scope: policies_3.mods_scope,
        restrict: policies_3.mods_restrict,
    },
    manager: {
        policy: policies_4.mgr_policies,
        scope: policies_4.mgr_scope,
        restrict: policies_4.mgr_restrict,
    },
};
var viewers = [policies_1.viewer_policies, policies_1.viewer_scope, policies_1.viewer_restrict];
var contentMgrs = [
    policies_2.content_mgr_policies,
    policies_2.content_mgr_scope,
    policies_2.content_mgr_restrict,
];
var mods = [policies_3.mods_policies, policies_3.mods_scope, policies_3.mods_restrict];
var mgrs = [policies_4.mgr_policies, policies_4.mgr_scope, policies_4.mgr_restrict];
exports.map = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], viewers, true), contentMgrs, true), mods, true), mgrs, true);
