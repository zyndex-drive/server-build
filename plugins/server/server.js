"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Initialization
var http_1 = __importDefault(require("http"));
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
var x_xss_protection_1 = __importDefault(require("x-xss-protection"));
// Middlewares
var dbchecker_1 = __importDefault(require("../server/middlewares/dbchecker"));
var cors_1 = __importDefault(require("../server/middlewares/cors"));
// Router
var _routes_1 = __importDefault(require("../../routes"));
// Express config
var app = (0, express_1.default)();
app.use(express_1.default.json({ limit: '50kb' }));
app.use((0, helmet_1.default)());
app.use((0, x_xss_protection_1.default)());
app.use((0, express_mongo_sanitize_1.default)());
app.use([dbchecker_1.default, cors_1.default]);
// Use the Router Config from Routes
app.use('/', _routes_1.default);
// Create http server from express
var server = http_1.default.createServer(app);
// Export Server
exports.default = server;
