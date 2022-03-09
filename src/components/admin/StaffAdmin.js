import '../../css/staffadmin.css'
import AdminStaff from './adminstaff/AdminStaff.js';
import {useState} from 'react'
function StaffAdmin(){
    const [staff] = useState([
        {
            id    : '1',
            name  : 'Nguyễn Trần Thanh Điền',
            age  : 22,
            image : 'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2020/09/avatar-lolita-4.jpg?fit=656%2C20000&quality=95&ssl=1',
            gender : 'Nam',
            number:  '0966631xxx',
        },
        {
            id    : '2',
            name  : 'Bùi Việt Anh',
            age  : 22,
            image : 'https://4.bp.blogspot.com/-IFxe4e4UIkk/WYVoiyGzBVI/AAAAAAAAS4M/IZBttZ_EHz06-smxaX6KX3SVgUcDOi4EwCLcBGAs/s1600/Taianhdep.club__tai-anh-dai-dien-facebook-kute-de-thuong%2B%25281%2529.jpeg',
            gender : 'Nam',
            number:  '0944431xxx',
        }
    ])
    
    return(
        <div className="StaffAdmin">
            {/* DIV Search staff */}
           <div className='StaffAdmin__search'>
                    <label className='StaffAdmin__search-icon' for='StaffAdmin__search-input-fl'> 
                         <i class="fa-solid fa-magnifying-glass"></i>
                    </label>
                   <input type='text' id='StaffAdmin__search-input-fl' className='StaffAdmin__search-input' 
                     placeholder='Nhập tên nhân viên cần tìm...'/>
            </div>
            {/* DIV filter staff*/}
            <div className='StaffAdmin__filter-title'>Danh sách</div>
            <div className='StaffAdmin__filter'>
                <div className='StaffAdmin__filter-items'>Quản trị viên</div>    
                <div className='StaffAdmin__filter-items'>Nhân viên</div>   
                <div className='StaffAdmin__filter-items'>Tất cả thành viên</div>   
            </div>  
            {/* TITLE */}
            <div className='StaffAdmin__manager'>
                <div className='StaffAdmin__manager-title'>
                    <div className='StaffAdmin__manager-title-items StaffAdmin__manager-title-items-image'>Ảnh</div>    
                    <div className='StaffAdmin__manager-title-items StaffAdmin__manager-title-items-name'>Tên</div>    
                    <div className='StaffAdmin__manager-title-items StaffAdmin__manager-title-items-age'>Tuổi</div>    
                    <div className='StaffAdmin__manager-title-items StaffAdmin__manager-title-items-gender'>Giới tính</div>    
                    <div className='StaffAdmin__manager-title-items StaffAdmin__manager-title-items-number'>Số điện thoại</div>    
                    <div className='StaffAdmin__manager-title-items StaffAdmin__manager-title-items-manager'>Quản lý</div>    
                </div>
                {/* DIV NHÂN VIÊN */}
                {staff.map((staffitems,index)=>{
                    return(
                        <AdminStaff
                            key= {index}
                            staff = {staffitems}
                        />
                    )
                })}
                {/*  */}


            </div>
            


        </div>
    )
}

export default StaffAdmin;