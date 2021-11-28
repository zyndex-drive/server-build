"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Initialization
var express_1 = __importDefault(require("express"));
// Middlewares
var middlewares_1 = require("../plugins/server/middlewares");
var first_setup_1 = __importDefault(require("../plugins/server/middlewares/first-setup"));
// Response Handlers
var responses_1 = require("../plugins/server/responses");
// Routes
var first_setup_2 = __importDefault(require("./first-setup"));
var login_1 = __importDefault(require("./login"));
var generators_1 = require("../plugins/server/generators");
// Router
var router = express_1.default.Router();
// Assign Main Routes
router.use('/setup', [first_setup_1.default, middlewares_1.checkSecretPass], first_setup_2.default);
router.use('/login', login_1.default);
// Default Get
router.get('/', function (req, res) {
    (0, responses_1.okResponse)(res, 'Server Successfully Started');
});
// Respond with all the Endpoints in this Route
router.post('/endpoints', function (req, res) {
    return new generators_1.EndpointGenerator(res, router).serve();
});
exports.default = router;
