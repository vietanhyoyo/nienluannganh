import AdminControllProductTypeLi from './AdminControllProductTypeLi'
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function AdminControllProductTypeItem(props) {
    const [datatypes, setDatatypes] = useState([]);
    const [expand, setExpand] = useState(false);
    const handleDelete = () => {
        let yes = window.confirm('Bạn có muốn xoá nó không!');
        if (yes) {
            alert('Đã xóa một item')
        }
    }
    const handleEdit = () => {
        let str = prompt('Nhập tên nhóm loại hàng muốn thay đổi');
        if (str) {
            alert(str)
        }
    }
    const handleAdd = () => {
        let str = prompt('Nhập tên nhóm sản phẩm mới');
        if (str) {
            alert(str);
        }
    }
    useEffect(function () {
        axios.get(`/products/timidloaihangsangloaisanpham?id=${props.data._id}`)
            .then(response => response.data)
            .then(function (response) {
                console.log(response);
                setDatatypes(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    },[props.data._id]);
    return (
        <div className='admin-controll-product-type__item'>
            <div className='admin-controll-product-type__item--box'>
                <div className='admin-controll-product-type__col'>
                    <div className='admin-controll-product-type__angle'>
                        <i className={expand ? 'fi fi-rr-angle-small-up' : 'fi fi-rr-angle-small-down'}
                            onClick={() => { setExpand(!expand) }}></i>
                    </div>
                    <p>Nhóm loại sản phẩm: </p><span>{props.data.tenloaihang}</span>
                </div>
                <div className='admin-controll-product-type__col'>
                    <i
                        className='fi fi-rr-trash admin-controll-product-type__icon admin-controll-product-type__icon--red'
                        onClick={handleDelete}
                    ></i>
                    <i
                        className='fi fi-rr-pencil admin-controll-product-type__icon'
                        onClick={handleEdit}
                    ></i>
                </div>
            </div>
            {expand &&
                <ul>
                    {datatypes.map((data, index) => {
                        return <AdminControllProductTypeLi
                            key={index}
                            data={data}
                        />
                    })}
                    <li className='admin-controll-product-type__li admin-controll-product-type__li--bottom'>
                        <div className='admin-controll-product-type__col'>
                            <div className='admin-controll-product-type__angle'>
                                <i className='fi fi-rr-add' onClick={handleAdd} ></i>
                            </div>
                            <p>Thêm</p>
                        </div>
                        <div className='admin-controll-product-type__col'></div>
                    </li>
                </ul>
            }
        </div>
    );
}