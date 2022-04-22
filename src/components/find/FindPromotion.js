import { useState, useEffect } from 'react';
import MerchandiseItem from '../home/MerchandiseItem';
import axios from 'axios';
import '../../css/find.css'

function FindPromotion() {

    const [list, setList] = useState([{
        _id: 'null',
        tensanpham: 'null',
        hinhanh: ['null'],
        gianiemyet: 0,
        donvitinh: 'null',
        giasanpham: {
            _id: 'u',
            giaban: 0,
            khuyenmai: {
                _id: 'd',
                phantram: 0
            }
        }
    }]);
    useEffect(function () {
        axios.get('/products/timsanphamkhuyenmai')
            .then(response => response.data)
            .then(response => {
                setList(response);
            })
    }, []);

    const showProduct = () => {
        const listProduct = [];
        let n = list.length - 1;
        if (n >= 6) n = 6;
        for (let i = 0; i <= n; i++) {
            listProduct.push(<MerchandiseItem
                key={i}
                _id={list[i]._id}
                name={list[i].tensanpham}
                image={list[i].hinhanh[0]}
                cost={list[i].gianiemyet}
                salecost={list[i].giasanpham.giaban}
                donvi={list[i].donvitinh}
                khuyenmai={list[i].giasanpham.khuyenmai !== null && list[i].giasanpham.khuyenmai.phantram}
            />);
        }
        return listProduct;
    }

    return (
        <div className='find__parent'>
            <div className='find'>
                <div className='row-app'><p>Các sản phẩm đang khuyến mãi!</p></div>
            </div>
            <div className='merchandise' >
                <div className='merchandise__content row-app'>
                    <div className='merchandise__topic'>
                        <div className='merchandise__emphasize'></div>
                        <div className='merchandise__topic--span'>
                            <span>Kết quả tìm kiếm</span>
                        </div>
                    </div>
                    <div className='merchandise__row'>
                        {showProduct()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FindPromotion;