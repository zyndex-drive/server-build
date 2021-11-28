"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
/**
 * Checks whether DB is Accessible by Checking the Mongoose Connection Status
 *
 * @param {Request} req - Express Request Object
 * @param {Response} res - Express Response Object
 * @param {NextFunction} next - Express Next Function
 */
function dbChecker(req, res, next) {
    var mongoState = mongoose_1.connection.readyState;
    if ([0, 2, 3].includes(mongoState)) {
        var result = {
            status: 500,
            errorname: "Database is ".concat(mongoose_1.STATES[mongoState]),
            message: 'Internal Server Error Related to Database',
        };
        res.status(500).json(result);
    }
    else {
        res.locals.dbcheck = true;
        next();
    }
}
exports.default = dbChecker;
