import { useState, useEffect } from 'react';
import MerchandiseBox from '../home/MerchandiseBox';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import '../../css/find.css'

function Find() {

    /*Lấy tham số trên url bằng useParams */
    const { id } = useParams();
    console.log(id);

    const [list, setList] = useState({
        _id: 'null',
        tenloaisanpham: 'null'
    });
    useEffect(function () {
        axios.post('/products/loaisanphamid', { id: id })
            .then(response => response.data)
            .then(response => {
                setList(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [id]);

    return (
        <div className='find__parent'>
            <div className='find'>
                <div className='row-app'><p>Danh mục loại sản phẩm mà bạn đang tìm kiếm</p></div>
            </div>
            <div className='merchandise' >
                <div className='merchandise__content row-app'>
                    <MerchandiseBox
                        idloaisanpham={list._id}
                        tenloaisanpham={list.tenloaisanpham}
                    />
                </div>
            </div>
        </div>
    );
}

export default Find;