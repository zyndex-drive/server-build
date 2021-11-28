"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** API Routes for Managing Google IAM - Projects in Google Cloud Console */
exports.default = {
    /**
     * IAM API for Listing Projects in Google Cloud Console
     *
     * @module list
     * @returns {TCloudApiUrlType} - API String for list route
     */
    list: 'https://cloudresourcemanager.googleapis.com/v1/projects',
    /**
     * IAM API for Getting Details about a Project in Google Cloud Console
     *
     * @param {string} projectID - Resource Name of the Project
     * @returns {TCloudApiUrlType} - API String for get Route
     */
    get: function (projectID) {
        return "https://cloudresourcemanager.googleapis.com/v1/projects/".concat(projectID);
    },
};
