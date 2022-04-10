import ProductStar from './ProductStar';
import { useState, useEffect } from 'react'
import axios from 'axios';


function ProductEvaluate(props) {
    /**Luu danh gia */
    const [danhgia, setDanhGia] = useState([{
        _id: '',
        diemdanhgia: 0
    }])

    /**Diem TB danh gia */
    const [diemtb, setDiemTB] = useState(0);

    /**Hàm lấy dữ liệu đáng giá */
    const getAPI = () => {
        axios.post('/evaluate/laydanhgia', { id: props.idProduct })
            .then(res => {
                props.reRender();
                setDanhGia(res.data)
            });
    }

    /**Lay du lieu danh gia */
    useEffect(() => {
        axios.post('/evaluate/laydanhgia', { id: props.idProduct })
            .then(res => setDanhGia(res.data))
    }, [props.idProduct])

    /**Cap nhat diem TB */
    useEffect(() => {
        let length = danhgia.length;
        let sum = 0;
        let result
        if (length > 0) {
            for (let i = 0; i < length; i++) {
                sum += danhgia[i].diemdanhgia;
            }
            result = sum / length;
            setDiemTB(result.toFixed(2));
        }

    }, [danhgia])

    const countEvaluate = value => {
        let sum = 0;
        for (let i = 0; i < danhgia.length; i++) {
            if (danhgia[i].diemdanhgia === value)
                sum++;
        }
        return sum;
    }

    const percentEvaluate = value => {
        let sum = 0;
        for (let i = 0; i < danhgia.length; i++) {
            if (danhgia[i].diemdanhgia === value)
                sum++;
        }
        sum = sum * 100 / danhgia.length;
        return sum.toFixed(2);
    }

    return (
        <div className='product__comment'>
            <div className='product__comment-raitng'>
                <div className='product__comment-title'>
                    <h2>Đánh giá sản phẩm</h2>
                </div>
                <div className='product__comment-ratingbox'>
                    <div style={{ display: 'flex' }}>
                        <div className='product__comment-average-rating'>
                            {diemtb !== 0 ? <div>{diemtb}</div> : <div>not</div>}
                            <div className='product__comment-average-rating-star'>
                                <i className="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div className='product__comment-average-rating-star-reviews'>
                            <ul className="product__comment-average-rating-star-reviews-ul">
                                <li className='product__comment-average-rating-star-reviews-li'>
                                    <span>5 sao</span>
                                    <div className='evaluate'>
                                        <div className='evaluateting' style={{ width: `${percentEvaluate(5)}%` }}></div>
                                    </div>
                                    <label>
                                        {countEvaluate(5)}
                                        <span> đánh giá</span>
                                    </label>
                                </li>
                                <li className='product__comment-average-rating-star-reviews-li'>
                                    <span>4 sao</span>
                                    <div className='evaluate'>
                                        <div className='evaluateting' style={{ width: `${percentEvaluate(4)}%` }}></div>
                                    </div>
                                    <label>
                                        {countEvaluate(4)}
                                        <span> đánh giá</span>
                                    </label>
                                </li>
                                <li className='product__comment-average-rating-star-reviews-li'>
                                    <span>3 sao</span>
                                    <div className='evaluate'>
                                        <div className='evaluateting' style={{ width: `${percentEvaluate(3)}%` }}></div>
                                    </div>
                                    <label>
                                        {countEvaluate(3)}
                                        <span> đánh giá</span>
                                    </label>
                                </li>
                                <li className='product__comment-average-rating-star-reviews-li'>
                                    <span>2 sao</span>
                                    <div className='evaluate'>
                                        <div className='evaluateting' style={{ width: `${percentEvaluate(2)}%` }}></div>
                                    </div>
                                    <label>
                                        {countEvaluate(2)}
                                        <span> đánh giá</span>
                                    </label>
                                </li>
                                <li className='product__comment-average-rating-star-reviews-li'>
                                    <span>1 sao</span>
                                    <div className='evaluate'>
                                        <div className='evaluateting' style={{ width: `${percentEvaluate(1)}%` }}></div>
                                    </div>
                                    <label>
                                        {countEvaluate(1)}
                                        <span> đánh giá</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ProductStar
                        idProduct={props.idProduct}
                        getAPI={getAPI}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductEvaluate;