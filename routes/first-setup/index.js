"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Initialization
var express_1 = __importDefault(require("express"));
// Sub Routes
var policies_1 = __importDefault(require("./policies"));
var roles_1 = __importDefault(require("./roles"));
var credentials_1 = __importDefault(require("./credentials"));
var scope_1 = __importDefault(require("./scope"));
var generators_1 = require("../../plugins/server/generators");
// Router
var router = express_1.default.Router();
// Assign Sub Routes to Setup Route
router.use('/policies', policies_1.default);
router.use('/roles', roles_1.default);
router.use('/credentials', credentials_1.default);
router.use('/scopes', scope_1.default);
// Respond with all the Endpoints in the Route
router.post('/endpoints', function (req, res) {
    return new generators_1.EndpointGenerator(res, router).serve();
});
exports.default = router;
