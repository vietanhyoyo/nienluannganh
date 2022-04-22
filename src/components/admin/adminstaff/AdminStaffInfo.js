import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AdminEditPrivate from './AdminEditPrivate'
import '../../../css/adminstaffinfo.css'

// Xem thông tin chính mình (nhân viên) khi đăng nhập
function AdminStaffInfo() {

  const GetIDStaff = localStorage.getItem('accessToken');
  const [infostaff, setInfostaff] = useState([
    {
      hoten: 'server chưa chạy',
      chucvu: 'admin',
      diachi: '3/2 Ninh Kieu Can Tho',
      hinhanh: 'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2020/09/avatar-lolita-4.jpg?fit=656%2C20000&quality=95&ssl=1',
      gioitinh: 'Nam',
      sdt: '0966631453',
      ngaysinh: '13/06/2000',
      email: 'dienB1805751@gmail.com',
      matkhau: 'aloha123'
    }
  ])
  const GetStaffbyId = () => {
    axios.post('/employee/laynhanvienbangid', { id: GetIDStaff })
      .then(response => {
        setInfostaff(response.data)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    GetStaffbyId();
  }, [])

  console.log(infostaff)
  var a = ''
  if (infostaff.chucvu === 'admin') {
    a = 'Quản trị viên'
  }
  if (infostaff.chucvu === 'nhanvien') {
    a = 'Nhân viên'
  }
  // Ngày sinh
  const d = new Date(infostaff.ngaysinh)
  const nam = d.getFullYear();
  const thang = d.getMonth() + 1;
  const ngay = d.getDate();
  var ngaysinh = '';
  if (ngay < 10 && thang < 10) {
    ngaysinh = '0' + ngay + '-' + '0' + thang + '-' + nam
  }
  if (ngay < 10 && thang > 10) {
    ngaysinh = '0' + ngay + '-' + thang + '-' + nam
  }
  if (ngay > 10 && thang < 10) {
    ngaysinh = ngay + '-' + '0' + thang + '-' + nam
  }


  // Ngày vào công ty
  const d1 = new Date(infostaff.createdAt)
  const nam1 = d1.getFullYear();
  const thang1 = d1.getMonth() + 1;
  const ngay1 = d1.getDate();
  var ngaysinh1 = '';
  if (thang1 < 10) {
    ngaysinh1 = ngay1 + '-' + '0' + thang1 + '-' + nam1
  } else {
    ngaysinh1 = ngay1 + '-' + +thang1 + '-' + nam1
  }

  const [mount, setMount] = useState(false);

  return (
    <div className='AdminStaffInfo'>
      <div className='AdminStaffInfo__form'>
        <div className='AdminStaffInfo__form-left'>
          <div className='AdminStaffInfo__form-left-div' style={{ backgroundImage: `url(${infostaff.hinhanh})` }}>
            {/* <img src={infostaff.hinhanh} alt='chưa có ảnh' className='AdminStaffInfo__form-left-div-image'/> */}
          </div>
          <button className='button-6 re-button-6'
            onClick={() => {
              setMount(!mount);
            }}
          >Sửa thông tin</button>
        </div>
        <div className='AdminStaffInfo__form-right'>
          <div className='AdminStaffInfo__form-right-top'>
            <h1 className='AdminStaffInfo__form-right-text'>
              {infostaff.hoten}
            </h1>
            <h3 className='AdminStaffInfo__form-right-position'>
              {a}   </h3>
          </div>
          <div className='AdminStaffInfo__form-right-bottom'>
            {/* Div trái */}
            <div className='AdminStaffInfo__form-right-bottom-left'>
              {/* Items */}
              <p className='AdminStaffInfo__form-right-bottom-left-items'>
                <p className='AdminStaffInfo__form-right-bottom-left-items-icon'>
                  <i className="fa-solid fa-calendar"></i>
                </p>
                <p className='AdminStaffInfo__form-right-bottom-left-items-text'>
                  {ngaysinh}
                </p>
              </p>

              <p className='AdminStaffInfo__form-right-bottom-left-items'>
                <p className='AdminStaffInfo__form-right-bottom-left-items-icon'>
                  <i className="fa-solid fa-phone"></i>
                </p>
                <p className='AdminStaffInfo__form-right-bottom-left-items-text'>
                  {infostaff.sdt}
                </p>
              </p>
              <p className='AdminStaffInfo__form-right-bottom-left-items'>
                <p className='AdminStaffInfo__form-right-bottom-left-items-icon'>
                  <i className="fa-solid fa-building-user"></i>
                </p>
                <p className='AdminStaffInfo__form-right-bottom-left-items-text'>
                  {ngaysinh1}
                </p>
              </p>
            </div>
            {/* Div phải */}
            <div className='AdminStaffInfo__form-right-bottom-left'>
              {/* Items */}
              <p className='AdminStaffInfo__form-right-bottom-left-items'>
                <p className='AdminStaffInfo__form-right-bottom-left-items-icon'>
                  <i className="fa-solid fa-envelope"></i>
                </p>
                <p className='AdminStaffInfo__form-right-bottom-left-items-text '>
                  {infostaff.email}
                </p>
              </p>
              <p className='AdminStaffInfo__form-right-bottom-left-items'>
                <p className='AdminStaffInfo__form-right-bottom-left-items-icon'>
                  <i className="fa-solid fa-venus-mars"></i>
                </p>
                <p className='AdminStaffInfo__form-right-bottom-left-items-text'>
                  {infostaff.gioitinh}
                </p>
              </p>

              <p className='AdminStaffInfo__form-right-bottom-left-items'>
                <p className='AdminStaffInfo__form-right-bottom-left-items-icon'>
                  <i className="fa-solid fa-location-arrow"></i>
                </p>
                <p className='AdminStaffInfo__form-right-bottom-left-items-text'>
                  {infostaff.diachi}
                </p>
              </p>
            </div>
          </div>
        </div>


      </div>
      {mount &&
        <AdminEditPrivate
          staff={infostaff}
          rerender={() => {
            setMount(!mount)
            GetStaffbyId();
          }}
        />}
    </div>
  )
}

export default AdminStaffInfo