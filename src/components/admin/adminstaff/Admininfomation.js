import React, { useEffect } from 'react'

function Admininfomation(props) {

<<<<<<< HEAD

=======
    if(props.staff.chucvu === 'nhanvien'){
        props.staff.chucvu = 'Nhân viên'
    }
    if(props.staff.chucvu === 'admin'){
        props.staff.chucvu = 'Quản trị viên'
    }


  
    
>>>>>>> 3b2a3224f097a4db0f94c4d315c11873f22e4261
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
<<<<<<< HEAD
                                <div className='content-top-items content-top-mid'>
                                    <h3 className='content-top-mid-ten'>{props.staff.hoten}</h3>
                                    <p className='content-top-mid-chucvu'>{props.staff.chucvu}</p>
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
                                            {props.staff.ngaysinh}
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
                                <button className='button-6' type='submit' >Cập nhật</button>
                                <button className='button-6'>Hủy bỏ</button>
                                <button className='button-6' onClick={props.onClick}>Quay lại</button>
                            </div>
=======
                              
                                <div className='content-bottom'>
                                        <button className='button-6' onClick={props.onClick}>Quay lại</button>
                                </div>                      
                           </div>
>>>>>>> 3b2a3224f097a4db0f94c4d315c11873f22e4261
                        </div>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default Admininfomation