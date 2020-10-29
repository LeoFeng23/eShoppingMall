"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
const querystring_1 = __importDefault(require("querystring"));
const homeController = express_1.Router();
homeController.get('/banner', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    getHomePageData().then(result => {
        const bannerList = result.data.data.data.focusList.map((item) => {
            const { id, picUrl } = item;
            return {
                id,
                picUrl,
            };
        });
        res.json({
            code: '200',
            data: bannerList,
            message: 'success'
        });
    }).catch(reason => {
        res.json({
            code: '400',
            data: null,
            message: reason
        });
    });
}));
homeController.get('/cate', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    getHomePageData().then(result => {
        let cateList = result.data.data.data.kingKongModule.kingKongList;
        cateList = cateList.slice(1, 9).map((item) => {
            // 从schemeUrl中取出分类的id，然后添加到
            const id = querystring_1.default.parse(item.schemeUrl.split('?')[1]).categoryId;
            const { text, picUrl } = item;
            return {
                text,
                picUrl,
                id
            };
        });
        res.json({
            code: '200',
            // 略去第一个和最后一个无关分类
            data: cateList,
            message: 'success'
        });
    }).catch(reason => {
        res.json({
            code: '400',
            data: null,
            message: reason
        });
    });
}));
const homeData = {
    data: null,
    expireTime: 0
};
const getHomePageData = () => __awaiter(void 0, void 0, void 0, function* () {
    //判断主页数据是否过期
    if (homeData.expireTime < Date.now()) {
        const data = yield axios_1.default.get(`http://m.you.163.com/xhr/index.json`, {
            params: {
                '__timestamp': Date.now()
            }
        });
        const expireTime = new Date();
        //缓存主页数据一小时
        expireTime.setHours(expireTime.getHours() + 1);
        homeData.data = data;
        homeData.expireTime = expireTime.getTime();
    }
    return homeData.data;
});
exports.default = homeController;
//# sourceMappingURL=HomeController.js.map