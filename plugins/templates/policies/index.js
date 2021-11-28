"use strict";
/**
 * Note: This Will be used only at the time of First Setup
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = exports.smtpProviders = exports.smtpMailers = exports.serviceAccounts = exports.scopes = exports.roles = exports.policy = exports.globalSettings = exports.frontends = exports.credentials = exports.users = void 0;
var user_1 = require("./user");
var credentials_1 = require("./credentials");
var frontends_1 = require("./frontends");
var global_settings_1 = require("./global-settings");
var policy_1 = require("./policy");
var roles_1 = require("./roles");
var scopes_1 = require("./scopes");
var service_accounts_1 = require("./service-accounts");
var smtp_mailer_1 = require("./smtp-mailer");
var smtp_providers_1 = require("./smtp-providers");
var user_2 = require("./user");
Object.defineProperty(exports, "users", { enumerable: true, get: function () { return __importDefault(user_2).default; } });
var credentials_2 = require("./credentials");
Object.defineProperty(exports, "credentials", { enumerable: true, get: function () { return __importDefault(credentials_2).default; } });
var frontends_2 = require("./frontends");
Object.defineProperty(exports, "frontends", { enumerable: true, get: function () { return __importDefault(frontends_2).default; } });
var global_settings_2 = require("./global-settings");
Object.defineProperty(exports, "globalSettings", { enumerable: true, get: function () { return __importDefault(global_settings_2).default; } });
var policy_2 = require("./policy");
Object.defineProperty(exports, "policy", { enumerable: true, get: function () { return __importDefault(policy_2).default; } });
var roles_2 = require("./roles");
Object.defineProperty(exports, "roles", { enumerable: true, get: function () { return __importDefault(roles_2).default; } });
var scopes_2 = require("./scopes");
Object.defineProperty(exports, "scopes", { enumerable: true, get: function () { return __importDefault(scopes_2).default; } });
var service_accounts_2 = require("./service-accounts");
Object.defineProperty(exports, "serviceAccounts", { enumerable: true, get: function () { return __importDefault(service_accounts_2).default; } });
var smtp_mailer_2 = require("./smtp-mailer");
Object.defineProperty(exports, "smtpMailers", { enumerable: true, get: function () { return __importDefault(smtp_mailer_2).default; } });
var smtp_providers_2 = require("./smtp-providers");
Object.defineProperty(exports, "smtpProviders", { enumerable: true, get: function () { return __importDefault(smtp_providers_2).default; } });
exports.map = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], user_1.map, true), credentials_1.map, true), frontends_1.map, true), global_settings_1.map, true), policy_1.map, true), roles_1.map, true), scopes_1.map, true), service_accounts_1.map, true), smtp_mailer_1.map, true), smtp_providers_1.map, true);
