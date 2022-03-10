import '../../css/admincontrollproducttype.css'
import AdminControllProductTypeItem from './admincontrollproducttype/AdminControllProductTypeItem';
import { useState,useEffect } from 'react';
import axios from 'axios'

export default function AdminControllProductType() {
    const [datas,setDatas] = useState([
        {
            _id: 'a',
            tenloaihang: 'Rau, củ, trái cây'
        }
    ])
    useEffect(function () {
        axios.get('/products/loaihang')
            .then(response => response.data)
            .then(function (response) {
                setDatas(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    },[]);
    const handleAdd = () => {
        let str = prompt('Nhập tên nhóm sản phẩm mới');
        if (str) {
            alert(str);
        }
    }
    return (
        <div className='admin-controll-product-type'>
            <div className='admin-controll-product-type__content'>
                <div className='admin-controll-product-type__topic'>
                    <i className='fi fi-rr-layout-fluid'></i>
                    <h2> Quản lý loại hàng</h2>
                </div>
                <div className='admin-controll-product-type__body'>
                    <div>
                        {datas.map((data, index) => {
                            return <AdminControllProductTypeItem
                                key={index}
                                data={data}
                            />
                        })}
                        <div className='admin-controll-product-type__item'>
                            <div className='admin-controll-product-type__item--box'>
                                <div className='admin-controll-product-type__col'>
                                    <div className='admin-controll-product-type__angle'>
                                        <i className='fi fi-rr-add' onClick={handleAdd} ></i>
                                    </div>
                                    <p>Thêm</p>
                                </div>
                                <div className='admin-controll-product-type__col'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}