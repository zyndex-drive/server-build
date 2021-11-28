"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
var policies_1 = require("./policies");
var policies_2 = require("./policies");
exports.default = {
    accept: {
        viewer: policies_1.viewer_add,
        contentMgr: policies_1.content_mgr_add,
        mods: policies_1.mod_add,
        manager: policies_1.mgr_add,
    },
    promote: {
        contentMgr: policies_2.self_content_mgr_add,
        mods: policies_2.self_mod_add,
        manager: policies_2.self_mgr_add,
    },
};
exports.map = [
    policies_1.viewer_add,
    policies_1.content_mgr_add,
    policies_1.mod_add,
    policies_1.mgr_add,
    policies_2.self_content_mgr_add,
    policies_2.self_mod_add,
    policies_2.self_mgr_add,
];
