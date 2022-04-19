import axios from 'axios';
import React, {   useEffect, useState } from 'react'
import '../../../css/adminedit.css'
function Adminedit(props) {

    const gender = props.staff.gioitinh;
    const d = new Date(props.staff.ngaysinh)
    const nam  =   d.getFullYear();
    const thang  =   d.getMonth()+1;
    const ngay  =   d.getDate();
    const ngaysinh =  nam+'-'+thang+'-'+ngay
    var chucvu = '';
    
    const [info,setInfo] = useState({
        _id : props.staff._id,
        hoten  : props.staff.hoten,
        chucvu    : props.staff.chucvu,
        diachi  : props.staff.diachi,
        hinhanh : props.staff.hinhanh,
        gioitinh : props.staff.gioitinh,
        sdt:  props.staff.sdt,
        ngaysinh:  ngaysinh,
        matkhau : props.staff.matkhau,
        email : props.staff.email
    });
    if(info.chucvu === 'admin'){
        chucvu ='Quản trị viên'
    }
    if(info.chucvu ==='nhanvien'){
        chucvu ='Nhân viên'
    }
    // Checked mặc định của giới tính
    useEffect(()=>{  
        const nam = document.getElementById('Gender-checked-male')
        const nu = document.getElementById('Gender-checked-female')
        if (gender === 'Nam') {
            nam.checked = true
        } else {
            nu.checked = true;
        }
    }, [gender])

    // Checked mặc định của chức vụ
   


    const [image,setImage] = useState();

    const changefile = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setImage(file); 
        setInfo({...info, hinhanh : file.name})
    }
    useEffect(() => {
        return () => {
            image && URL.revokeObjectURL(image.preview);
        }
    }, [image])
    

    // Check email
    function IsInvalidEmail(the_email) {
        var at = the_email.indexOf("@");
        var dot = the_email.lastIndexOf(".");
        var space = the_email.indexOf(" ");
        
       if ((at !== -1) && //có ký tự @
        (at !== 0) && //ký tự @ không nằm ở vị trí đầu
        (dot !== -1) && //có ký tự .
        (dot > at + 1) && (dot < the_email.length - 1) //phải có ký tự nằm giữa @ và . cuối cùng
        &&
        (space === -1)) //không có khoẳng trắng 
        {
        return true;
        } else {
          alert("Địa chỉ không hợp lệ : định dạng (<tên>@gmail.com)");
        return false;
        }
    }

    var name = true;
    var address = true;
    var picture = true;
    var gendertrue =true;
    var password = true;
    var phonenumber = true;
    var email = true;

    
    // Cập nhật lại dữ liệu
    const UpdateInfo = () =>{
        if(info.hinhanh === undefined || info.hinhanh === ''){
            picture=false;
            alert('Chưa có ảnh đại diện');
        }
        if(info.hoten === '' || /[0-9]/.test(info.hoten) === true){
            name=false
            alert('Tên không được rỗng và không có được có ký tự số')
        }
        if(info.diachi === ''){
            address=false
            alert('Địa chỉ không được rỗng')
        }
        if(info.gioitinh === ''){
            gendertrue=false
            alert('Chưa chọn giới tính')
        }
        if(info.matkhau === '' || info.matkhau.length < 5){
            password=false
            alert('Mật khẩu không được rỗng hoặc mật khẩu phải có độ dài trên 5 kí tự ')
        }
        
        if(IsInvalidEmail(info.email) === false){
                email = false;
        }
        
        
       
        if(picture ===true && phonenumber ===true && email ===true && name === true 
            && gendertrue === true && address ===true && password ===true)
            {
            let formData = new FormData();
            
            formData.append(`fileImage`, image);
                    /**Gửi API */
                axios.post('/products/themsanphamhinhanh', formData)
                .then(response => {
                console.log(response.data)
                    //    post lên
                axios.post('/employee/suathongtinnhanvien', info)
                    //  lấy dữ liệu trả về
                    .then(response => { 
                        console.log(response.data)
                       if(response.data === 'updatesuccessfully'){
                            alert('Thêm thành công')
                        }else{
                            alert('Thêm thất bại')
                        }
                    })
                    .catch(err => console.log(err))
                     })
                     .catch(err => console.log(err)); 
            }
    }
    



    return (
        <div>

            <div className='lopphu'>

                <div className='loptrong' >
                    <div className='content'>
                        
                            <div className='content-top'>
                                <div className='content-top-items content-top-left'>
                                    <h3>Thông tin nhân viên</h3>
                                    {image ?
                                        <img src={image.preview} alt='Ảnh đại diện' className='content-top-left-img' />
                                        : <img src={props.staff.hinhanh} alt='Chưa có ảnh đại diện' className='content-top-left-img' />}
                                    <label htmlFor='file-staff' className='square_btn35'>Chọn ảnh đại diện</label>
                                    <input
                                        type={'file'}
                                        onChange={changefile}
                                        id='file-staff'
                                    />
                                </div>
                                <div className='content-top-items content-top-mid'>
                                      <h3 className='content-top-mid-ten'>
                                          <input  className='Admin__staff-input' defaultValue={props.staff.hoten} onChange={(e)=>{
                                        setInfo({...info, hoten : e.target.value})
                                        }}/>
                                        </h3>
                                    <p className='content-top-mid-chucvu'>
                                          {chucvu}
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
                                              <input  className='Admin__staff-input' defaultValue={props.staff.sdt}
                                              
                                              onChange={(e)=>{
                                                setInfo({...info, sdt : e.target.value})
                                                }}
                                              />
                                          </p>
                                          <p className='content-top-right-right-items'>
                                          <textarea name="comment" form="usrform" cols="35" className='text-are-staff' placeholder='Nhập địa chỉ' 
                                          defaultValue={props.staff.diachi}
                                          onChange={(e)=>{
                                            setInfo({...info, diachi : e.target.value})
                                            }}
                                          ></textarea>
                                          </p>
                                          <p className='content-top-right-right-items'>
                                          <input name='date-input-staffadmin' type={'date'}  className='Admin__staff-input Admin__staff-input-date'
                                            defaultValue={ngaysinh}
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
                                          <input  className='Admin__staff-input' defaultValue={props.staff.email}
                                              
                                              onChange={(e)=>{
                                                setInfo({...info, email : e.target.value})
                                                }}
                                              />
                                          </p>
                                      </div>
                                      
                                </div>                               
                            </div>
                       
                        <div className='content-bottom'>
                           
                           
                            <button className='button-6' 
                            onClick={()=> 
                            {
                                
                                UpdateInfo()    
                                
                            }}
                            >Cập nhật</button>
                            <button className='button-6' onClick={()=>{
                                props.rerender()
                               
                                }}>Quay lại</button>
                            
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Adminedit