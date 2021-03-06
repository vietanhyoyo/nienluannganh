import bannerImage from '../../images/banner1.png'
import bannerImage2 from '../../images/bannn2.png'
import bannerImage3 from '../../images/banner3.png'
import '../../css/banner.css'
import { useState, useRef, useEffect } from 'react'

function Banner() {
    const banList = useRef(
        [
            <img className='banner__img' src={bannerImage} alt='banner' />,
            <img className='banner__img' src={bannerImage2} alt='banner' />,
            <img className='banner__img' src={bannerImage3} alt='banner' />
        ]
    );
    const [banindex, setBanindex] = useState(0);
    const [ban, setBan] = useState(banList.current[0]);

    const handleSelect = (value) => {
        setBanindex(value);
        setBan(banList.current[value]);
    }
    const handleNext = () => {
        if (banindex < banList.current.length - 1) {
            setBanindex(banindex + 1);
            setBan(banList.current[banindex + 1]);
        } else {
            setBanindex(0);
            setBan(banList.current[0]);
        }
    }
    const handlePrev = () => {
        if (banindex > 0) {
            setBanindex(banindex - 1);
            setBan(banList.current[banindex - 1]);
        } else {
            setBanindex(banList.current.length - 1);
            setBan(banList.current[banList.current.length - 1]);
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    });

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
            <div className='banner__circle'>
                {banList.current.map((ele, index) => {
                    return <div
                        key={index}
                        className={banindex === index ? 'banner__circle--button banner__circle--button--select' : 'banner__circle--button'}
                        onClick={() => handleSelect(index)}></div>
                })}
            </div>
        </div>
    );
}

export default Banner;