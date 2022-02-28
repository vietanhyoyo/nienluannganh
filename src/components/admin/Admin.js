import '../../css/admin.css'
import StaffAdmin from './StaffAdmin';
import OrderAdmin from './OrderAdmin';
import {Outlet,Link} from 'react-router-dom';

function Admin(){
      
      const Product     = document.getElementsByClassName('admin__li-product');
      const User        = document.getElementsByClassName('admin__li-user');
      const Promotion   = document.getElementsByClassName('admin__li-Promotion');
      const Statistical = document.getElementsByClassName('admin__li-statistical');
      function setUser(){  
            for(let i=0;i<User.length;i++){
                 if(User[i].style.display == 'inherit'){
                  User[i].style.display = 'none';
                 } else{
                  User[i].style.display = 'inherit'
                 }
            }       
      }
      function setProduct(){
            for(let i=0;i<Product.length;i++){
                  if(Product[i].style.display == 'inherit'){
                        Product[i].style.display = 'none';
                  } else{
                        Product[i].style.display = 'inherit'
                  }
             }   
      }
      function setPromotion(){
            for(let i=0;i<Promotion.length;i++){
                  if(Promotion[i].style.display == 'inherit'){
                        Promotion[i].style.display = 'none';
                  } else{
                        Promotion[i].style.display = 'inherit'
                  }
             }
      }
      function setStatistical(){
            for(let i=0;i<Statistical.length;i++){
                  if(Statistical[i].style.display == 'inherit'){
                        Statistical[i].style.display = 'none';
                  } else{
                        Statistical[i].style.display = 'inherit'
                  }
             }
      }  



      return(
        <div className='admin'>
          
            {/* Heading */}
            <div className="admin__header">
                      {/* Logo và tên Logo bên trái*/}
                  <div className="admin__header-logo">
                
                   <img className="admin__img-logo" alt="Logo" src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-green-shield-logo-designs-png-image_3660706.jpg"/>
                  </div>
                        {/* DIV bên phải */}
                  <div className="admin__header-infomation">     
                                        {/* div Thay đổi giao diện sáng tối */}
                         <div className="change-day">
                                <p className="icon-change-day"><i className="fa-solid fa-circle-half-stroke"></i></p>    
                        </div>
                              {/* DIV nút thay đổi ngôn ngữ */}
                        <div className="admin__change-language">
                              <p className="admin__change-language-text">VIE</p>
                              <div className="admin__change-language-icon"><p className="icon-change-language"><i className="fa-solid fa-angle-down"></i></p></div>
                        </div>
                                    
                           {/* Div bell */}
                        <div className="admin__notification">
                                     {/* Div bell icon */}
                              <div className="admin__notification-bell"> 
                                       {/* bell icon */}
                                    <p className="bell-icon-size">
                                           <i className="fa fa-bell-o" aria-hidden="true"></i>
                                    </p>
                                        {/* dot Bell */}
                                    <div className="bell-icon-dot"></div>
                              </div>
                                    {/* Text Bell icon */}
                              <div className="text-bell-icon-div">
                              <div className="div-textbell-icon-top">
                                          <p className="admin__notification-text">
                                          Xin chào, THANH ĐIỀN
                                          </p>
                                    </div>
                                    <div className="div-textbell-icon-bot">
                                          <p className="admin__notification-text">
                                          QUẢN TRỊ VIÊN
                                          </p>
                                    </div>
                              </div> 
                        </div>
                            {/* Avatar Admin */}
                        <div className='admin__avatar'>
                                 <img src="https://phunugioi.com/wp-content/uploads/2020/10/hinh-anh-avatar-nam-dep.jpg" alt='avatar' className="admin__avatar-image"/>
                        </div>
                              {/* Manage Infomation admin */}
                        <div className="admin__infomation"><i className ="fa-solid fa-angle-down"></i></div>
              </div>
            </div>
            <div className="admin-app">
            {/* Menu */}
            <div className='admin__content'>   
                <div className="admin__menu">
                        {/* Tiêu đề */}
             
                    <ul className='admin__menu-title admin_title-top' > 
                      <h3 className="admin__menu-title-manage "onClick={setUser}><p className='icon-manager icon-admin'><i className="fa-solid fa-users-gear "></i></p> QUẢN LÝ TÀI KHOẢNG <i className ="fa-solid fa-angle-down admin__title-icon"></i></h3>    
                        <div className="br-div"></div>
                        <li className='admin__menu-content admin__li-user'>
                             
                              <Link to={'staff/id=1'} className="admin-content">  <p className='admin-content'><span className='icon-manager'><i className="fa-solid fa-list"></i></span>Danh sách tài khoảng</p></Link>
                        </li>
                        <li className='admin__menu-content admin__li-user'>
                              <p className='admin-content'><span className='icon-manager'><i className="fa-solid fa-user-plus"></i></span>Thêm tài khoản</p>
                        </li>
                    </ul>

             
                  
                    <ul className='admin__menu-title admin_title-top'> 
                      <h3 className="admin__menu-title-manage" onClick={setProduct}><p className='icon-manager icon-admin'><i className="fa-solid fa-box icon-admin"></i></p>ĐƠN HÀNG <p className="droplist-admin droplist-admin-2"><i className ="fa-solid fa-angle-down admin__title-icon"></i></p> </h3>    
                        <div className="br-div"></div>
                        <li className='admin__menu-content admin__li-product'>
                              <p className='admin-content'><span className='icon-manager'><i className="fa-solid fa-list-check"></i></span>Duyệt đơn hàng</p>
                        </li>
                        <li className='admin__menu-content admin__li-product'>
                              <p className='admin-content'><span className='icon-manager'><i className="fa-solid fa-dolly"></i></span>Thêm hàng hóa</p>
                        </li>
                        <li className='admin__menu-content admin__li-product'>
                        <Link to={'order/id=1'} className="admin-content">   <p className='admin-content'><span className='icon-manager'><i className="fa-solid fa-table-list"></i></span>Danh sách hàng hóa</p> </Link>
                        </li>
                    </ul>
                    <ul className='admin__menu-title admin_title-top'> 
                      <h3 className="admin__menu-title-manage" onClick={setStatistical} ><p className='icon-manager icon-admin'><i className="fa-solid fa-chart-pie"></i> </p>THỐNG KÊ <p className="droplist-admin droplist-admin-1"><i className ="fa-solid fa-angle-down admin__title-icon"></i></p> </h3>    
                        <div className="br-div"></div>
                        <li className='admin__menu-content admin__li-statistical'>
                              <p className='admin-content'><span className='icon-manager'><i className="fa-solid fa-square-poll-vertical"></i></span>Thống kê doanh thu </p>
                        </li>
                       
                    </ul>
                    <ul className='admin__menu-title admin_title-top'> 
                      <h3 className="admin__menu-title-manage" onClick={setPromotion}><p className='icon-manager icon-admin'><i className="fa-brands fa-teamspeak"></i> </p>KHUYẾN MÃI <p className="droplist-admin"><i className ="fa-solid fa-angle-down admin__title-icon"></i></p> </h3>    
                        <div className="br-div"></div>
                        <li className='admin__menu-content admin__li-Promotion'>
                              <p className='admin-content'><span className='icon-manager'><i className="fa-solid fa-list"></i></span>Danh sách khuyến mãi</p>
                        </li>
                        <li className='admin__menu-content admin__li-Promotion'>
                              <p className='admin-content'><span className='icon-manager'><i className="fa-solid fa-pen-to-square"></i></span>Thêm khuyến mãi cho sản phấm</p>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet/>
            </div>
        </div>
    );
}

export default Admin;