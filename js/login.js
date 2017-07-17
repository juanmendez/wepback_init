"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login = function (username, password) {
    if (username === "admin" && password === "radical") {
        return "login is correct";
    }
    else {
        return "incorrect login";
    }
};
exports.login = login;
//# sourceMappingURL=login.js.map