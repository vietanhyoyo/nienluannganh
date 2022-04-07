import { useState } from 'react';
import '../../css/adminadduser.css'
import img from '../../images/sammy-25.png'

export default function AdminAddUser() {

    const [Infostaff , setInfostaff] = useState({
        hoten  : '',
        chucvu    : '',
        diachi  : '',
        hinhanh : '',
        gioitinh : '',
        sdt:  '',
        ngaysinh:  '',
        email : ''
    });

    return (
        <div className='admin-add-user'>
            <div className='admin-add-user__body' >
                <div className='admin-add-user__box'>
                    <h2 className='admin-add-user__h2'>
                        <i className='fi fi-rr-user-add'></i> Thêm tài khoản người dùng mới
                    </h2>
                    <p className='admin-add-user__minitext'>Hãy tạo tài khoản cho nhân viên của bạn</p>
                    <form method='post' action='#' className='admin-add-user__form'>
                        <div className='admin-add-user__row'>
                            <label htmlFor='name' className='admin-add-user__label'>Họ và tên<b>*</b></label>
                            <input type='text' name='name' className='admin-add-user__input' />
                        </div>
                        <div className='admin-add-user__row'>
                            <label htmlFor='username' className='admin-add-user__label'>Tên đăng nhập<b>*</b></label>
                            <input type='text' name='username' className='admin-add-user__input' />
                        </div>
                        <div className='admin-add-user__row'>
                            <label htmlFor='pw' className='admin-add-user__label'>Mật khẩu<b>*</b></label>
                            <input type='password' name='pw' className='admin-add-user__input' />
                        </div>
                        <div className='admin-add-user__row'>
                            <label htmlFor='repw' className='admin-add-user__label'>Nhật lại mật khẩu<b>*</b></label>
                            <input type='password' name='repw' className='admin-add-user__input' />
                        </div>
                        <div className='admin-add-user__row'>
                            <label htmlFor='phone' className='admin-add-user__label'>SĐT<b>*</b></label>
                            <input type='text' name='phone' className='admin-add-user__input' />
                        </div>
                        <div className='admin-add-user__row'>
                            <label htmlFor='role' className='admin-add-user__label'>Vai trò<b>*</b></label>
                            <select name='role' className='admin-add-user__input'>
                                <option value='1'>Quản lý</option>
                                <option value='2'>Nhân viên</option>
                            </select>
                            
                        </div>
                        <div className='admin-add-user__row'>
                            <label htmlFor='username' className='admin-add-user__label'>Tên đăng nhập<b>*</b></label>
                            <input type='text' name='username' className='admin-add-user__input' />
                        </div>
                        <div className='admin-add-user__row admin-add-user__row--btn'>
                            <div className='button' >Thêm</div>
                            <div className='button admin-add-user__btn-gray' >Hủy</div>
                        </div>
                    </form>
                </div>
                <div className='admin-add-user__box'>
                    <div className='admin-add-user__illustration'>
                        <img src={img} alt='ii' className='admin-add-user__img' />
                    </div>
                </div>
            </div>
        </div>
    );
}