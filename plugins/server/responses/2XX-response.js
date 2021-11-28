"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.okResponse = void 0;
var send_response_1 = __importDefault(require("../helpers/send-response"));
/**
 * Send a OK Response to Client with Data
 *
 * @param {Response} res - Express Response Object
 * @param {object} data - Data to be Sent to Client
 */
function okResponse(res, data) {
    var result = {
        status: 200,
        data: data,
    };
    (0, send_response_1.default)(res, 200, result);
}
exports.okResponse = okResponse;
