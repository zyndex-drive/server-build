"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.badGateway = exports.internalServerError = void 0;
var send_response_1 = __importDefault(require("../helpers/send-response"));
/**
 * Send a Internal Server Error Response to the Client
 *
 * @param {Response} res - Express Response Object
 * @param {string} [errorname] Message to be Sent along with 5XX Response (Optional)
 * @param {string} [message] - Error Data to be Sent (Optional)
 */
function internalServerError(res, errorname, message) {
    var result = {
        status: 500,
        errorname: errorname ? errorname : 'Internal Server Error',
        message: message ? message : 'Unknown',
    };
    (0, send_response_1.default)(res, 500, result);
}
exports.internalServerError = internalServerError;
/**
 * Send a Bad Gateway Error Response to Client
 *
 * @param {Response} res - Express Response Object
 */
function badGateway(res) {
    var result = {
        status: 502,
        errorname: 'Bad Gateway',
        message: 'Received an Invalid response from the upstream server.',
    };
    (0, send_response_1.default)(res, 502, result);
}
exports.badGateway = badGateway;
