import mongoose from 'mongoose'
import {MONGODB_URL, SERVER_ADDRESS, SERVER_PORT} from "./config";
import chalk from "chalk";
import app from "./app";
import * as http from "http";
import * as net from "net";

mongoose.connect(MONGODB_URL, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}).then(
    () => {
        console.log(chalk.green('数据库连接成功'));
        createServer();
    }
).catch(
    () => {
        console.log(chalk.red('数据库连接失败'));
    }
)


const createServer = () => {
    const server = http.createServer(app);
    server.listen(SERVER_PORT, SERVER_ADDRESS, () => {

        console.log(chalk.green(`服务器启动成功:  ${SERVER_ADDRESS}:${SERVER_PORT}`))

        // server.on('connection', (socket: net.Socket) => {
        //     console.log(chalk.green("服务器启动成功:  " + socket.remoteAddress + ":" + socket.remotePort))
        // })

        server.on('error', (error) => {
            console.log(chalk.red('出现了问题： ' + error.message));
        })
    })
}
