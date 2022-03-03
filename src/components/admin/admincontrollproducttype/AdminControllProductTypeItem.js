import AdminControllProductTypeLi from './AdminControllProductTypeLi'
import { useState } from 'react';

export default function AdminControllProductTypeItem(props) {
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
                    <AdminControllProductTypeLi />
                    <AdminControllProductTypeLi />
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