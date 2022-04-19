import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../../css/adminheader.css'
import AdmimHeaderInfoStaff from './AdmimHeaderInfoStaff';

export default function AdminHeader() {
  const GetIDStaff = localStorage.getItem('accessToken');
  const [infostaff , setInfostaff] = useState([
    {
        hoten  : 'server chưa chạy',
        chucvu    : 'admin',
        diachi  : '3/2 Ninh Kieu Can Tho',
        hinhanh : 'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2020/09/avatar-lolita-4.jpg?fit=656%2C20000&quality=95&ssl=1',
        gioitinh : 'Nam',
        sdt:  '0966631453',
        ngaysinh:  '13/06/2000',
        email : 'dienB1805751@gmail.com',
        matkhau :'aloha123'
    }
    ])
  const GetStaffbyId = () => {
    axios.post('/employee/laynhanvienbangid',{id : GetIDStaff})
    .then(response => { 
        setInfostaff(response.data)
    })
    .catch(err => console.log(err))
  }
  useEffect(()=>{
    GetStaffbyId();
  },[])

  const [mount,setMount] = useState(false)
  
  console.log(mount)
  return (
    <div className='AdminHeader__app'>
        {/* Div bên trái */}
        <div className='AdminHeader__app--left'>
            <div className='AdminHeader__app--left-search'>
                <label className='AdminHeader__app--left-search-icon' htmlFor='AdminHeader__input'>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </label>
                <input type='text' name='search-input-AdminHeader' id='AdminHeader__input' placeholder='Nhập thông tin cần tìm ...'/>
            </div>
        </div>

        {/* Div bên phải */}
        <div className='AdminHeader__app--right'>

                
                <div className='AdminHeader__app--right-items AdminHeader__app--right-bell'>
                   <i className="fa-solid fa-bell"></i>
                </div>
        
                <div className='AdminHeader__app--right-items AdminHeader__app--right-avatar'>
                   {infostaff.hinhanh !==undefined ? 
              <Link to={'/admin/infomation'}><img src={infostaff.hinhanh} alt='Không có ảnh đại diện' className='AdminHeader__app--right-avatar-img'

                   /></Link>
                    : <img src={'../../../images/no-avatar.png'} alt='Không có ảnh đại diện' className='AdminHeader__app--right-avatar-img'/>
                   } 
                </div>
                <div className='AdminHeader__app--right-items AdminHeader__app--right-avatar-text'>
                {infostaff.hoten !==undefined ? infostaff.hoten : 'Tên nhân viên'}
                </div>
                <div className='AdminHeader__app--right-items AdminHeader__app--right-menu' 
                  onClick={()=> {setMount(!mount)}}
                >
                <i className="fa-solid fa-power-off"></i>
                 {mount && <AdmimHeaderInfoStaff

                  data = {infostaff} 
                 
                 /> } 
                </div>
                
        </div>

        
    </div>
  )
}
