"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Initialization
var express_1 = __importDefault(require("express"));
// Response Handlers
var responses_1 = require("../../plugins/server/responses");
// Model
var _models_1 = require("../../models");
// Others
var misc_1 = require("../../plugins/misc");
var generators_1 = require("../../plugins/server/generators");
// Router
var router = express_1.default.Router();
router.post('/add', function (req, res) {
    var _a = req.body, alias = _a.alias, client_id = _a.client_id, client_secret = _a.client_secret, redirect_uri = _a.redirect_uri, email = _a.email;
    if (!(0, misc_1.isUndefined)([alias, client_id, client_secret, redirect_uri, email])) {
        var newID = (0, misc_1.objectID)('c');
        var newCredential = {
            _id: newID,
            alias: alias,
            client_id: client_id,
            client_secret: client_secret,
            redirect_uri: redirect_uri,
            email: email,
        };
        _models_1.Credentials.create(newCredential)
            .then(function (savedCreds) {
            (0, responses_1.okResponse)(res, savedCreds);
        })
            .catch(function (err) {
            (0, responses_1.internalServerError)(res, err.name, err.message);
        });
    }
    else {
        (0, responses_1.badRequest)(res, 'alias, client_id, client_secret, email', 'Request Body');
    }
});
router.post('/reset', function (req, res) {
    _models_1.Credentials.clearAll()
        .then(function (result) {
        (0, responses_1.okResponse)(res, result);
    })
        .catch(function (error) {
        (0, responses_1.internalServerError)(res, error.name, error.message);
    });
});
// Respond with all the Endpoints in this Route
router.post('/endpoints', function (req, res) {
    return new generators_1.EndpointGenerator(res, router).serve();
});
exports.default = router;
