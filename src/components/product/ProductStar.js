import { useState } from 'react';

export default function ProductStar() {
    const [star, setStar] = useState(0);
    return (
        <div className='product__comment-ratingbox-rating-chose'>
            <div className='product__comment-ratingbox-rating-chose-list'>
                <div className='product__comment-ratingbox-star-chose'>
                    <i style={{ color: star >= 1 ? "#fac917" : '' }} onClick={() => setStar(1)} className="fa-solid fa-star product__comment-ratingbox-star-chose-icon" ></i>
                </div>
                <div className='product__comment-ratingbox-star-chose'>
                    <i style={{ color: star >= 2 ? "#fac917" : '' }} onClick={() => setStar(2)} className="fa-solid fa-star product__comment-ratingbox-star-chose-icon" ></i>
                </div>
                <div className='product__comment-ratingbox-star-chose'>
                    <i style={{ color: star >= 3 ? "#fac917" : '' }} onClick={() => setStar(3)} className="fa-solid fa-star product__comment-ratingbox-star-chose-icon" ></i>
                </div>
                <div className='product__comment-ratingbox-star-chose'>
                    <i style={{ color: star >= 4 ? "#fac917" : '' }} onClick={() => setStar(4)} className="fa-solid fa-star product__comment-ratingbox-star-chose-icon" ></i>
                </div>
                <div className='product__comment-ratingbox-star-chose'>
                    <i style={{ color: star >= 5 ? "#fac917" : '' }} onClick={() => setStar(5)} className="fa-solid fa-star product__comment-ratingbox-star-chose-icon" ></i>
                </div>
            </div>
        </div>
    )
}