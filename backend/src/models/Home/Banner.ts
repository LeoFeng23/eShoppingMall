import {Schema} from "mongoose";
import * as mongoose from "mongoose";

export type BannerType = {
    id: String,
    picUrl: String
}

export class BannerModel {
    // id: String,
    public id: String

    public picUrl: String
}

const bannerScheme = new Schema({
    id: {
        type: String,
        required: true
    },
    picUrl: {
        type: String,
        required: true
    }
})

export const Banner = mongoose.model("Banner", bannerScheme);
