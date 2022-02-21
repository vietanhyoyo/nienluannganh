import bannerImage from '../../images/banner1.png'
import bannerImage2 from '../../images/canvaBanner2.png'
import bannerImage3 from '../../images/logoicon.png'
import '../../css/banner.css'
import { useState,useRef } from 'react'

function Banner() {
    const banList = useRef(
        [
            <img className='banner__img' src={bannerImage} alt='banner'/>,
            <img className='banner__img' src={bannerImage2} alt='banner'/>,
            <img className='banner__img' src={bannerImage3} alt='banner'/>
        ]
    );
    const [banindex,setBanindex] = useState(0);
    const [ban,setBan] = useState(banList.current[0]);
    const handleNext = () => {
        if(banindex < banList.current.length - 1){
            setBanindex(prev => prev +1);
            setBan(banList.current[banindex]);
            console.log('handleClick');
        }else{
            setBanindex(0);
            setBan(banList.current[banindex]);
            console.log('handleClick0');
        }
    }

    return (
        <div className='banner'>
            <div className='banner__box'>
                {ban}
            </div>
            <div className='banner__button'>
                <div className='banner__btn--left'>
                    <i className='banner__btn__icon fi fi-rr-angle-left'></i>
                </div>
                <div className='banner__btn--right' onClick={handleNext}>
                    <i className='banner__btn__icon fi fi-rr-angle-right'></i>
                </div>
            </div>
        </div>
    );
}

export default Banner;