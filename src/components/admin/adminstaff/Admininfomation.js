import React, { useEffect } from 'react'

function Admininfomation(props) {

    if(props.staff.chucvu === 'nhanvien'){
        props.staff.chucvu = 'Nhân viên'
    }
    if(props.staff.chucvu === 'admin'){
        props.staff.chucvu = 'Quản trị viên'
    }


  
    
    return (
        <div>
            <div className='lopphu'>
                <form>
                    <div className='loptrong' >
                        <div className='content'>

                            <div className='content-top'>
                                <div className='content-top-items content-top-left'>
                                    <h3>Thông tin nhân viên</h3>

                                    {<img src={props.staff.hinhanh} alt='Ảnh đại diện' className='content-top-left-img' />
                                        || <img src={''} alt='Chưa có ảnh đại diện' className='content-top-left-img' />}


                                </div>
                              
                                <div className='content-bottom'>
                                        <button className='button-6' onClick={props.onClick}>Quay lại</button>
                                </div>                      
                           </div>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default Admininfomation