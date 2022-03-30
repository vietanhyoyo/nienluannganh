import '../../css/staffadmin.css'
import AdminStaff from './adminstaff/AdminStaff.js';
import {useState} from 'react'
import Adminedit from './adminstaff/Adminedit';
import Admininfomation from './adminstaff/Admininfomation';
function StaffAdmin(){
    const [staff,setStaff] = useState([
        {
            id : 1,
            hoten  : 'Nguyễn Trần Thanh Điền',
            chucvu    : 'Quản trị viên',
            diachi  : '3/2 Ninh Kieu Can Tho',
            hinhanh : 'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2020/09/avatar-lolita-4.jpg?fit=656%2C20000&quality=95&ssl=1',
            gioitinh : 'Nam',
            sdt:  '0966631453',
            ngaysinh:  '13/06/2000',
            email : 'dienB1805751@gmail.com'
        },
        {
            id : 2,
            hoten  : 'Bùi Việt Anh',
            chucvu    : 'Quản trị viên',
            diachi  : '3/2 Ninh Kieu Can Tho',
            hinhanh : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfhj69OYACaPUzkW-mLSadNrnwzz6S-LrWUw&usqp=CAU',
            gioitinh : 'Nam',
            sdt:  '0966631453',
            ngaysinh:  '02/03/2000',
            email : 'anhB1805751@gmail.com'
        },
        {
            id : 3,
            hoten  : 'Phan Thị Phương Thanh',
            chucvu    : 'Quản trị viên',
            diachi  : '3/2 Ninh Kieu Can Tho',
            hinhanh : 'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2020/09/avatar-lolita-4.jpg?fit=656%2C20000&quality=95&ssl=1',
            gioitinh : 'Nữ',
            sdt:  '19931325412',
            ngaysinh:  '13/06/2000',
            email : 'ThanhB273000@gmail.com'
        },
        
    ])
    // Mở form edit 
    const [editstaff,setEditstaff] = useState(false);
    // Mở form infomation
    const [infomation,setInfomation] = useState(false);
    // Giữ giá trị để hiển thị các thông tin nhân viên cụ thể [ID]
    const [index,setIndex] = useState(-1);
    



    const OpenFormEditStaff = () => {
        setEditstaff(!editstaff);
    }
    const OpenForminfoStaff = () => {
        setInfomation(!infomation);   
    }
    const setIndexArray = (value) => {
        setIndex(value)
        console.log(value)
    }

    

    
    return(
        <div className="StaffAdmin">
            <div className='StaffAdmin__filter-title'>Danh sách</div>
            {/* DIV Search staff */}
          
           <div className='StaffAdmin__search'>
                    <label className='StaffAdmin__search-icon' htmlFor='StaffAdmin__search-input-fl'> 
                         <i className="fa-solid fa-magnifying-glass"></i>
                    </label>
                   <input type='text' id='StaffAdmin__search-input-fl' className='StaffAdmin__search-input' 
                     placeholder='Nhập tên nhân viên cần tìm...'/>
            </div>
            {/* DIV filter staff*/}
          
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
                            onClick = {OpenFormEditStaff}
                            onClick2 = {OpenForminfoStaff} 
                            onClick3 = {setIndexArray}
                            index = {index}
                        />
                    )
                })}
                {/*  */}


            </div>
                
             {editstaff &&  
             <Adminedit
               onClick = {OpenFormEditStaff}
               staff = {staff[index]}
             />}  
             {infomation &&   
             <Admininfomation
              onClick = {OpenForminfoStaff}
              staff = {staff[index]}
             />}
          


        </div>
    )
}

export default StaffAdmin;