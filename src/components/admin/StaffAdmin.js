import '../../css/staffadmin.css'

function StaffAdmin(){
    return(
        <div className="StaffAdmin">
          <div className="StaffAdmin-app">
            <div className="StaffAdmin__left">
                <h3 className="StaffAdmin__title"> <p className="StaffAdmin__title-icon"><i class="fa-solid fa-circle-user"></i></p> Nhân viên</h3>
                <div className="StaffAdmin__classify-staff">   
                    <div className="StaffAdmin__level"> 
                         <div className="StaffAdmin__admin-level">
                            <p className="StaffAdmin__staff-icon"> <i class="fa-solid fa-id-card"></i> Tất cả nhân viên</p> 
                        </div>
                        <div className="StaffAdmin__admin-level">
                            <p className="StaffAdmin__staff-icon"> <i class="fa-solid fa-user-tie"></i> Quản Trị viên</p> 
                        </div>
                        <div className="StaffAdmin__admin-level">
                            <p className="StaffAdmin__staff-icon"> <i class="fa-solid fa-user-tie"></i> Nhân viên</p> 
                        </div>
                    </div>
                </div>
              
            </div>
            <div className='StaffAdmin__right'>
                 <div className='admin-header'>
                    <p className="admin__heading-staff">Ảnh đại diện</p>
                    <p className="admin__heading-staff">Họ tên</p>
                    <p className="admin__heading-staff">Giới tính</p>
                    <p className="admin__heading-staff">Chức vụ</p>
                    <p className="admin__heading-staff">Quản lý</p>
                 </div>
                <div className="admin-staff">
                    <div className="admin__heading-staff"><img className="admin__img-staff" src="https://phunugioi.com/wp-content/uploads/2020/10/hinh-anh-avatar-nam-dep.jpg" alt="alo"></img></div>  
                    <p className="admin__heading-staff ">Nguyễn Trần Thanh Điền</p>
                    <p className="admin__heading-staff">Nam</p>
                    <p className="admin__heading-staff">Quản Trị Viên</p>
                    <p className="admin__heading-staff">
                       <div className="admin_manager-staff">
                       <div className="admin__edit-staff">
                           <p className='icon-editstaff-admin'><i class="fa-solid fa-pen"></i></p>
                            </div>
                            <div className="admin__space"></div>
                            <div className="admin__edit-staff">
                                <p className='icon-deletestaff-admin'><i class="fi fi-rr-user-remove unte"></i>  </p>
                            </div>
                       </div>
                    </p>
                </div>
                <div className="admin-staff">
                    <div className="admin__heading-staff"><img className="admin__img-staff" src="https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-dai-dien-dep.jpg" alt="alo"></img></div>  
                    <p className="admin__heading-staff ">Bùi Việt Anh</p>
                    <p className="admin__heading-staff">Nam</p>
                    <p className="admin__heading-staff">Quản Trị Viên</p>
                    <p className="admin__heading-staff">
                       <div className="admin_manager-staff">
                       <div className="admin__edit-staff">
                           <p className='icon-editstaff-admin'><i class="fa-solid fa-pen"></i></p>
                            </div>
                            <div className="admin__space"></div>
                            <div className="admin__edit-staff">
                                <p className='icon-deletestaff-admin'><i class="fi fi-rr-user-remove unte"></i>  </p>
                            </div>
                       </div>
                    </p>
                </div>
                <div className="admin-staff">
                    <div className="admin__heading-staff"><img className="admin__img-staff" src="https://i.pinimg.com/474x/8f/33/30/8f3330d6163782b88b506d396f5d156f.jpg" alt="alo"></img></div>  
                    <p className="admin__heading-staff ">Võ Trung Kiên</p>
                    <p className="admin__heading-staff">Nam</p>
                    <p className="admin__heading-staff">Quản Trị Viên</p>
                    <p className="admin__heading-staff">
                       <div className="admin_manager-staff">
                       <div className="admin__edit-staff">
                           <p className='icon-editstaff-admin'><i class="fa-solid fa-pen"></i></p>
                            </div>
                            <div className="admin__space"></div>
                            <div className="admin__edit-staff">
                                <p className='icon-deletestaff-admin'><i class="fi fi-rr-user-remove unte"></i>  </p>
                            </div>
                       </div>
                    </p>
                </div>
                   
            </div>
          </div>  
        </div>
    )
}

export default StaffAdmin;