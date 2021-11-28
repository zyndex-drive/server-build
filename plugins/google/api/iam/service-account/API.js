"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** API Routes for Managing Google IAM - Service Accounts */
exports.default = {
    /**
     * IAM API for Creating Service Account
     *
     * @module create
     * @param {string} projectID - Resource Name of the Project Associated with the Service Accounts
     * @returns {TIAMApiUrlType} - API String for Create Route
     */
    create: function (projectID) {
        return "https://iam.googleapis.com/v1/projects/".concat(projectID, "/serviceAccounts");
    },
    /**
     * IAM API for Deleting Service Account
     *
     * @module delete
     * @param {string} projectID - Resource Name of the Project Associated with the Service Accounts
     * @param {string} account - Unique email of Service Account
     * @returns {TIAMApiUrlType} - API String for Delete Route
     */
    delete: function (projectID, account) {
        return "https://iam.googleapis.com/v1/projects/".concat(projectID, "/serviceAccounts/").concat(account);
    },
    /**
     * IAM API for Disabling Service Account
     *
     * @module disable
     * @param {string} projectID - Resource Name of the Project Associated with the Service Accounts
     * @param {string} account - Unique email of Service Account
     * @returns {TIAMApiUrlType} - API String for disable Route
     */
    disable: function (projectID, account) {
        return "https://iam.googleapis.com/v1/projects/".concat(projectID, "/serviceAccounts/").concat(account, ":disable");
    },
    /**
     * IAM API for Enabling Service Account
     *
     * @module enable
     * @param {string} projectID - Resource Name of the Project Associated with the Service Accounts
     * @param {string} account - Unique email of Service Account
     * @returns {TIAMApiUrlType} - API String for enable Route
     */
    enable: function (projectID, account) {
        return "https://iam.googleapis.com/v1/projects/".concat(projectID, "/serviceAccounts/").concat(account, ":enable");
    },
    /**
     * IAM API for Getting Details about Service Account
     *
     * @module get
     * @param {string} projectID - Resource Name of the Project Associated with the Service Accounts
     * @param {string} account - Unique email of Service Account
     * @returns {TIAMApiUrlType} - API String for get Route
     */
    get: function (projectID, account) {
        return "https://iam.googleapis.com/v1/projects/".concat(projectID, "/serviceAccounts/").concat(account);
    },
    /**
     * IAM API for Listing Service Accounts
     *
     * @module list
     * @param {string} projectID - Resource Name of the Project Associated with the Service Accounts
     * @returns {TIAMApiUrlType} - API String for list Route
     */
    list: function (projectID) {
        return "https://iam.googleapis.com/v1/projects/".concat(projectID, "/serviceAccounts");
    },
};
