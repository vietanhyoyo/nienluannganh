import React, { useEffect } from 'react'

function Admininfomation(props) {

    if(props.staff.chucvu === 'nhanvien'){
        props.staff.chucvu = 'Nhân viên'
    }
    if(props.staff.chucvu === 'admin'){
        props.staff.chucvu = 'Quản trị viên'
    }
    
    const d = new Date(props.staff.ngaysinh)
    const nam  =   d.getFullYear();
    const thang  =   d.getMonth()+1;
    const ngay  =   d.getDate()-1;
    const ngaysinh = ngay + '/' + thang + '/' + nam
    const t = new Date(props.staff.createdAt)
    const nam1  =   t.getFullYear();
    const thang1  =   t.getMonth()+1;
    const ngay1  =   t.getDate()-1;
    const ngayvao= ngay1 + '/' + thang1 + '/' + nam1
    



    return (
        <div>

                    <div className='lopphu'>
                    <form>
                        <div className='loptrong' >
                           <div className='content'>
                              
                                <div className='content-top'>
                                    <div className='content-top-items content-top-left'>
                                          <h3>Thông tin nhân viên</h3>
                                           
                                          { <img src={props.staff.hinhanh} alt='Ảnh đại diện' className='content-top-left-img'/> 
                                          ||  <img src={''} alt='Chưa có ảnh đại diện' className='content-top-left-img'/>} 
                                           
                                            
                                    </div>  
                                    <div className='content-top-items content-top-mid'>
                                          <h3 className='content-top-mid-ten'>{props.staff.hoten}</h3>
                                          <p className='content-top-mid-chucvu'>{props.staff.chucvu}</p>
                                          <p className='content-top-mid-ngayvao'>Ngày vào công ty : {ngayvao}</p>
                                    </div>      
                                    <div className='content-top-items content-top-right'>
                                          <div className='content-top-right-left'>
                                              <p className='content-top-right-left-items'>
                                                  <i className="fa-solid fa-phone"></i> 
                                              </p>
                                              <p className='content-top-right-left-items'>
                                                   <i className="fa-solid fa-house-user"></i>
                                              </p>
                                              <p className='content-top-right-left-items'>
                                                   <i className="fa-solid fa-calendar"></i>
                                              </p>
                                              <p className='content-top-right-left-items'>
                                                     <i className="fa-solid fa-venus-mars"></i>
                                              </p>
                                              <p className='content-top-right-left-items'>
                                                     <i className="fa-solid fa-envelope"></i>
                                              </p>
                                          </div>
                                          <div className='content-top-right-right'>
                                              <p className='content-top-right-right-items'>
                                              {props.staff.sdt}
                                              </p>
                                              <p className='content-top-right-right-items'>
                                              {props.staff.diachi}
                                              </p>
                                              <p className='content-top-right-right-items'>
                                              {ngaysinh}
                                              </p>
                                              <p className='content-top-right-right-items'>
                                                  <div className='div-checked'>
                                                  {props.staff.gioitinh}
                                                  </div>                    
                                              </p>
                                              <p className='content-top-right-right-items'>
                                              {props.staff.email}
                                              </p>
                                          </div>
                                          
                                    </div>                               
                                </div>
                              
                                <div className='content-bottom'>
                                        <button className='button-6' onClick={props.onClick}>Quay lại</button>
                                </div>                      
                           </div>
                        </div>
                     </form> 
                    </div>
    
    
        </div>
      )
}

export default Admininfomation