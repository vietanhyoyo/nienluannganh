import bannerImage from '../../images/banner1.png'
import bannerImage2 from '../../images/canvaBanner2.png'
import bannerImage3 from '../../images/banner3.png'
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
            setBanindex(banindex +1);
            setBan(banList.current[banindex + 1]);
            console.log(banindex);
        }else{
            setBanindex(0);
            setBan(banList.current[0]);
            console.log(banindex + ' - ' + banList.current.length);
        }
    }
    const handlePrev = () => {
        if(banindex > 0){
            setBanindex(banindex -1);
            setBan(banList.current[banindex -1]);
            console.log(banindex);
        }else{
            setBanindex(banList.current.length - 1);
            setBan(banList.current[banList.current.length - 1]);
            console.log(banindex + ' - ' + banList.current.length);
        }
    }

    return (
        <div className='banner'>
            <div className='banner__box'>
                {ban}
            </div>
            <div className='banner__button'>
                <div className='banner__btn--left' onClick={handlePrev}>
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