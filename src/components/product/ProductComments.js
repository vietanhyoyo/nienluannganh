import axios from 'axios';
import { useState, useEffect } from 'react'
import ProductMiniStar from './ProductMiniStar';
function ProductComment(props) {

    const [danhgia, setDanhGia] = useState([
        {
            _id: '',
            sanpham: '',
            noidung: '',
            tacgia: {
                _id: '',
                hoten: 'admin'
            },
            luocthich: '',
            diemdanhgia: '',
            ngay: new Date(),
        }
    ])

    useEffect(() => {
        axios.post('/evaluate/danhgia', { id: props.idProduct })
            .then(res => setDanhGia(res.data));
    }, [props.idProduct, props.reRender])

    return (
        <>
            <div className='product__customer-comments-box'>
                <div className='product__customer-comments-list'>
                    <div className='product__customer-comments-list-item'>
                        Các đánh giá trước đây
                    </div>
                    {danhgia.map((ele, index) =>
                        <div className='product__customer-comments-list-item' key={index}>
                            <b className='product__customer-comments-list-item-heading'>
                                {ele.tacgia.hoten}
                                <ProductMiniStar index={ele.diemdanhgia} />
                            </b>
                            <div className='product__customer-comments-list-item-p'>
                                {ele.noidung}
                            </div>
                            <p>
                                {new Date(ele.ngay).toLocaleDateString('vi-VI')}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ProductComment;