import React, { useState } from 'react'
import '../../css/adminstaffadd.css'
import StaffAdmin from './StaffAdmin'
function AdminStaffAdd() {
  
    const [postinfo,setPosinfo] = useState({
        id : 'Này lấy trên cơ sở dữ liệu về',
        hoten  : '',
        chucvu    : '',
        diachi  : '',
        hinhanh : '',
        gioitinh : '',
        sdt:  '',
        ngaysinh:  '',
        email : ''
    })
  
    
  
    return (
    <div className='Admin__addstaff'>
            <h3 className='Admin__addstaff--title'>
                {/* icon */}
                <p className='Admin__addstaff--title-icon'><i className="fa-solid fa-circle-user"></i></p>
                {/* Title Text  */}
                Thêm nhân viên
            </h3>

            <div className='Admin__addstaff--content'>
                 <div className='Admin__addstaff--content-top'>
                     <div className='Admin__addstaff--content-left'>
                            <div className='Admin__addstaff--content-left-div'>
                                 <img  src='https://s.meta.com.vn/img/thumb.ashx/Data/image/2021/08/03/anh-anime-cap-avatar-doi-cute-avatar-cap-anime-cho-2-nguoi-11.jpg' alt='Không có ảnh đại diện' className='Admin__addstaff--content-left-div-img'/>
                            </div>
                            <input type='file' id='Admin__addstaff--label'/>
                            <label htmlFor='Admin__addstaff--label' className='square_btn36'>Chọn ảnh đại diện</label>
                    </div>
                    <div className='Admin__addstaff--content-right'>
                            <div className='Admin__addstaff--content-right-left'>
                                <div className="form__group">
                                    <input type="text" className="form__input" id="name" placeholder="Họ và tên" required="" />
                                    <label htmlFor="name" className="form__label">Họ và tên</label>
                                </div>
                                <div className="form__group">
                                    <input type="text" className="form__input" id="name" placeholder="Ngày sinh (dd/mm/yyyy)" required="" />
                                    <label htmlFor="name" className="form__label">Ngày sinh (dd/mm/yyyy)</label>
                                </div>
                                <div className="form__group">
                                    <input type="text" className="form__input" id="name" placeholder="Số điện thoại" required="" />
                                    <label htmlFor="name" className="form__label">Số điện thoại</label>
                                </div>
                                <div className="form__group-radion-staffadmin">
                                        <label>
                                            <input type="radio" className="option-input1 radio1" name="example"  />
                                            Nam
                                        </label>
                                        <label>
                                            <input type="radio" className="option-input1 radio1" name="example"  />
                                            Nữ
                                        </label>
                                </div>
                                
                            </div>
                            <div className='Admin__addstaff--content-right-right'>
                                   
                                    <div className="form__group">
                                         <input type="text" className="form__input" id="name" placeholder="Địa chỉ" required="" />
                                         <label htmlFor="name" className="form__label">Địa chỉ</label>
                                    </div>
                                    <div className="form__group">
                                          <input type="email" className="form__input" id="name" placeholder="Email" required="" />
                                          <label htmlFor="name" className="form__label">Email</label>
                                    </div>
                                    <select className='Admin__addstaff--content-right-right-select'>
                                        <option value={'admin'} >
                                        Quản trị viên
                                        </option>
                                        <option value={'nhanvien'}>Nhân viên</option>
                                    </select>
                            </div>
                    </div>
                 </div>
                 <div className='Admin__addstaff--content-bottom'>
                     <button className='button-900'>Thêm</button>
                     <button className='button-900'>Hủy bỏ</button>
                 </div>
            </div>


       
    </div>
  )
}

export default AdminStaffAdd