"use strict";
/**
 * @file Global Settings Definition File
 * @description Describes different Global Settings for the Organisation
 * @author Sudharshan TK
 *
 * Note: This Will be used only at the time of First Setup
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultSmtpMailer = exports.defaultSmtpProvider = exports.maxSessions = exports.otpVerification = exports.mailing = exports.tmdbFlag = exports.upgradeRequests = exports.userRequests = void 0;
var mongoose_1 = require("mongoose");
var objectID = function (num) { return mongoose_1.Types.ObjectId("settings@".concat(num)); };
var userRequests = function (flag) { return ({
    _id: objectID('001'),
    name: 'Allow User Requests',
    message: 'Enable New User Requests Globally',
    global_flag: flag,
}); };
exports.userRequests = userRequests;
var upgradeRequests = function (flag) { return ({
    _id: objectID('002'),
    name: 'Allow Role Upgrade Requests',
    message: 'Enable Existing User Role Upgrade Requests Globally',
    global_flag: flag,
}); };
exports.upgradeRequests = upgradeRequests;
var tmdbFlag = function (flag) { return ({
    _id: objectID('003'),
    name: 'Allow TMDB Metadata',
    message: 'Enable TMDB Api for Fetching Metadata Globally',
    global_flag: flag,
}); };
exports.tmdbFlag = tmdbFlag;
var mailing = function (flag) { return ({
    _id: objectID('004'),
    name: 'Allow Mailing',
    message: 'Enable Mailing of User Requests, Invites, etc.',
    global_flag: flag,
}); };
exports.mailing = mailing;
var otpVerification = function (flag) { return ({
    _id: objectID('005'),
    name: 'Allow OTP Verify',
    message: 'Require OTP Verification of New Users',
    global_flag: flag,
}); };
exports.otpVerification = otpVerification;
var maxSessions = function (sessions) { return ({
    _id: objectID('006'),
    name: 'Allow OTP Verify',
    message: 'Require OTP Verification of New Users',
    global_flag: sessions,
}); };
exports.maxSessions = maxSessions;
var defaultSmtpProvider = function (provider_id) { return ({
    _id: objectID('007'),
    name: 'Allow OTP Verify',
    message: 'Require OTP Verification of New Users',
    global_flag: provider_id,
    reference: 'SMTPProvider',
}); };
exports.defaultSmtpProvider = defaultSmtpProvider;
var defaultSmtpMailer = function (mailer_id) { return ({
    _id: objectID('008'),
    name: 'Allow OTP Verify',
    message: 'Require OTP Verification of New Users',
    global_flag: mailer_id,
    reference: 'SMTPMailer',
}); };
exports.defaultSmtpMailer = defaultSmtpMailer;
