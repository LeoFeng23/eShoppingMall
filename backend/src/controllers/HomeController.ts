import {Router, text} from "express";
import axios from 'axios'
import qs from 'querystring'

const homeController = Router();

homeController.get('/banner', async (req, res) => {
    getHomePageData().then(result => {
        const bannerList = result.data.data.data.focusList.map((item: any) => {
            const {id, picUrl} = item;

            return {
                id,
                picUrl,
            }
        });

        res.json({
            code: '200',
            data: bannerList,
            message: 'success'
        })
    }).catch(reason => {
        res.json({
            code: '400',
            data: null,
            message: reason
        })
    });
});

homeController.get('/cate', async (req, res) => {
    getHomePageData().then(result => {
        let cateList = result.data.data.data.kingKongModule.kingKongList;

        cateList = cateList.slice(1, 9).map((item: any) => {
            // 从schemeUrl中取出分类的id，然后添加到
            const id = qs.parse((item.schemeUrl as string).split('?')[1]).categoryId;
            const {text, picUrl} = item;
            return {
                text,
                picUrl,
                id
            }
        })

        res.json({
            code: '200',
            // 略去第一个和最后一个无关分类
            data: cateList,
            message: 'success'
        })
    }).catch(reason => {
        res.json({
            code: '400',
            data: null,
            message: reason
        })
    });
})

interface HomeDataType {
    data: any
    expireTime: number
}

const homeData: HomeDataType = {
    data: null,
    expireTime: 0
}

const getHomePageData = async () => {
    //判断主页数据是否过期
    if (homeData.expireTime < Date.now()) {
        const data = await axios.get(`http://m.you.163.com/xhr/index.json`, {
            params: {
                '__timestamp': Date.now()
            }
        })

        const expireTime = new Date();
        //缓存主页数据一小时
        expireTime.setHours(expireTime.getHours() + 1);
        homeData.data = data;
        homeData.expireTime = expireTime.getTime();
    }

    return homeData.data
}

export default homeController;
