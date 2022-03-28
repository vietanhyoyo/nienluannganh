import { useState, useEffect } from 'react';
import MerchandiseItem from '../home/MerchandiseItem';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import '../../css/find.css'

function FindSearch() {

    /*Lấy tham số trên url bằng useParams */
    const { id } = useParams();
    console.log(id);

    const [list, setList] = useState([{
        _id: 'null',
        tensanpham: 'null',
        hinhanh: ['null'],
        gianiemyet: 0,
        donvitinh: 'null'

    }]);
    useEffect(function () {
        axios.post('/products/timtensanpham', { id: id })
            .then(response => response.data)
            .then(response => {
                setList(response);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [id]);

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
                donvi={list[i].donvitinh}
            />);
        }
        return listProduct;
    }

    return (
        <div className='find__parent'>
            <div className='find'>
                <div className='row-app'><p>Tìm thấy {list.length} kết quả tìm kiếm liên quan '{id}'</p></div>
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

export default FindSearch;