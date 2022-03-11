import AdminControllProductTypeLi from './AdminControllProductTypeLi'
import { useState, useEffect, memo } from 'react';
import axios from 'axios';

function AdminControllProductTypeItem(props) {
    const [datatypes, setDatatypes] = useState([]);
    const [expand, setExpand] = useState(false);

    const getProductTypes = () => axios.get(`/products/timidloaihangsangloaisanpham?id=${props.data._id}`)
        .then(response => response.data)
        .then(function (response) {
            setDatatypes(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    const handleDelete = () => {
        let yes = window.confirm('Bạn có muốn xoá nhóm loại sản phẩm id= ' + props.data._id);
        if (yes) {
            axios.post('/products/xoaloaihang', props.data)
                .then((response) => {
                    console.log(response.data)
                    props.renderAPI()
                })
        }
    }
    const handleEdit = () => {
        let str = prompt('Đổi tên nhóm loại sản phẩm id: ' + props.data._id);
        if (str) {
            axios.post('/products/sualoaihang', {
                _id: props.data._id,
                tenloaihang: str
            })
                .then((response) => {
                    console.log(response.data)
                    props.renderAPI()
                })
        }
    }
    const handleAdd = () => {
        let str = prompt('Nhập tên loại sản phẩm mới: ' + props.data._id);
        if (str) {
            axios.post('/products/themloaisanpham', {
                tenloaisanpham: str,
                loaihang: props.data._id
            }).then(response => {
                console.log(response.data);
                getProductTypes()
            });
        }
    }
    useEffect(function () {
        axios.get(`/products/timidloaihangsangloaisanpham?id=${props.data._id}`)
            .then(response => response.data)
            .then(function (response) {
                setDatatypes(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [props.data._id]);
    return (
        <div className='admin-controll-product-type__item'>
            <div className='admin-controll-product-type__item--box'>
                <div className='admin-controll-product-type__col'>
                    <div className='admin-controll-product-type__angle'>
                        <i className={expand ? 'fi fi-rr-angle-small-up' : 'fi fi-rr-angle-small-down'}
                            onClick={() => { setExpand(!expand) }} ></i>
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
                            renderAPI={getProductTypes}
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

export default memo(AdminControllProductTypeItem)