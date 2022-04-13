import axios from "axios";
import {  useEffect, useState } from "react";


function AdminStaff(props){
    
        const d = new Date(props.staffdate.ngaysinh)
        const nam  =   d.getFullYear();
        const thang  =   d.getMonth()+1;
        const ngay  =   d.getDate();
        const ngaysinh = ngay + '/' + thang + '/' + nam
        var k = '';
        if(props.staff.chucvu === 'admin'){
           k = 'Quản trị viên'
        }else{
            k = 'Nhân viên'
        }
        
        
    return(
                <div className='StaffAdmin__manager-content' >
                   
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-image'>
                   
                        <img src={props.staff.hinhanh} alt='alo' className='StaffAdmin__manager-content-items-tagimage'/>
                        </div>    
                         
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-name'>{props.staff.hoten}</div>    
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-age'>{ngaysinh}</div>    
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-gender'>{props.staff.gioitinh}</div>   
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-gender'>{k}</div>     
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-number'>{props.staff.sdt}</div>    
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-manager'>
                            
                            <div className='StaffAdmin__manager-content-items-icon' onClick={()=>
                                 {
                                     props.onClick3(props.index)
                                     props.onClick2()}}>
                                <p className='StaffAdmin__manager-content-items-icon-icon'><i className="fa-solid fa-eye"></i></p>
                                <p className='StaffAdmin__manager-content-items-icon-text'>Xem </p>
                             
                            </div>
                          
                            <div className='StaffAdmin__manager-content-items-icon-mid' onClick={()=>
                                 {
                                     props.onClick3(props.index)
                                     props.onClick()}}>
                                <p className='StaffAdmin__manager-content-items-icon-icon'><i className="fa-solid fa-pen-to-square"></i></p>
                                <p className='StaffAdmin__manager-content-items-icon-text'>Sửa</p>
                            </div>
                         {/* Div ngăn cách */}
                        
                        {/* Div ngăn cách */}
                       
                            <div className='StaffAdmin__manager-content-items-icon-right' onClick={()=> {
                                 axios.post('/employee/xoanhanvien',{
                                    id : props.staff._id})
                                 .then(response => {
                                     if(response.data ==='finishdelete'){
                                         alert('Xóa thành công');
                                         props.rerender()
                                     }
                                 })
                                 .catch(err => console.log(err));
                            }}>
                                <p className='StaffAdmin__manager-content-items-icon-icon'><i className="fa-solid fa-user-xmark"></i></p>
                                <p className='StaffAdmin__manager-content-items-icon-text'>Xóa</p>
                            </div>
                    </div>  
                     
                </div>
        )
}
export default AdminStaff;