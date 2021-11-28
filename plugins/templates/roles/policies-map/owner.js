"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var policies_1 = require("../../../templates/policies");
var ownerPolicies = policies_1.map.map(function (policy) { return policy._id; });
exports.default = ownerPolicies;
