"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Initialization
var dotenv_1 = __importDefault(require("dotenv"));
// Server
var server_1 = __importDefault(require("./plugins/server"));
var db_1 = __importDefault(require("./plugins/db"));
// Health Check Service
var helpers_1 = require("./plugins/server/helpers");
// Load ENV Variables to the Process
dotenv_1.default.config();
// Start the Health Checker Service
(0, helpers_1.healthCheckService)(server_1.default);
// Create Server and Listen on PORT
var PORT = process.env.PORT;
try {
    server_1.default.listen(PORT || 3000, function () {
        console.log('Server Started');
        console.log('Connecting to Database');
        // Connect to Datbase
        db_1.default.connect()
            .then(function (mongo) {
            if (mongo) {
                console.log('Database Connected');
            }
            else {
                console.log('No Database Url is Found in Environment Variables');
                server_1.default.close();
            }
        })
            .catch(function (err) {
            console.log("".concat(err.name, ": ").concat(err.message));
            server_1.default.close();
        });
    });
    server_1.default.once('error', function (err) {
        console.log('There was an error starting the server in the error listener:', err);
        server_1.default.close();
    });
}
catch (e) {
    console.log('There was an error starting the server:', e);
    server_1.default.close();
}
