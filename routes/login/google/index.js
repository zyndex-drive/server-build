"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Initialization
var express_1 = __importDefault(require("express"));
// Google Oauth
var google_1 = require("../../../plugins/google");
// Google API Methods
var api_1 = require("../../../plugins/google/api");
// Google Drive
var google_2 = require("../../../plugins/google");
var _models_1 = require("../../../models");
// Router
var router = express_1.default.Router();
// Google Oauth Login Route
router.get('/auth/', function (req, res) {
    google_1.normalAccountHandler.generateOauth(req, res, __spreadArray(__spreadArray([], google_2.oauthScopes.drive, true), google_2.oauthScopes.iam, true));
});
router.post('/sample/', function (req, res) {
    _models_1.Credentials.find({})
        .then(function (result) {
        google_1.oauthHelpers
            .resolveToken(result[0]._id, __spreadArray(__spreadArray([], google_2.oauthScopes.drive, true), google_2.oauthScopes.iam, true))
            .then(function (result) {
            api_1.iam.projects
                .list(result.tokens[0])
                .then(function (res2) {
                res.json({ res2: res2, result: result });
            })
                .catch(function (err) {
                res.send(err);
            });
        })
            .catch(function (err) {
            res.send(err);
        });
    })
        .catch(function (err) {
        res.send(err);
    });
});
exports.default = router;
