"use strict";
/**
 * Modified Version of Get-routes Npm Package to Support Express Router Object instead of Express App Object
 * Credits to Original Creator
 *
 * @module get-routes npm Package
 * @author Golo Roden <golo.roden@thenativeweb.io>
 * @author Matthias Wagler <matthias.wagler@thenativeweb.io>
 * @author Amin Aghabeiki <amin.aghabeiki@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Disable naming convention because fast_slash comes from Express.
var regexPrefixToString = function (path) {
    if (path.fast_slash) {
        return '';
    }
    var match = /^\/\^((?:\\[$()*+./?[\\\]^{|}]|[^$()*+./?[\\\]^{|}])*)\$\//u.exec(path.toString().replace('\\/?', '').replace('(?=\\/|$)', '$'));
    if (match) {
        // Unescape characters.
        return match[1].replace(/\\(.)/gu, '$1');
    }
    return '[Unknown path]';
};
var getRoutes = function (app) {
    var routes = {
        get: [],
        post: [],
        put: [],
        patch: [],
        delete: [],
    };
    var processMiddleware = function (middleware, prefix) {
        if (prefix === void 0) { prefix = ''; }
        if (middleware.name === 'router' && middleware.handle.stack) {
            for (var _i = 0, _a = middleware.handle.stack; _i < _a.length; _i++) {
                var subMiddleware = _a[_i];
                processMiddleware(subMiddleware, "".concat(prefix).concat(regexPrefixToString(middleware.regexp)));
            }
        }
        if (!middleware.route) {
            return;
        }
        var method = middleware.route.stack[0].method;
        var path = middleware.route.path;
        switch (method) {
            case 'get':
                routes.get.push("".concat(prefix).concat(path));
                break;
            case 'post':
                routes.post.push("".concat(prefix).concat(path));
                break;
            case 'put':
                routes.put.push("".concat(prefix).concat(path));
                break;
            case 'patch':
                routes.patch.push("".concat(prefix).concat(path));
                break;
            case 'delete':
                routes.delete.push("".concat(prefix).concat(path));
                break;
            default:
                throw new Error("Invalid method ".concat(method, "."));
        }
    };
    for (var _i = 0, _a = app.stack; _i < _a.length; _i++) {
        var middleware = _a[_i];
        processMiddleware(middleware);
    }
    return routes;
};
exports.default = getRoutes;
