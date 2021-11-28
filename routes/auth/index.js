"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Initialization
var express_1 = __importDefault(require("express"));
// Middlewares
// Response Handlers
var responses_1 = require("../../plugins/server/responses");
// Routes
var policies_1 = __importDefault(require("./policies"));
var roles_1 = __importDefault(require("./roles"));
var generators_1 = require("../../plugins/server/generators");
// Router
var router = express_1.default.Router();
// Assign Auth Routes
router.use('/policies', policies_1.default);
router.use('/roles', roles_1.default);
// Respond with all the Endpoints in this Route
router.post('/endpoints', function (req, res) {
    return new generators_1.EndpointGenerator(res, router).serve();
});
// Default Get
router.get('/', function (req, res) {
    (0, responses_1.okResponse)(res, 'Server Successfully Started');
});
exports.default = router;
