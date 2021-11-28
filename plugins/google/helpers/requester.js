"use strict";
/* eslint-disable quote-props */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Axios
var axios_1 = __importDefault(require("../../axios"));
var got_1 = __importDefault(require("got"));
// Others
var query_string_1 = __importDefault(require("query-string"));
/**
 * Constructs a Google API Request URL with Params
 *
 * @param { string } url - API URL
 * @param { Object } params - Query Params for the Route
 * @returns { string } - Constructed URL
 */
function constructURL(url, params) {
    if (params) {
        var serialisedParam = query_string_1.default.stringify(params);
        return "".concat(url, "?").concat(serialisedParam);
    }
    else {
        return "".concat(url);
    }
}
/**
 * Constructs Header Object for Google Api Request
 *
 * @param { string } type - get or post Request
 * @param {ITokenDoc} token - Token Document from Database
 * @param {object} headers - Other Headers to be Included
 * @returns {object} - Header Object
 */
function constructHeaders(type, token, headers) {
    if (type === 'get') {
        return __assign({ Authorization: "Bearer ".concat(token.token), Accept: 'application/json' }, headers);
    }
    else {
        return __assign({ Authorization: "Bearer ".concat(token.token), 'Content-Type': 'application/json' }, headers);
    }
}
/**
 * Handles API Response from Google API Request
 *
 * @param {AxiosResponse} response - API Response from the Request
 * @returns {IGoogleResponse} - Modified Response
 */
function handleResponse(response) {
    if (response.status === 200) {
        var funcResponse = {
            success: true,
            data: response.data,
            error: null,
        };
        return funcResponse;
    }
    else {
        var funcResponse = {
            success: false,
            data: undefined,
            error: null,
        };
        return funcResponse;
    }
}
/**
 * Google API Requester and Response Handlers
 */
var googleRequest = {
    /**
     * Makes a GET Google API Request
     *
     * @param {string} api - Google API URL
     * @param {ITokenDoc} token - Relevant Token Document from Database
     * @param {Record<string, string | number | boolean>} params - Data to be Embedded in Request
     * @param {Record<string, string>} headers - Additional Headers to be Sent
     * @returns {Promise<IGoogleResponse>} - Response from the API
     */
    get: function (api, token, params, headers) {
        return new Promise(function (resolve, reject) {
            var url = constructURL(api, params);
            var getHeaders = constructHeaders('get', token, headers);
            axios_1.default
                .get(url, {
                headers: getHeaders,
            })
                .then(function (response) {
                var resp = handleResponse(response);
                resolve(resp);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    },
    /**
     * Makes a POST Google API Request
     *
     * @param {string} api - Google API URL
     * @param {ITokenDoc} token - Relevant Token Document from Database
     * @param {Record<string, string | number | boolean>} data - Data to be sent in Request
     * @param {Record<string, string | number | boolean>} params - params to be attached to URL
     * @param {Record<string, string>} headers - Additional Headers to be Sent
     * @returns {Promise<IGoogleResponse>} - Response from the API
     */
    post: function (api, token, data, params, headers) {
        return new Promise(function (resolve, reject) {
            var url = constructURL(api, params);
            var getHeaders = constructHeaders('post', token, headers);
            axios_1.default
                .post(url, data, {
                headers: getHeaders,
            })
                .then(function (response) {
                var resp = handleResponse(response);
                resolve(resp);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    },
    /**
     * Makes a POST Google API Request
     *
     * @param {string} api - Google API URL
     * @param {ITokenDoc} token - Relevant Token Document from Database
     * @param {Record<string, string | number | boolean>} data - Data to be sent in Request
     * @param {Record<string, string | number | boolean>} params - params to be attached to URL
     * @param {Record<string, string>} headers - Additional Headers to be Sent
     * @returns {Promise<IGoogleResponse>} - Response from the API
     */
    patch: function (api, token, data, params, headers) {
        return new Promise(function (resolve, reject) {
            var url = constructURL(api, params);
            var getHeaders = constructHeaders('post', token, headers);
            axios_1.default
                .patch(url, data, {
                headers: getHeaders,
            })
                .then(function (response) {
                var resp = handleResponse(response);
                resolve(resp);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    },
    /**
     * Makes a DELETE Google API Request
     *
     * @param {string} api - Google API URL
     * @param {ITokenDoc} token - Relevant Token Document from Database
     * @param {Record<string, string | number | boolean>} data - Data to be sent in Request
     * @param {Record<string, string>} headers - Additional Headers to be Sent
     * @returns {Promise<IGoogleResponse>} - Response from the API
     */
    delete: function (api, token, data, headers) {
        return new Promise(function (resolve, reject) {
            var url = constructURL(api);
            var getHeaders = constructHeaders('post', token, headers);
            axios_1.default
                .delete(url, {
                headers: getHeaders,
                data: data,
            })
                .then(function (response) {
                var resp = handleResponse(response);
                resolve(resp);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    },
    /**
     * Makes a Streaming Request to Google API
     *
     * @param {string} api - Google API URL
     * @param {ITokenDoc} token - Relevant Token Document from Database
     * @param {Record<string, string | number | boolean>} params - params to be attached to URL
     * @returns {GotReturn} - Response from the API
     */
    stream: function (api, token, params) {
        var url = constructURL(api, params);
        var getHeaders = constructHeaders('get', token);
        return got_1.default.stream(url, {
            headers: getHeaders,
        });
    },
};
exports.default = googleRequest;
