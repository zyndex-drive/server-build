"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var projects_1 = require("./projects");
var service_account_1 = require("./service-account");
/**
 * IAM API Methods
 */
exports.default = {
    projects: projects_1.methods,
    serviceAccount: service_account_1.methods,
};
