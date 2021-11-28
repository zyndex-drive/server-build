"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Models
var _models_1 = require("../../../models");
// Response Handler
var responses_1 = require("../../server/responses");
var NODE_ENV = process.env.NODE_ENV;
/**
 * Checks for the Origin Header and assigns the Cors Header if it is Validated
 *
 * @param {Request} req - Express Request Object
 * @param {Response} res - Express Response Object
 * @param {NextFunction} next - Express Next Function
 */
function corsMiddleware(req, res, next) {
    if (NODE_ENV === 'development') {
        var reqType = req.method;
        var secret = process.env.LOCAL_SECRET;
        if (secret) {
            var headerPass = req.headers['x-local-dev-pass'];
            if (reqType === 'GET') {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
                res.setHeader('Access-Control-Allow-Headers', 'x-local-dev-pass,x-secret-pass,X-Requested-With,content-type, Accept');
                next();
            }
            else {
                if (headerPass) {
                    if (secret === headerPass) {
                        res.setHeader('Access-Control-Allow-Origin', '*');
                        res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
                        res.setHeader('Access-Control-Allow-Headers', 'x-local-dev-pass,x-secret-pass,X-Requested-With,content-type, Accept');
                        next();
                    }
                    else {
                        (0, responses_1.unAuthorized)(res, 'Local Dev Secret is not Matching with the sent pass');
                    }
                }
                else {
                    (0, responses_1.badRequest)(res, 'x-local-dev-pass', 'response headers');
                }
            }
        }
        else {
            (0, responses_1.internalServerError)(res, 'Secret Error', 'Project not Configured for Local Development');
        }
    }
    else {
        _models_1.Frontends.getFrontendUrls()
            .then(function (domains) {
            var allowedDomains = domains.map(function (dom) { return dom.domain; });
            var origin = req.headers.origin;
            if (origin && allowedDomains.indexOf(origin) > -1) {
                res.setHeader('Access-Control-Allow-Origin', origin);
            }
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
            res.setHeader('Access-Control-Allow-Headers', 'x-local-dev-pass,x-secret-pass,X-Requested-With,content-type, Accept');
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            next();
        })
            .catch(function (error) {
            (0, responses_1.internalServerError)(res, error.name, error.message);
        });
    }
}
exports.default = corsMiddleware;
