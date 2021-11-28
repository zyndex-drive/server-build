"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSecretPass = exports.checkSetupStatus = exports.checkDBStatus = exports.cors = void 0;
var cors_1 = require("./cors");
Object.defineProperty(exports, "cors", { enumerable: true, get: function () { return __importDefault(cors_1).default; } });
var dbchecker_1 = require("./dbchecker");
Object.defineProperty(exports, "checkDBStatus", { enumerable: true, get: function () { return __importDefault(dbchecker_1).default; } });
var first_setup_1 = require("./first-setup");
Object.defineProperty(exports, "checkSetupStatus", { enumerable: true, get: function () { return __importDefault(first_setup_1).default; } });
Object.defineProperty(exports, "checkSecretPass", { enumerable: true, get: function () { return first_setup_1.checkSecretPass; } });
