import React, { useEffect } from 'react'
import '../../../css/adminmenu.css'
import AdminMenuData, {Theul,TheUl2} from './AdminMenuData.js'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function AdminMenu() {

  const [focus, setFocus] = useState(-1);
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
  console.log(infostaff);
  return (
    <div className='Adminmenu__app'>
      {/* menu */}
  <Link to='/'>   <div className='Adminmenu__app--logo'>
        <img src='../../../images/logotext.png' alt='logo' className='Adminmenu__app--logo-img' />
      </div>
    </Link> 
      {/* content */}
      <div className='Adminmenu__app--content'>
        {/* Chữ page */}
        <p className='Adminmenu__app--content-page'> PAGES</p>
        {/* Title quản lý tài khoảng và icon */}
        {infostaff.chucvu === 'admin' ? Theul.map((menu, index) => (
          <ul className='Adminmenu__app--content-title' key={index} >
            {/* Items title */}
            <div className='Adminmenu__app--content-title-content'
              onClick={
                () => focus === index ? setFocus(-1) : setFocus(index)
              }>
              <p className='Adminmenu__app--content-title-text Adminmenu__app--content-title-left'>
                <i className={menu.icon}></i>
              </p>
              <p className='Adminmenu__app--content-title-text Adminmenu__app--content-title-mid'>
                {menu.title}
              </p>
              <p className='Adminmenu__app--content-title-text Adminmenu__app--content-title-right'>
                <i className={menu.icon2}></i>
              </p>
            </div>

            <ul className={focus === index ? 'ad-ulchildactive' : 'ad-ulchild'}>
              {/* Thẻ con */}
              {menu.child.map((menuchild, index) => (
                <Link to={menuchild.path} className='Link-Addmenu' key={index}>  <li className='Adminmenu__app--content-title-items' >
                  <p className='Adminmenu__app--content-title-items-content'>
                    {menuchild.title}
                  </p>
                </li>
                </Link>
              ))}
            </ul>
          </ul>
        ))
         :
         TheUl2.map((menu, index) => (
          <ul className='Adminmenu__app--content-title' key={index} >
            {/* Items title */}
            <div className='Adminmenu__app--content-title-content'
              onClick={
                () => focus === index ? setFocus(-1) : setFocus(index)
              }>
              <p className='Adminmenu__app--content-title-text Adminmenu__app--content-title-left'>
                <i className={menu.icon}></i>
              </p>
              <p className='Adminmenu__app--content-title-text Adminmenu__app--content-title-mid'>
                {menu.title}
              </p>
              <p className='Adminmenu__app--content-title-text Adminmenu__app--content-title-right'>
                <i className={menu.icon2}></i>
              </p>
            </div>

            <ul className={focus === index ? 'ad-ulchildactive' : 'ad-ulchild'}>
              {/* Thẻ con */}
              {menu.child.map((menuchild, index) => (
                <Link to={menuchild.path} className='Link-Addmenu' key={index}>  <li className='Adminmenu__app--content-title-items' >
                  <p className='Adminmenu__app--content-title-items-content'>
                    {menuchild.title}
                  </p>
                </li>
                </Link>
              ))}
            </ul>
          </ul>
        ))        
      
      
      
      
      
      
      
      }
      </div>
    </div>
  )
}
