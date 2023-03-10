import React from 'react';
import HeartIcon from '~/assets/images/header/heart.png';
import './Intro.sass';

function Intro(props) {
    return (
        <div className="intro flex-center">
            <div className="intro__box flex-center">
                <div className="intro__name boy">Trung Hậu</div>
                <img src={HeartIcon} className="intro__heart"></img>
                <div className="intro__name girl"> Hồng Ngọc</div>
            </div>
            <div className="intro__desc">Just Married</div>
        </div>
    );
}

export default Intro;
