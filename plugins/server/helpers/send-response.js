"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Send a Response to Client based on the Status Code
 *
 * @param {Response} res - Express Response Object
 * @param {number} status - HTTP Status Code to be Sent
 * @param {object} data - Data to be sent along with the Response
 */
function default_1(res, status, data) {
    res.status(status).json(data);
}
exports.default = default_1;
