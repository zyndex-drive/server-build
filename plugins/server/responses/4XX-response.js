"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = exports.unAuthorized = exports.badRequest = void 0;
var send_response_1 = __importDefault(require("../helpers/send-response"));
/**
 * Send a Bad Request Response to Client
 *
 * @param {Response} res - Express Response Object
 * @param {string} expected - Expected Data which is Missing
 * @param {string} inData - Missing Data in Heirarchy
 */
function badRequest(res, expected, inData) {
    var result = {
        status: 400,
        errorname: 'Bad Request',
        message: "Expected ".concat(expected, " in ").concat(inData),
    };
    (0, send_response_1.default)(res, 400, result);
}
exports.badRequest = badRequest;
/**
 * Send a Unauthorized Response to Client
 *
 * @param {Response} res - Express Response Object
 * @param {string} message - Message to be Sent along with Unauthorized Response
 */
function unAuthorized(res, message) {
    var result = {
        status: 403,
        errorname: 'UnAuthorized',
        message: message,
    };
    (0, send_response_1.default)(res, 400, result);
}
exports.unAuthorized = unAuthorized;
/**
 * Send a 404 Not Found Response to Client
 *
 * @param {Response} res - Express Response Object
 * @param {string} message - Message to be Sent along with Not Found Response
 */
function notFound(res, message) {
    var result = {
        status: 404,
        errorname: 'Not Found',
        message: message,
    };
    (0, send_response_1.default)(res, 400, result);
}
exports.notFound = notFound;
