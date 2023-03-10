import React, { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import DSC_0557_min from '~/assets/images/wedding/DSC_0557-min.jpg';
import DSC_0706_min from '~/assets/images/wedding/DSC_0706-min.jpg';
import HeartIcon from '~/assets/images/header/heart.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Banner.sass';
import useIsInViewport from '~/hooks/useIsInViewPort';

function Banner({ name }) {
    const bannerRef = useRef(null);
    const isInViewPort = useIsInViewport(bannerRef, true);
    return (
        <div name={name} className="banner flex-center">
            <div ref={bannerRef}></div>
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} showStatus={false}>
                <div className="banner__image flex-center">
                    <img src={DSC_0557_min}/>
                </div>
                <div className="banner__image flex-center">
                    <img src={DSC_0706_min}/>
                </div>
            </Carousel>
            <div className={`banner__intro flex-center ${isInViewPort && 'active'}`}>
                <div className="banner__box flex-center">
                    <div
                        className="banner__name boy"
                        style={{
                            '--delay': '0s',
                        }}
                    >
                        Trung Hậu
                    </div>
                    <img src={HeartIcon} className="banner__heart"></img>
                    <div
                        className="banner__name girl"
                        style={{
                            '--delay': '1s',
                        }}
                    >
                        Hồng Ngọc
                    </div>
                </div>
                <div
                    className="banner__date"
                    style={{
                        '--delay': '2s',
                    }}
                >
                    12/02/2023
                </div>
            </div>
        </div>
    );
}

export default Banner;
