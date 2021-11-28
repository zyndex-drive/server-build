"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks the Given Variables whether it is Properly Defined
 *
 * @param {Array} props - Array of Variables to Check for Undefined
 * @returns {boolean} - returns true if all the Variables are properly Defined
 */
function default_1(props) {
    var resultArr = [];
    props.forEach(function (prop) {
        if (prop) {
            if (prop !== null || prop !== undefined) {
                resultArr.push(true);
            }
            else {
                resultArr.push(false);
            }
        }
        else {
            resultArr.push(false);
        }
    });
    if (resultArr.includes(false)) {
        return true;
    }
    return false;
}
exports.default = default_1;
