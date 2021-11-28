"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Axios
var axios_1 = __importDefault(require("../../../axios"));
// Others
var API_1 = __importDefault(require("../../../google/helpers/API"));
/**
 * Revokes a Google Oauth Token (Regresh / Access)
 *
 * @param {string} token - Google Oauth Token to be Revoked
 * @returns {Promise<IInlineResponse<boolean>>} - True / false based on Google Response
 */
function default_1(token) {
    return new Promise(function (resolve, reject) {
        var url = API_1.default.revokeToken;
        var params = "token=".concat(token);
        axios_1.default
            .post(url, params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
            .then(function (response) {
            var returnResp = {
                success: false,
                data: false,
                error: null,
            };
            if (response.status === 200) {
                returnResp.success = true;
                returnResp.data = true;
                resolve(returnResp);
            }
            else {
                resolve(returnResp);
            }
        })
            .catch(function (error) {
            reject(new Error("".concat(error.name, ": ").concat(error.message)));
        });
    });
}
exports.default = default_1;
