"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const chalk_1 = __importDefault(require("chalk"));
const app_1 = __importDefault(require("./app"));
const http = __importStar(require("http"));
mongoose_1.default.connect(config_1.MONGODB_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(() => {
    console.log(chalk_1.default.green('数据库连接成功'));
    createServer();
}).catch(() => {
    console.log(chalk_1.default.red('数据库连接失败'));
});
const createServer = () => {
    const server = http.createServer(app_1.default);
    server.listen(config_1.SERVER_PORT, config_1.SERVER_ADDRESS, () => {
        console.log(chalk_1.default.green(`服务器启动成功:  ${config_1.SERVER_ADDRESS}:${config_1.SERVER_PORT}`));
        // server.on('connection', (socket: net.Socket) => {
        //     console.log(chalk.green("服务器启动成功:  " + socket.remoteAddress + ":" + socket.remotePort))
        // })
        server.on('error', (error) => {
            console.log(chalk_1.default.red('出现了问题： ' + error.message));
        });
    });
};
//# sourceMappingURL=server.js.map