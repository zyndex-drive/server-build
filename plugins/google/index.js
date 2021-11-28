"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.oauthHelpers = exports.serviceAccountHandler = exports.normalAccountHandler = exports.oauthScopes = exports.oauthRouteApis = exports.mimeTypes = exports.mimeArray = exports.oauthAuthenticationApis = void 0;
var helpers_1 = require("./helpers");
var helpers_2 = require("./helpers");
Object.defineProperty(exports, "oauthAuthenticationApis", { enumerable: true, get: function () { return helpers_2.api; } });
Object.defineProperty(exports, "mimeArray", { enumerable: true, get: function () { return helpers_2.mimeArray; } });
Object.defineProperty(exports, "mimeTypes", { enumerable: true, get: function () { return helpers_2.mimeTypes; } });
var routes_1 = require("./routes");
Object.defineProperty(exports, "oauthRouteApis", { enumerable: true, get: function () { return routes_1.api; } });
var api_1 = require("./api");
Object.defineProperty(exports, "oauthScopes", { enumerable: true, get: function () { return api_1.scopes; } });
var nac_1 = require("./handlers/nac");
Object.defineProperty(exports, "normalAccountHandler", { enumerable: true, get: function () { return __importDefault(nac_1).default; } });
var sac_1 = require("./handlers/sac");
Object.defineProperty(exports, "serviceAccountHandler", { enumerable: true, get: function () { return __importDefault(sac_1).default; } });
exports.oauthHelpers = {
    resolveToken: helpers_1.resolveToken,
    stringizeScope: helpers_1.stringizeScope,
    constructFields: helpers_1.constructFields,
    createJwtToken: helpers_1.createJwtToken,
    googleApiRequest: helpers_1.googleApiRequest,
};
