import { useRef } from 'react';
import InvitationLeft from '~/assets/images/bg/invitation-left-img.png';
import InvitationRight from '~/assets/images/bg/invitation-right-image.png';
import HeartIcon from '~/assets/images/header/heart.png';
import AppButton from '~/components/atomic/AppButton';
import useIsInViewport from '~/hooks/useIsInViewPort';
import Calendar from '../Calendar';
import './Wishes.sass';

function Wishes(props) {
    const viewRef = useRef(null);
    const isInViewPort = useIsInViewport(viewRef, true);
    return (
        <div name="wishes" className={`wishes flex-center ${isInViewPort && 'active'}`}>
            <div className="flex-center">
                <div
                    className="wishes__container"
                    style={{
                        '--delay': '0s',
                    }}
                >
                    <div className="wishes__box flex-center">
                        <div className="wishes__people">
                            Trung Hậu{'  '}
                            <img
                                src={HeartIcon}
                                style={{
                                    width: '38px',
                                }}
                                className="banner__heart"
                            ></img>
                            {'  '}
                            Hồng Ngọc
                        </div>
                        <div className="wishes__desc">
                            Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng tôi có thêm một niềm hạnh phúc!
                            <div ref={viewRef}></div>
                        </div>
                    </div>
                    <img className="wishes__image left" src={InvitationLeft}></img>
                </div>
                <div
                    style={{
                        position: 'relative',
                        '--delay': '0.8s',
                    }}
                    className="wishes__calendar"
                >
                    <Calendar />
                    <img className="wishes__image right" src={InvitationRight}></img>
                </div>
            </div>
            <div
                className="wishes__confirm"
                style={{
                    position: 'relative',
                    '--delay': '1.6s',
                }}
            >
                <AppButton
                    onClick={() => {
                        let a = document.createElement('a');
                        a.target = '_blank';
                        a.href = 'https://forms.gle/h5qaKDAtYrznv8qq6';
                        a.click();
                    }}
                ></AppButton>
            </div>
        </div>
    );
}

export default Wishes;
