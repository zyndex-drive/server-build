"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Initialization
var express_1 = __importDefault(require("express"));
// Response Handlers
var responses_1 = require("../../../plugins/server/responses");
// Others
var roles_1 = require("../../../plugins/templates/roles");
var generators_1 = require("../../../plugins/server/generators");
// Router
var router = express_1.default.Router();
router.post('/list', function (req, res) {
    (0, responses_1.okResponse)(res, roles_1.map);
});
// Respond with all the Endpoints in this Route
router.post('/endpoints', function (req, res) {
    return new generators_1.EndpointGenerator(res, router).serve();
});
exports.default = router;
