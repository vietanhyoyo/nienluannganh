import axios from 'axios';
import { useState, useContext } from 'react';
import { LoginContext } from '../../contexts/LoginContext';

export default function ProductStar(props) {
    /**Lấy login Context */
    const loginState = useContext(LoginContext);
    /**Trang thai ngoi sao */
    const [star, setStar] = useState(0);
    /**Su kien click ngoi sao */
    const handleClick = value => {
        if (loginState.iduser === null) {
            alert('Bạn cần đăng nhập để có thể đánh giá!');
        }
        else {
            const str = window.prompt('Hãy ghi ý kiến đánh giá của bạn!');
            if (str.length > 1) {
                axios.post('/evaluate/themdanhgia', {
                    idUser: loginState.iduser,
                    idProduct: props.idProduct,
                    text: str,
                    value: value
                })
                    .then(res => console.log(res.data));
                setStar(value);
                alert('Cảm ơn đánh giá của bạn!');
                props.getAPI();
            }
            else alert('Hãy nhập đánh giá đầy đủ!')
        }
    }
    return (
        <div className='product__comment-ratingbox-rating-chose'>
            <p>Bạn hãy chọn vào ngôi sao để dánh giá sản phẩm</p>
            <div className='product__comment-ratingbox-rating-chose-list'>
                <div className='product__comment-ratingbox-star-chose'>
                    <i style={{ color: star >= 1 ? "#fac917" : '' }}
                        onClick={() => handleClick(1)}
                        className="fa-solid fa-star product__comment-ratingbox-star-chose-icon" >
                    </i>
                </div>
                <div className='product__comment-ratingbox-star-chose'>
                    <i style={{ color: star >= 2 ? "#fac917" : '' }}
                        onClick={() => handleClick(2)}
                        className="fa-solid fa-star product__comment-ratingbox-star-chose-icon"
                    ></i>
                </div>
                <div className='product__comment-ratingbox-star-chose'>
                    <i style={{ color: star >= 3 ? "#fac917" : '' }}
                        onClick={() => handleClick(3)}
                        className="fa-solid fa-star product__comment-ratingbox-star-chose-icon" ></i>
                </div>
                <div className='product__comment-ratingbox-star-chose'>
                    <i style={{ color: star >= 4 ? "#fac917" : '' }}
                        onClick={() => handleClick(4)}
                        className="fa-solid fa-star product__comment-ratingbox-star-chose-icon" ></i>
                </div>
                <div className='product__comment-ratingbox-star-chose'>
                    <i style={{ color: star >= 5 ? "#fac917" : '' }}
                        onClick={() => handleClick(5)}
                        className="fa-solid fa-star product__comment-ratingbox-star-chose-icon" ></i>
                </div>
            </div>
        </div>
    )
}