"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = __importDefault(require("../../db"));
var terminus_1 = require("@godaddy/terminus");
/**
 * Close Database Connection Before Termination of Server
 *
 * @returns {[Promise<void>]} Promise - Closes the Database Connection
 */
function onSignal() {
    console.log('server is starting cleanup');
    return db_1.default.close();
}
/**
 * Server Shutdown Message
 *
 * @returns {Promise<void>} Promise - Console logging Shutdown Message
 */
function onShutdown() {
    return new Promise(function (resolve) {
        console.log('cleanup finished, server is shutting down');
        resolve();
    });
}
/**
 * Creates a Health Check Service When the Server is Terminating
 *
 * @param {Server} server - Http Server Object
 */
function healthCheck(server) {
    var options = {
        onSignal: onSignal,
        onShutdown: onShutdown,
    };
    (0, terminus_1.createTerminus)(server, options);
}
exports.default = healthCheck;
