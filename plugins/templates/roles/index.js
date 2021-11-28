"use strict";
/**
 * @file Role Definition File
 * @description Describes different Properties for each Role in the Organisation
 * @author Sudharshan TK
 *
 * Note: This Will be used only at the time of First Setup
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = exports.owner = exports.manager = exports.moderator = exports.contentMgr = exports.viewer = void 0;
var mongoose_1 = require("mongoose");
// policies
var owner_1 = __importDefault(require("./policies-map/owner"));
var manager_1 = __importDefault(require("./policies-map/manager"));
var moderator_1 = __importDefault(require("./policies-map/moderator"));
var content_manager_1 = __importDefault(require("./policies-map/content-manager"));
var objectID = function (num) { return mongoose_1.Types.ObjectId("rol-main@".concat(num)); };
var IDS = {
    viewer: objectID('001'),
    contentMgr: objectID('002'),
    moderator: objectID('003'),
    manager: objectID('004'),
    owner: objectID('005'),
};
exports.viewer = {
    _id: IDS.viewer,
    name: 'Viewer',
    alias: 'Viewer',
    type: 'main',
    parent_role: IDS.contentMgr,
    allowed_policies: [],
};
exports.contentMgr = {
    _id: IDS.contentMgr,
    name: 'Content Manager',
    alias: 'Content Manager',
    type: 'main',
    parent_role: IDS.moderator,
    child_role: exports.viewer._id,
    allowed_policies: content_manager_1.default,
};
exports.moderator = {
    _id: IDS.moderator,
    name: 'Moderator',
    alias: 'Moderator',
    type: 'main',
    parent_role: IDS.owner,
    child_role: IDS.contentMgr,
    allowed_policies: moderator_1.default,
};
exports.manager = {
    _id: IDS.manager,
    name: 'Owner',
    alias: 'Owner',
    type: 'main',
    parent_role: IDS.owner,
    child_role: IDS.moderator,
    allowed_policies: manager_1.default,
};
exports.owner = {
    _id: IDS.owner,
    name: 'Owner',
    alias: 'Owner',
    type: 'main',
    child_role: IDS.manager,
    allowed_policies: owner_1.default,
};
exports.map = [exports.viewer, exports.contentMgr, exports.moderator, exports.owner];
