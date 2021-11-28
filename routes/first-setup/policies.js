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
var policies_1 = require("../../plugins/templates/policies");
var generators_1 = require("../../plugins/server/generators");
// Router
var router = express_1.default.Router();
router.post('/add', function (req, res) {
    var docs = [];
    var pushedStatus = [];
    policies_1.map.forEach(function (policy) {
        _models_1.Policies.create(policy)
            .then(function (doc) {
            docs.push(doc);
            pushedStatus.push(true);
        })
            .catch(function (err) {
            console.log(err);
            pushedStatus.push(false);
        });
    });
    if (pushedStatus.includes(false)) {
        (0, responses_1.internalServerError)(res, 'Database', 'Some Internal Error Occured, Not all Records have been Added to Database');
    }
    else {
        (0, responses_1.okResponse)(res, 'Successfully Posted all the Policy Details to Database');
    }
});
router.post('/status', function (req, res) {
    _models_1.Policies.mapCheck()
        .then(function (result) {
        (0, responses_1.okResponse)(res, result);
    })
        .catch(function (error) {
        (0, responses_1.internalServerError)(res, error.name, error.message);
    });
});
router.post('/reset', function (req, res) {
    _models_1.Policies.clearAll()
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
