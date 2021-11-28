"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndpointGenerator = void 0;
var get_all_routes_1 = __importDefault(require("../helpers/get-all-routes"));
var responses_1 = require("../../server/responses");
/** Identify Endpoints in the Route and Creates a Response */
var EndpointGenerator = /** @class */ (function () {
    /**
     * Creates a Route Containing all the Endpoints in the Server
     *
     * @param {Response} res - Express Response Object
     * @param {IRouter} router - Express Router Object
     */
    function EndpointGenerator(res, router) {
        this.response = res;
        this.router = router;
    }
    /**
     * Serve the Endpoints
     */
    EndpointGenerator.prototype.serve = function () {
        (0, responses_1.okResponse)(this.response, (0, get_all_routes_1.default)(this.router));
    };
    return EndpointGenerator;
}());
exports.EndpointGenerator = EndpointGenerator;
