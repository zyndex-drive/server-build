"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
var policies_1 = require("./policies");
exports.default = {
    viewer: policies_1.viewer_rm,
    contentMgr: policies_1.content_mgr_rm,
    mod: policies_1.mods_rm,
    manager: policies_1.mgr_rm,
};
exports.map = [policies_1.viewer_rm, policies_1.content_mgr_rm, policies_1.mods_rm, policies_1.mgr_rm];
