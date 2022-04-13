import '../../css/admin.css'
import AdminMenu from './adminmenu/AdminMenu';
import {Outlet} from 'react-router-dom';
import AdminHeader from './adminheader/AdminHeader';


function Admin(){  

      
      
     return(
            // Div tổng
            <div className='Admin__app'>
                  {/* Menu */}
                  <div className='Admin__app-menu'>
                        <AdminMenu/>
                  </div>
                  {/* Div cân bằng */}
                  <div className='Admin__app-left'></div>  
                  {/* Nội dung bên phải */}
                  <div className='Admin__app-right'>
                        {/* Header */}
                        <div className='Admin__app-right-Header'>
                                 <AdminHeader/>
                        </div>
                        {/* Div cân bằng */}
                        <div className='Admin__app-right-Header-position'></div>
                        {/* Content */}
                        <div className='Admin__app-right-content'>

                              <Outlet/>
                        </div>
                  </div>    


            </div>

     )
    
}

export default Admin;