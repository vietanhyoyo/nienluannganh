import React, { useEffect, useState } from 'react'
import '../../../css/adminedit.css'
function Adminedit() {
 
    const [image,setImage] = useState('');


    useEffect(()=>{
      return () => {
        image && URL.revokeObjectURL(image.preview);
      }
    },[image])
    const changefile = (e) => {
        const file  = e.target.files[0];

        file.preview = URL.createObjectURL(file);

        setImage(file);
    }
    
 
  return (
    <div>

                <div className='lopphu'>
                <form>
                    <div className='loptrong'>
                       <div className='content'>
                            <div className='content-top'>
                                <div className='content-top-items content-top-left'>
                                      <h3>Thông tin nhân viên</h3>
                                     {image &&  
                                     <img src={image.preview} alt='Ảnh đại diện' className='content-top-left-img'/> 
                                      ||  <img src='' alt='Chưa có ảnh đại diện' className='content-top-left-img'/>} 
                                        <label htmlFor='file-staff' className='square_btn35'>Chọn ảnh đại diện</label>
                                        <input 
                                        type={'file'}
                                        onChange={changefile}
                                        id = 'file-staff'
                                        />

                                </div>   
                                <div className='content-top-items content-top-mid'>
                                      <h3 className='content-top-mid-ten'>Nguyễn Trần Thanh Điền</h3>
                                      <p className='content-top-mid-chucvu'>QUẢN TRỊ VIÊN</p>
                                      
                                </div>      
                                <div className='content-top-items content-top-right'>
                                      <div className='content-top-right-left'>
                                          <p className='content-top-right-left-items'>
                                              <i class="fa-solid fa-phone"></i> 
                                          </p>
                                          <p className='content-top-right-left-items'>
                                               <i class="fa-solid fa-house-user"></i>
                                          </p>
                                          <p className='content-top-right-left-items'>
                                               <i class="fa-solid fa-calendar"></i>
                                          </p>
                                          <p className='content-top-right-left-items'>
                                                 <i class="fa-solid fa-venus-mars"></i>
                                          </p>
                                          <p className='content-top-right-left-items'>
                                                 <i class="fa-solid fa-envelope"></i>
                                          </p>
                                      </div>
                                      <div className='content-top-right-right'>

                                      </div>
                                      
                                </div>                               
                            </div>
                            <div className='content-bottom'>
                                
                            </div>                      
                       </div>
                    </div>
                </form> 
                </div>


    </div>
  )
}

export default Adminedit