"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HomeController_1 = __importDefault(require("./controllers/HomeController"));
const app = express_1.default();
app.use('/api/home', HomeController_1.default);
app.get;
exports.default = app;
//# sourceMappingURL=app.js.map