// @flow
import * as React from 'react';
import {GlobalState} from "../../../../../../store";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBannerList} from '../../../../../../store/actions/Home/HomeAction';

// import {Swiper, SwiperSlide} from 'swiper/react'
import Swiper from "swiper";
import 'swiper/swiper-bundle.css'
// import 'swiper/swiper.scss'
import {createRef, RefObject} from "react";
import {HomeStateType} from "../../../../../../store/reducers/Home/HomeReducer";
import './HomeBanner.scss'

type Props = {
    home: HomeStateType
};
type State = {};

class HomeBannerCom extends React.Component<Props, State> {

    swiperRef: RefObject<any> = createRef()

    render() {
        const {bannerList} = this.props.home
        return (
            <div className="home-banner">
                <div className="swiper-container" ref={this.swiperRef}>
                    <div className="swiper-wrapper">
                        {
                            bannerList && bannerList.length > 0 &&
                            bannerList.map(({id, picUrl}, index) => {
                                return (
                                    <div className="swiper-slide img-container" key={id}>
                                        <img src={picUrl} alt="" className={'slide-img'}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                {/*<Swiper*/}
                {/*    loop*/}
                {/*    autoplay*/}
                {/*    onAutoplay={() => {console.log('play')}}*/}
                {/*    onSwiper={(s) => {*/}
                {/*        console.log(s);*/}
                {/*        s.slideNext();*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <SwiperSlide>Slide 1</SwiperSlide>*/}
                {/*    <SwiperSlide>Slide 2</SwiperSlide>*/}
                {/*    <SwiperSlide>Slide 3</SwiperSlide>*/}
                {/*</Swiper>*/}

            </div>
        );
    };

    swiper: any

    initSwiper() {
        this.swiper = new Swiper(this.swiperRef.current, {
            effect: 'fade',
            loop: true,
            autoplay: true,
            observer: true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents: true,//修改swiper的父元素时，自动初始化swiper

            // loop: true,
            // autoplay: {// 自动滑动
            //     delay: 3000, //3秒切换一次
            //     // stopOnLastSlide: false,
            //     disableOnInteraction: true,//
            // },

            // observer: true,//修改swiper自己或子元素时，自动初始化swiper    重要
            // observeParents: true,//修改swiper的父元素时，自动初始化swiper  重要
        });


    }

    componentDidMount() {
        // this.initSwiper()
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any) {
        if (prevProps.home !== this.props.home) {
            console.log('change')
            this.initSwiper()
            // this.swiper.update();
            // this.swiper.slideTo(0, 1000);
        }
    }

    componentWillUnmount() {

        if (this.swiper.destroy) { // 销毁swiper
            this.swiper.destroy();
            this.swiper = null;
        }
    }

    slide = () => {
        this.swiper.slideNext();
    }

};

export const HomeBanner = connect(
    (state: GlobalState) => {
        return {
            home: state.home
        }
    },
    (dispatch) => {
        return bindActionCreators(getBannerList, dispatch)
    }
)(HomeBannerCom)
