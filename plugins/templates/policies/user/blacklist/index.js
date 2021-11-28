"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
var policies_1 = require("./policies");
exports.default = {
    viewer: policies_1.viewer_blist,
    contentMgr: policies_1.content_mgr_blist,
    mods: policies_1.mod_blist,
    manager: policies_1.mgr_blist,
};
exports.map = [policies_1.viewer_blist, policies_1.content_mgr_blist, policies_1.mod_blist, policies_1.mgr_blist];
