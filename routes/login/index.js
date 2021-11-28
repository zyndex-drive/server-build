"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Initialization
var express_1 = __importDefault(require("express"));
// Routes
var google_1 = __importDefault(require("./google"));
// Router
var router = express_1.default.Router();
// Assign Login Routes
router.use('/google/', google_1.default);
exports.default = router;
