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
var generators_1 = require("../../plugins/server/generators");
var misc_1 = require("../../plugins/misc");
// Router
var router = express_1.default.Router();
router.post('/add', function (req, res) {
    var _a = req.body, name = _a.name, drive_id = _a.drive_id, credential_id = _a.credential_id;
    if (!(0, misc_1.isUndefined)([name, drive_id, credential_id])) {
        _models_1.Credentials.checkID(credential_id)
            .then(function (idCheck) {
            if (idCheck) {
                var newID = (0, misc_1.objectID)('scope');
                var newScope = {
                    _id: newID,
                    name: name,
                    added_at: Date.now(),
                    drive_id: drive_id,
                    related_to: [credential_id],
                };
                _models_1.Scopes.create(newScope)
                    .then(function (savedDoc) {
                    (0, responses_1.okResponse)(res, savedDoc);
                })
                    .catch(function (err) {
                    (0, responses_1.internalServerError)(res, err.name, err.message);
                });
            }
            else {
                (0, responses_1.notFound)(res, 'Credential ID Not found in the Database, Kindly Send the Correct ID');
            }
        })
            .catch(function (err) {
            (0, responses_1.internalServerError)(res, err.name, err.message);
        });
    }
    else {
        (0, responses_1.badRequest)(res, 'name, drive_id, credential_id', 'Request Body as JSON');
    }
});
router.post('/status', function (req, res) {
    _models_1.Scopes.find({})
        .then(function (scopeDocs) {
        if (scopeDocs.length > 0) {
            (0, responses_1.okResponse)(res, scopeDocs);
        }
        else {
            (0, responses_1.notFound)(res, 'No Scopes Saved or Found in the Database');
        }
    })
        .catch(function (err) {
        (0, responses_1.internalServerError)(res, err.name, err.message);
    });
});
router.post('/reset', function (req, res) {
    _models_1.Scopes.clearAll()
        .then(function (result) {
        (0, responses_1.okResponse)(res, result);
        res.status(200).json(result);
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
