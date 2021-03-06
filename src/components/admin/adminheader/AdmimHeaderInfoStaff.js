import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../../css/adminhearderinfo.css'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../../../contexts/LoginContext'
import AdminEditPrivate from '../adminstaff/AdminEditPrivate'
function AdmimHeaderInfoStaff() {
  const usenavigate = useNavigate()
  /**Lấy login Context */
  const [mount , setMount] = useState(false);
  const loginState = useContext(LoginContext);
  return (
    <div className='AdmimHeaderInfoStaff'>
      {/* title */}
  <Link to='/admin/infomation' className='AdmimHeaderInfoStaff-text AdmimHeaderInfoStaff-textlink'>
        <p className='AdmimHeaderInfoStaff-text2'>
          <p className='AdmimHeaderInfoStaff-text-icon'><i className="fa-solid fa-circle-info"></i></p>  Xem thông tin
        </p>
  </Link> 
    
        {/* Title */}
     <p className='AdmimHeaderInfoStaff-text'
      onClick={()=> {
        
     if(localStorage.getItem("accessToken") !== undefined){
      localStorage.removeItem("accessToken");
      loginState.handleSetLogin(null);
      loginState.setRole(null);
      usenavigate('/');
     }else{
      usenavigate('/');
     }
   
   }}>
          <p className='AdmimHeaderInfoStaff-text-icon'><i className="fa-solid fa-arrow-right-from-bracket"></i></p>  Đăng xuất
        </p>
        
    </div>


  )
}

export default AdmimHeaderInfoStaff