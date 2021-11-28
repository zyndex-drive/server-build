"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inValue = function (value, handler) {
    return "".concat(handler, " contains '").concat(value, "'");
};
var notinValue = function (value, handler) {
    return "not ".concat(handler, " contains '").concat(value, "'");
};
var numberValue = function (value, handler) { return "".concat(handler, " ").concat(value); };
var arrayHandler = function (queryArray, handler, func) {
    var query = '';
    for (var i = 0; i < queryArray.length; i++) {
        if (i === queryArray.length - 1) {
            query += func(queryArray[i], handler);
        }
        else {
            query += "".concat(func(queryArray[i], handler), " and ");
        }
    }
    return query;
};
var checknHandle = function (handler, func, prop) {
    if (prop) {
        if (Array.isArray(prop)) {
            var query = arrayHandler(prop, handler, func);
            return query;
        }
        else {
            var query = func(prop, handler);
            return query;
        }
    }
    return false;
};
var boolChecker = function (arrays) {
    var allowedValues = [];
    arrays.forEach(function (value) {
        if (value) {
            allowedValues.push(value);
        }
    });
    return allowedValues;
};
var arrayChecker = function (arrays) {
    var allowedArrays = [];
    arrays.forEach(function (arr) {
        if (arr.length > 0) {
            allowedArrays.push(arr);
        }
    });
    return allowedArrays;
};
var andHandler = function (arrays) {
    var mainQuery = '';
    arrays.forEach(function (mainArr, mainIndex) {
        mainArr.forEach(function (subArray, subIndex) {
            if (arrays.length === 1 && mainArr.length === 1) {
                mainQuery = "".concat(subArray);
            }
            else if (mainIndex === arrays.length - 1 &&
                subIndex === mainArr.length - 1) {
                mainQuery += "".concat(subArray);
            }
            else {
                mainQuery += "".concat(subArray, " and ");
            }
        });
    });
    return mainQuery;
};
/**
 * Constructs a Advanced Drive Search Parameter
 *
 * @param {IDriveFileAdvancedQuery} query - Query Options
 * @returns {string} - Constructed Query String
 */
function default_1(query) {
    var positiveArray = [];
    var negativeArray = [];
    if (query.positive) {
        var positive = query.positive;
        var nameQuery = checknHandle('name', inValue, positive.name);
        var mimeQuery = checknHandle('mimeType', inValue, positive.mimeType);
        var fileExtQuery = checknHandle('fileExtension', inValue, positive.fileExtension);
        var sizeQuery = positive.size ? numberValue(positive.size, 'size') : '';
        positiveArray.push.apply(positiveArray, boolChecker([nameQuery, mimeQuery, fileExtQuery, sizeQuery]));
    }
    if (query.negative) {
        var negative = query.negative;
        var nameQuery = checknHandle('name', notinValue, negative.name);
        var mimeQuery = checknHandle('mimeType', notinValue, negative.mimeType);
        var fileExtQuery = checknHandle('fileExtension', notinValue, negative.fileExtension);
        negativeArray.push.apply(negativeArray, boolChecker([nameQuery, mimeQuery, fileExtQuery]));
    }
    var mainQuery = andHandler(arrayChecker([positiveArray, negativeArray]));
    return mainQuery;
}
exports.default = default_1;
