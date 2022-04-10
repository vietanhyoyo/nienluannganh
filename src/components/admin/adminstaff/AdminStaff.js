import { useState } from "react";

function AdminStaff(props){
        

    return(
                <div className='StaffAdmin__manager-content' >
                   
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-image'>
                   
                        <img src={props.staff.hinhanh} alt='alo' className='StaffAdmin__manager-content-items-tagimage'/>
                        </div>    
                         
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-name'>{props.staff.hoten}</div>    
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-age'>{props.staff.ngaysinh}</div>    
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-gender'>{props.staff.gioitinh}</div>    
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
                                <p className='StaffAdmin__manager-content-items-icon-text' >Sửa</p>
                            </div>
                         {/* Div ngăn cách */}
                        
                        {/* Div ngăn cách */}
                       
                            <div className='StaffAdmin__manager-content-items-icon-right'>
                                <p className='StaffAdmin__manager-content-items-icon-icon'><i className="fa-solid fa-user-xmark"></i></p>
                                <p className='StaffAdmin__manager-content-items-icon-text'>Xóa</p>
                            </div>
                    </div>  
                     
                </div>
        )
}
export default AdminStaff;