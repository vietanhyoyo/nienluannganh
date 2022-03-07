import { useState } from 'react';

export default function ProductStar(){
    const [star, setStar] = useState(0);
    const stargray = 'fa-solid fa-star product__comment-ratingbox-star-chose-icon';
    const staryellow = 'fa-solid fa-star product__comment-ratingbox-star-chose-icon product__comment-ratingbox-star-chose--yellow'
    return(
        <div className='product__comment-ratingbox-rating-chose'>
        <div className='product__comment-ratingbox-rating-chose-list'>
            <div className='product__comment-ratingbox-star-chose'>
                <i onClick={setStar(1)} className={star  ? staryellow : stargray}></i>
            </div>
            {/* <div className='product__comment-ratingbox-star-chose'>
                <i onClick={setStar(2)} className={(star > 2) ? staryellow : stargray}></i>
            </div>
            <div className='product__comment-ratingbox-star-chose'>
                <i onClick={setStar(3)} className={(star > 3) ? staryellow : stargray}></i>
            </div>
            <div className='product__comment-ratingbox-star-chose'>
                <i onClick={setStar(4)} className={(star > 4) ? staryellow : stargray}></i>
            </div>
            <div className='product__comment-ratingbox-star-chose'>
                <i onClick={setStar(5)} className={(star > 5) ? staryellow : stargray}></i>
            </div> */}
        </div>
        <div className='button button-send'>
            Gửi đánh giá
        </div>
    </div>
    )
}