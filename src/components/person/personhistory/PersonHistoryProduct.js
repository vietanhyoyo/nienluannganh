import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

export default function PersonHistoryProduct(prop) {
    const [product, setProduct] = useState({
        _id: '',
        tensanpham: '',
        loaihang: '',
        hinhanh: [''],
        gianiemyet: 0,
        soluong: 0,
        donvitinh: '',
        loaisanpham: {
            _id: '',
            tenloaisanpham: ''
        }
    });

    useEffect(() => {
        setProduct(prop.product);
    }, [prop])

    return (
        <div className='admin-invoice__row admin-invoice__row--top'>
            <Link to={`/product/${product._id}`} className='admin-invoice__box'>
                <div className='admin-invoice__img'>
                    <img src={product.hinhanh[0] ? product.hinhanh[0] : ''} alt='noPhoto' />
                </div>
                <div>
                    <p className='admin-invoice__name'>{product.tensanpham}</p>
                    <p className='admin-invoice__quantity'>SL:
                        <span> {prop.soluong} </span>
                        <span> {product.donvitinh} </span>
                    </p>
                </div>
            </Link>
            <div className='admin-invoice__box admin-invoice__box--right'>
                <p className='admin-invoice__cost'>{formatNumber(Number(prop.gia))}đ</p>
            </div>
        </div>
    );
}