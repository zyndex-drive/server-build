"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
var projects_1 = require("./projects");
var service_account_1 = require("./service-account");
/**
 * Google IAM API Routes
 */
exports.api = {
    projects: projects_1.api,
    serviceAccount: service_account_1.api,
};
