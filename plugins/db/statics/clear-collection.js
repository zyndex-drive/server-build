"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * General Function to Clear a Collection by Deleting all the Records
 *
 * @param {Model} model - Mongoose Model
 * @returns {Promise<IInlineResponse<string>>} - Response whether cleared or not
 */
function default_1(model) {
    return new Promise(function (resolve, reject) {
        model
            .deleteMany({})
            .then(function () {
            var response = {
                success: true,
                data: 'Successfully Cleared the Collection',
                error: null,
            };
            resolve(response);
        })
            .catch(function (err) {
            reject(new Error("".concat(err.name, ": ").concat(err.message)));
        });
    });
}
exports.default = default_1;
