import bannerImage from '../../images/banner1.png'
import '../../css/banner.css'

function Banner() {
    return (
        <div className='banner'>
            <div>
                <img className='banner__img' src={bannerImage} alt='banner'/>
            </div>
        </div>
    );
}

export default Banner;