import React, { useEffect, useState } from 'react'
import '../../css/adminstaffadd.css'
import StaffAdmin from './StaffAdmin'
import axios from 'axios'
function AdminStaffAdd() {
    
    

    const [postinfo,setPosinfo] = useState({
        hoten  : '',
        chucvu    : 'admin',
        diachi  : '',
        hinhanh :'',
        gioitinh : '',
        matkhau :'',
        sdt:  '',
        ngaysinh:  '',
        email : ''
    })
    
        var name = true;
        var address = true;
        var picture = true;
        var gender = true;
        var password = true;
        var phonenumber = true;
        var email = true;
        var date =true; 
        var d = new Date();


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
    



    const postInfomation = () => {
        
        if(image1 === undefined){
            picture=false;
            alert('Chưa có ảnh đại diện');
        }
        if(postinfo.hoten === '' || /[0-9]/.test(postinfo.hoten) === true){
            name=false
            alert('Tên không được rỗng và không có được có ký tự số')
        }
        if(postinfo.diachi === ''){
            address=false
            alert('Địa chỉ không được rỗng')
        }
        if(postinfo.gioitinh === ''){
            gender=false
            alert('Chưa chọn giới tính')
        }
        if(postinfo.matkhau === '' || postinfo.matkhau.length < 5){
            password=false
            alert('Mật khẩu không được rỗng hoặc mật khẩu phải có độ dài trên 5 kí tự ')
        }
        if(IsInvalidEmail(postinfo.email) === false){
            email = false;
        }
        
        if(postinfo.sdt === '' || 
        (postinfo.sdt.length < 10 || postinfo.sdt.length >11) || /[a-z]/.test(postinfo.sdt)=== true )
        {
            alert('Số điện thoại không được rỗng và theo định dạng số với độ dài(10 số hoặc 11 số)')
            phonenumber=false
        }

        if(picture ===true && phonenumber ===true && email ===true && name === true 
            && gender === true && address ===true && password ===true)
            {
                let formData = new FormData();
                 formData.append(`fileImage`, image1);
                  /**Gửi API */
        
                axios.post('/products/themsanphamhinhanh', formData)
                .then(response => {
                console.log(response.data)
                axios.post('/employee/themnhanvien', postinfo)
                    .then(response => { 
                        if(response.data === 'Themthanhcong'){
                            alert('Thêm thành công')
                        }
                        if(response.data === 'dacoemail'){
                            alert('Email đã được sử dụng')
                        }
                        if(response.data === 'dacosdt'){
                            alert('Số điện đa được sử dụng')
                        }
                        if(response.data === 'cahaiduocsudung'){
                            alert('Số điện thoại và email đã được sử dụng')
                        }
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err)); 
            }
            else
            {
                alert('Thêm thất bại');
            }

            
        
        
    }

    
   

    // State lưu ảnh
    const [image1,setImage1] = useState();
        // cập nhật ảnh ra màn hình và set ảnh vào để post lên
    const changefile = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setImage1(file); 
        setPosinfo({...postinfo,hinhanh : file.name})
        console.log(file.name);
    }
    useEffect(() => {
        return () => {
            image1 && URL.revokeObjectURL(image1.preview);
        }
    }, [image1])
    
        
    return (
    <div className='Admin__addstaff'>
            <h3 className='Admin__addstaff--title'>
                {/* icon */}
                <p className='Admin__addstaff--title-icon'><i className="fa-solid fa-circle-user"></i></p>
                {/* Title Text  */}
                Thêm nhân viên
            </h3>

            <div className='Admin__addstaff--content'>
                 <div className='Admin__addstaff--content-top'>
                     <div className='Admin__addstaff--content-left'>
                            <div className='Admin__addstaff--content-left-div'>
                                 {  image1 ?
                                     <img  src={image1.preview} alt='Không có ảnh đại diện' className='Admin__addstaff--content-left-div-img'/>
                                     : <img  src='' alt='Không có ảnh đại diện' className='Admin__addstaff--content-left-div-img Admin__addstaff--content-left-div-img1'/>
                                 }
                            </div>
                            <input type='file' id='Admin__addstaff--label'
                            onChange={
                            changefile
                            }
                            />
                            <label htmlFor='Admin__addstaff--label' className='square_btn36'>Chọn ảnh đại diện</label>
                    </div>
                    <div className='Admin__addstaff--content-right'>
                            <div className='Admin__addstaff--content-right-left'>
                                <div className="form__group">
                                    <input type="text" className="form__input" id="name" placeholder="Họ và tên" 
                                     onChange={(e) => {setPosinfo({...postinfo,hoten : e.target.value})}}
                                    />
                                    <label htmlFor="name" className="form__label">Họ và tên</label>
                                </div>
                                <div className="form__group">
                                    <input type="date" className="form__input" id="name" placeholder="Ngày sinh (dd/mm/yyyy)"  
                                       onChange={(e) => {setPosinfo({...postinfo,ngaysinh : e.target.value})}}
                                    />
                                    <label htmlFor="name" className="form__label">Ngày sinh (mm/dd/yyyy)</label>
                                </div>
                                <div className="form__group">
                                    <input type="text" className="form__input" id="name" placeholder="Số điện thoại"  
                                     onChange={(e) => {setPosinfo({...postinfo,sdt : e.target.value})}}/>
                                    <label htmlFor="name" className="form__label">Số điện thoại (10 số) [Tài khoản] </label>
                                </div>
                                <div className="form__group">
                                    <input type="password" className="form__input" id="name" placeholder="Mật khẩu" 
                                     onChange={(e) => {setPosinfo({...postinfo,matkhau : e.target.value})}}/>
                                    <label htmlFor="name" className="form__label">Mật khẩu</label>
                                </div>
                                
                                
                            </div>
                            <div className='Admin__addstaff--content-right-right'>
                                   
                                    <div className="form__group">
                                         <input type="text" className="form__input" id="name" placeholder="Địa chỉ"  
                                         onChange={(e) => {setPosinfo({...postinfo,diachi : e.target.value})}}
                                         />
                                         <label htmlFor="name" className="form__label">Địa chỉ </label>
                                    </div>
                                    <div className="form__group">
                                          <input type="email" className="form__input" id="name" placeholder="Email  (name@gmail.com)"  
                                           onChange={(e) => {setPosinfo({...postinfo,email : e.target.value})}}
                                          />
                                          <label htmlFor="name" className="form__label">Email (name@gmail.com)</label>
                                    </div>

                                    <div className='selectdiv'>

                                        <select onChange={
                                            (e) => {setPosinfo({...postinfo,chucvu : e.target.value})}}
                                            >
                                            <option value={'admin'} >
                                            Quản trị viên
                                            </option>
                                            <option value={'nhanvien'}>Nhân viên</option>

                                        </select>
                                    </div>

                                   
                                    <div className="form__group-radion-staffadmin">
                                        <label>
                                            <input type="radio" className="option-input1 radio1" name="example" value={'Nam'}
                                            onChange={(e) => {setPosinfo({...postinfo,gioitinh : e.target.value})}} />
                                            Nam
                                        </label>
                                        <label>
                                            <input type="radio" className="option-input1 radio1" name="example"  value={'Nữ'}
                                             onChange={(e) => {setPosinfo({...postinfo,gioitinh : e.target.value})}} 
                                            />
                                            Nữ
                                        </label>
                                </div>
                            </div>
                    </div>
                 </div>
                 <div className='Admin__addstaff--content-bottom'>
                     <button className='button-900' onClick={postInfomation}>Thêm</button>
                     <button className='button-900'>Hủy bỏ</button>
                 </div>
            </div>


       
    </div>
  )
}

export default AdminStaffAdd