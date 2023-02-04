import { useRef } from 'react';
import useIsInViewport from '~/hooks/useIsInViewPort';
import SecTitleFlower from '~/assets/images/bg/sec-title-flower.png';
import DSC_0969_min from '~/assets/images/wedding/DSC_0969-min.jpg';
import DSC_0976_min from '~/assets/images/wedding/DSC_0976-min.jpg';
import './BrideGroom.sass';

function BrideGroom({ name }) {
    const viewRef = useRef(null);
    const isInViewPort = useIsInViewport(viewRef, true);
    return (
        <div name={name} className={`bridegroom flex-center ${isInViewPort && 'active'}`}>
            <img src={SecTitleFlower}></img>
            <div className="bridegroom__title">Cô dâu & Chú rể</div>
            <div className="bridegroom__desc">
                Tình yêu là điều kiện trong đó hạnh phúc của người khác là điều cần thiết cho chính bạn.
            </div>
            <div ref={viewRef}></div>
            <div className="bridegroom__box">
                <div
                    className="bridegroom__item"
                    style={{
                        '--delay': '0s',
                    }}
                >
                    <img src={DSC_0969_min} className="bridegroom__item-img"></img>
                </div>
                <div
                    className="bridegroom__item text"
                    style={{
                        '--delay': '0.8s',
                    }}
                >
                    <div className="bridegroom__bridge">Cô dâu</div>
                    <div className="bridegroom__bridge-name">Trịnh Hồng Ngọc</div>
                </div>
                <div
                    className="bridegroom__item text"
                    style={{
                        '--delay': '1.6s',
                    }}
                >
                    <div className="bridegroom__bridge">Chú rể</div>
                    <div className="bridegroom__bridge-name">Nguyễn Trung Hậu</div>
                </div>
                <div
                    className="bridegroom__item"
                    style={{
                        '--delay': '2.4s',
                    }}
                >
                    <img src={DSC_0976_min} className="bridegroom__item-img"></img>
                </div>
            </div>
        </div>
    );
}

export default BrideGroom;
