import React from 'react'
import '../../../css/adminheader.css'

export default function AdminHeader() {
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

                <div className='AdminHeader__app--right-items AdminHeader__app--right-change'>
                <i className="fa-solid fa-circle-half-stroke"></i>
                </div>
                
                <div className='AdminHeader__app--right-items AdminHeader__app--right-bell'>
                   <i className="fa-solid fa-bell"></i>
                </div>

               <div className='AdminHeader__app--right-items AdminHeader__app--right-mess'>
                      <i className="fa-solid fa-message"></i>
               </div>
               
                <div className='AdminHeader__app--right-items AdminHeader__app--right-avatar'>
                    <img src='https://img.thuthuatphanmem.vn/uploads/2018/09/22/avatar-den-dep-2_015639673.png' alt='Ảnh đại diện' className='AdminHeader__app--right-avatar-img'/>
                </div>
                <div className='AdminHeader__app--right-items AdminHeader__app--right-avatar-text'>
                Nguyễn Trần thanh Điền
                </div>
                <div className='AdminHeader__app--right-items AdminHeader__app--right-menu'>
                <i className="fa-solid fa-power-off"></i>
                </div>
               
        </div>

        
    </div>
  )
}
