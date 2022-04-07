import React, { useEffect, useState } from 'react'
import '../../../css/adminedit.css'
function Adminedit(props) {
 
    const [image,setImage] = useState();
    const gender = props.staff.gioitinh;
   
    const d = new Date(props.staff.ngaysinh)
    const nam  =   d.getFullYear();
    const thang  =   d.getMonth()+1;
    const ngay  =   d.getDate()-1;
    const ngaysinh = ngay + '/' + thang + '/' + nam
   

    const [info,setInfo] = useState({
        id : props.staff.id,
        hoten  : props.staff.hoten,
        chucvu    : props.staff.chucvu,
        diachi  : props.staff.diachi,
        hinhanh : props.staff.hinhanh,
        gioitinh : props.staff.gioitinh,
        sdt:  props.staff.sdt,
        ngaysinh:  props.staff.ngaysinh,
        email : props.staff.email
        
    });
    console.log(info)
    useEffect(()=>{  
        const nam = document.getElementById('Gender-checked-male')
        const nu = document.getElementById('Gender-checked-female')
        if(gender === 'Nam' || gender === 'nam' ){
            nam.checked = true
        }else{
            nu.checked = true;
        }
    },[gender])


    useEffect(()=>{
      return () => {
        image && URL.revokeObjectURL(image.preview);
      }
    },[image])
    const changefile = (e) => {
        const file  = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setImage(file); 
        setInfo({...info, hinhanh : e.target.files[0]})
    }
    console.log('Ảnh');
    console.log(info.hinhanh);
    
      
  return (
    <div>

                <div className='lopphu'>
               
                    <div className='loptrong' >
                       <div className='content'>
                       <form>
                            <div className='content-top'>
                                <div className='content-top-items content-top-left'>
                                      <h3>Thông tin nhân viên</h3>
                                     {image ?    
                                     <img src={image.preview} alt='Ảnh đại diện' className='content-top-left-img'/> 
                                      :  <img src={props.staff.hinhanh} alt='Chưa có ảnh đại diện' className='content-top-left-img'/>} 
                                        <label htmlFor='file-staff' className='square_btn35'>Chọn ảnh đại diện</label>
                                        <input 
                                        type={'file'}
                                        onChange={changefile}
                                        id = 'file-staff'
                                        />
                                </div>   
                                <div className='content-top-items content-top-mid'>
                                      <h3 className='content-top-mid-ten'>
                                          <input  className='Admin__staff-input' defaultValue={props.staff.hoten} onChange={(e)=>{
                                        setInfo({...info, hoten : e.target.value})
                                        }}/>
                                        </h3>
                                      <p className='content-top-mid-chucvu'>
                                          <select className='Admin__staff-input' 
                                          onChange={(e)=> setInfo({...info, chucvu : e.target.value})}
                                          defaultValue= {props.staff.chucvu}
                                          >        
                                            <option value="admin">Quản trị viên</option>  
                                            <option value="nhanvien"> Nhân viên</option>
                                          </select>
                                        
                                      
                                      </p>
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
                                              <input name='' className='Admin__staff-input' defaultValue={props.staff.sdt}
                                              
                                              onChange={(e)=>{
                                                setInfo({...info, sdt : e.target.value})
                                                }}
                                              />
                                          </p>
                                          <p className='content-top-right-right-items'>
                                          <textarea name="comment" form="usrform" cols="23" className='text-are-staff' placeholder='Nhập địa chỉ' 
                                          defaultValue={props.staff.diachi}
                                          onChange={(e)=>{
                                            setInfo({...info, diachi : e.target.value})
                                            }}
                                          ></textarea>
                                          </p>
                                          <p className='content-top-right-right-items'>
                                          <input name='date-input-staffadmin'  className='Admin__staff-input' defaultValue={ngaysinh}
                                           onChange={(e)=>{
                                            setInfo({...info, ngaysinh : e.target.value})
                                            }}
                                          
                                          />
                                          </p>
                                          <p className='content-top-right-right-items'>
                                              <div className='div-checked'>
                                                  <div className='div-checked-items'>
                                                      <input type={'radio'} name='checkrender' id='Gender-checked-male'  className='option-input radio' defaultValue={'Nam'}
                                                      
                                                        onClick={(e)=>{
                                                        setInfo({...info, gioitinh : 'Nam'})
                                                        }}
                                                      /> 
                                                      <label htmlFor='Gender-checked-male'>Nam</label>
                                                  </div>
                                                  <div className='div-checked-items'>
                                                     <input type={'radio'} name='checkrender' id='Gender-checked-female' className='option-input radio' defaultValue={'Nữ'}
                                                      onClick={(e)=>{
                                                        setInfo({...info, gioitinh : 'Nữ'})
                                                        }}
                                                     /> 
                                                      <label htmlFor='Gender-checked-female'>Nữ</label>
                                                  </div>
                                              </div>                    
                                          </p>
                                          <p className='content-top-right-right-items'>
                                          <input name='' className='Admin__staff-input' defaultValue={props.staff.email}/>
                                          </p>
                                      </div>
                                      
                                </div>                               
                            </div>
                            </form> 
                            <div className='content-bottom'>
                                    <button className='button-6'type='submit' >Cập nhật</button>
                                    <button className='button-6'>Hủy bỏ</button>
                                    <button className='button-6' onClick={props.onClick}>Quay lại</button>
                            </div>                      
                       </div>
                    </div>
               
                </div>


    </div>
  )
}

export default Adminedit