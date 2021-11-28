"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** API Routes for Managing Permissions in Google Drive */
exports.default = {
    /**
     * Google Drive API for Listing Permissions for a File or Shared Drive
     *
     * @module list
     * @param {string} fileId - The ID of the shared drive / Folder
     * @returns {TDriveUrlType} - API String for list route
     */
    list: function (fileId) {
        return "https://www.googleapis.com/drive/v3/files/".concat(fileId, "/permissions");
    },
    /**
     * Google Drive API for Getting all Permissions for a File or Shared Drive
     *
     * @module get
     * @param {string} fileId - The ID of the File / Folder / shared drive
     * @param {string} permissionId - The ID of the Permission
     * @returns {TDriveUrlType} - API String for get Route
     */
    get: function (fileId, permissionId) {
        return "https://www.googleapis.com/drive/v3/files/".concat(fileId, "/permissions/").concat(permissionId);
    },
    /**
     * Google Drive API for Creating Permissions for a File or Shared Drive
     *
     * @module create
     * @param {string} fileId - The ID of the File / Folder / shared drive
     * @returns {TDriveUrlType} - API String for create route
     */
    create: function (fileId) {
        return "https://www.googleapis.com/drive/v3/files/".concat(fileId, "/permissions");
    },
    /**
     * Google Drive API for Deleting Permissions for a File or Shared Drive
     *
     * @module update
     * @param {string} fileId - The ID of the shared drive
     * @param {string} permissionId - The ID of the Permission
     * @returns {TDriveUrlType} - API String for delete route
     */
    delete: function (fileId, permissionId) {
        return "https://www.googleapis.com/drive/v3/files/".concat(fileId, "/permissions/").concat(permissionId);
    },
    /**
     * Google Drive API for Updating Permissions for a File or Shared Drive
     *
     * @module update
     * @param {string} fileId - The ID of the shared drive
     * @param {string} permissionId - The ID of the Permission
     * @returns {TDriveUrlType} - API String for update route
     */
    update: function (fileId, permissionId) {
        return "https://www.googleapis.com/drive/v3/files/".concat(fileId, "/permissions/").concat(permissionId);
    },
};
