import React from 'react';
import FooterCouple from '~/assets/images/bg/footer-couple.png';
import QR_HAU from '~/assets/images/wedding/qr_hau.jpg';
import QR_NGOC from '~/assets/images/wedding/qr_ngoc.jpg';
import './Thankyou.sass';

function Thankyou(props) {
    return (
        <div className="thankyou flex-center">
            <img src={FooterCouple} alt="" className="thankyou__frame" />
            <div className="thankyou__qr">
                <div className='flex-center'>Mừng cưới</div>
                <img className="qr__hau" src={QR_HAU} alt="" />
                <img className="qr__ngoc" src={QR_NGOC} alt="" />
            </div>
            <span>Thank you!</span>
        </div>
    );
}

export default Thankyou;
