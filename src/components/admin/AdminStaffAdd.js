import React, { useState } from 'react'
import '../../css/adminstaffadd.css'
import StaffAdmin from './StaffAdmin'
import axios from 'axios'
function AdminStaffAdd() {
  
    const [postinfo,setPosinfo] = useState({
        hoten  : '',
        chucvu    : '',
        diachi  : '',
        
        gioitinh : '',
        matkhau :'',
        sdt:  '',
        ngaysinh:  '',
        email : ''
    })
  
    const postInfomation = () => {
        axios.post('/employee/themnhanvien', postinfo)
        .then((response) => {
            console.log(response.data)

        })
        
    }
    
  
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
                                    <input type="text" className="form__input" id="name" placeholder="Họ và tên" required=""
                                     onChange={(e) => {setPosinfo({...postinfo,hoten : e.target.value})}}
                                    />
                                    <label htmlFor="name" className="form__label">Họ và tên</label>
                                </div>
                                <div className="form__group">
                                    <input type="date" className="form__input" id="name" placeholder="Ngày sinh (dd/mm/yyyy)" required="" 
                                       onChange={(e) => {setPosinfo({...postinfo,ngaysinh : e.target.value})}}
                                    />
                                    <label htmlFor="name" className="form__label">Ngày sinh (mm/dd/yyyy)</label>
                                </div>
                                <div className="form__group">
                                    <input type="text" className="form__input" id="name" placeholder="Số điện thoại" required="" 
                                     onChange={(e) => {setPosinfo({...postinfo,sdt : e.target.value})}}/>
                                    <label htmlFor="name" className="form__label">Số điện thoại (10 số)</label>
                                </div>
                                <div className="form__group">
                                    <input type="password" className="form__input" id="name" placeholder="Mật khẩu" required="" 
                                     onChange={(e) => {setPosinfo({...postinfo,matkhau : e.target.value})}}/>
                                    <label htmlFor="name" className="form__label">Mật khẩu</label>
                                </div>
                                
                                
                            </div>
                            <div className='Admin__addstaff--content-right-right'>
                                   
                                    <div className="form__group">
                                         <input type="text" className="form__input" id="name" placeholder="Địa chỉ" required="" 
                                         onChange={(e) => {setPosinfo({...postinfo,diachi : e.target.value})}}
                                         />
                                         <label htmlFor="name" className="form__label">Địa chỉ</label>
                                    </div>
                                    <div className="form__group">
                                          <input type="email" className="form__input" id="name" placeholder="Email  (name@gmail.com)" required="" 
                                           onChange={(e) => {setPosinfo({...postinfo,email : e.target.value})}}
                                          />
                                          <label htmlFor="name" className="form__label">Email (name@gmail.com)</label>
                                    </div>

                                    <div className='selectdiv'>

                                        <select onChange={
                                            (e) => {setPosinfo({...postinfo,chucvu : e.target.value})}}
                                            >
                                            <option value={'admin'} >
                                            Quản trị viên
                                            </option>
                                            <option value={'nhanvien'}>Nhân viên</option>

                                        </select>
                                    </div>

                                   
                                    <div className="form__group-radion-staffadmin">
                                        <label>
                                            <input type="radio" className="option-input1 radio1" name="example" value={'Nam'}
                                            onChange={(e) => {setPosinfo({...postinfo,gioitinh : e.target.value})}} />
                                            Nam
                                        </label>
                                        <label>
                                            <input type="radio" className="option-input1 radio1" name="example"  value={'Nữ'}
                                             onChange={(e) => {setPosinfo({...postinfo,gioitinh : e.target.value})}} 
                                            />
                                            Nữ
                                        </label>
                                </div>
                            </div>
                    </div>
                 </div>
                 <div className='Admin__addstaff--content-bottom'>
                     <button className='button-900' onClick={postInfomation}>Thêm</button>
                     <button className='button-900'>Hủy bỏ</button>
                 </div>
            </div>


       
    </div>
  )
}

export default AdminStaffAdd