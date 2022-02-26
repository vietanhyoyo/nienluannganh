import '../../css/admin.css'
import AdminPromotion from './AdminPromotion';

function Admin(){
    return(
        <div className='admin'>
            {/* Heading */}
            <div className="admin__header">
                      {/* Logo và tên Logo bên trái*/}
                  <div className="admin__header-logo">
                   <img alt='tt' src='https://png.pngtree.com/png-clipart/20211026/original/pngtree-simple-coffee-elemental-design-free-logo-design-template-png-image_3597680.png' className="admin__img-logo" />
                   <h1 className='admin__header-logo--text'>Tên logo</h1>
                  </div>
                        {/* DIV bên phải */}
                  <div className="admin__header-infomation">     
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
                              <p className="admin__notification-text">
                                    Xin chào, THANH ĐIỀN <br></br>QUẢN TRỊ VIÊN
                              </p>
                         
                        </div>
                            {/* Avatar Admin */}
                        <div className='admin__avatar'>
                                 <img alt='dd' src="https://mondaycareer.com/wp-content/uploads/2020/11/%E1%BA%A3nh-avatar-%C4%91%E1%BA%B9p-c%C3%B4-g%C3%A1i-%C4%91eo-k%C3%ADnh.jpg" className="admin__avatar-image"/>
                        </div>
                              {/* Manage Infomation admin */}
                        <div className="admin__infomation"><i className="fa-solid fa-angle-down"></i></div>
              </div>

            </div>

            {/* Menu */}
            <div className='admin__content'>
                <div className="admin__menu">
                <h1 align="center">Manager</h1> 
                        {/* Tiêu đề */}
                    <ul className='admin__menu-title'> 
                    <h2>?</h2>    
                        <li className='admin__menu-content'>
                              <p className='admin-content'>Danh sách tài khoảng</p>
                        </li>
                        <li className='admin__menu-content'>
                              <p className='admin-content'>thêm tài khoản</p>
                        </li>
                        <li className='admin__menu-content'>
                              <p className='admin-content'>duyệt đơn hàng</p>
                        </li>
                        <li className='admin__menu-content'>
                              <p className='admin-content'>thêm hàng hóa</p>
                        </li>
                        <li className='admin__menu-content'>
                              <p className='admin-content'>xem danh sách hàng hóa</p>
                        </li>
                        <li className='admin__menu-content'>
                              <p className='admin-content'>thống kê doanh thu</p>
                        </li>
                        <li className='admin__menu-content'>
                              <p className='admin-content'>thêm khuyến mãi cho sản phẩm</p>
                        </li>
                    </ul>
                        
                    <ul className='admin__menu-title'> 
                         
                         <li className='admin__menu-content'>
                              <p className='admin-content'>Danh sách tài khoảng</p>
                        </li>
                        <li className='admin__menu-content'>
                              <p className='admin-content'>thêm tài khoản</p>
                        </li>
                        <li className='admin__menu-content'>
                              <p className='admin-content'>duyệt đơn hàng</p>
                        </li>
                        <li className='admin__menu-content'>
                              <p className='admin-content'>thêm hàng hóa</p>
                        </li>
                        <li className='admin__menu-content'>
                              <p className='admin-content'>xem danh sách hàng hóa</p>
                        </li>
                        <li className='admin__menu-content'>
                              <p className='admin-content'>thống kê doanh thu</p>
                        </li>
                        <li className='admin__menu-content'>
                              <p className='admin-content'>thêm khuyến mãi cho sản phẩm</p>
                        </li>
                    </ul>

                </div>

                <AdminPromotion />
            </div>
        </div>
    );
}

export default Admin;