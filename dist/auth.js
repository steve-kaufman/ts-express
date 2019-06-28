"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = __importDefault(require("./Users"));
Users_1.default.sync();
class Auth {
    handleLogin(req, res) {
        console.log(req.body);
        res.send('login not configured... yet :)');
    }
}
exports.default = Auth;
//# sourceMappingURL=auth.js.map