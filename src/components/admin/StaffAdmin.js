import '../../css/staffadmin.css'

function StaffAdmin(){
    return(
        <div className="StaffAdmin">
            {/* DIV Search staff */}
           <div className='StaffAdmin__search'>
                    <label className='StaffAdmin__search-icon' for='StaffAdmin__search-input-fl'> 
                         <i class="fa-solid fa-magnifying-glass"></i>
                    </label>
                   <input type='text' id='StaffAdmin__search-input-fl' className='StaffAdmin__search-input' 
                     placeholder='Nhập tên nhân viên cần tìm...'/>
            </div>
            {/* DIV filter staff*/}
            <div className='StaffAdmin__filter-title'>Danh sách</div>
            <div className='StaffAdmin__filter'>
                <div className='StaffAdmin__filter-items'>Quản trị viên</div>    
                <div className='StaffAdmin__filter-items'>Nhân viên</div>   
                <div className='StaffAdmin__filter-items'>Tất cả thành viên</div>   
            </div>  
            {/* TITLE */}
            <div className='StaffAdmin__manager'>
                <div className='StaffAdmin__manager-title'>
                    <div className='StaffAdmin__manager-title-items StaffAdmin__manager-title-items-image'>Ảnh</div>    
                    <div className='StaffAdmin__manager-title-items StaffAdmin__manager-title-items-name'>Tên</div>    
                    <div className='StaffAdmin__manager-title-items StaffAdmin__manager-title-items-age'>Tuổi</div>    
                    <div className='StaffAdmin__manager-title-items StaffAdmin__manager-title-items-gender'>Giới tính</div>    
                    <div className='StaffAdmin__manager-title-items StaffAdmin__manager-title-items-number'>Số điện thoại</div>    
                    <div className='StaffAdmin__manager-title-items StaffAdmin__manager-title-items-manager'>Quản lý</div>    
                </div>
                {/* DIV NHÂN VIÊN */}
                <div className='StaffAdmin__manager-content'>
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-image'>
                        <img src='https://i2.wp.com/johnothecoder.uk/wp-content/uploads/sites/11/2018/12/Mafia-Online-Avatar-600x600.jpg?ssl=1' alt='alo' className='StaffAdmin__manager-content-items-tagimage'/>
                        </div>    
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-name'>Nguyễn Trần Thanh Điền</div>    
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-age'>22</div>    
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-gender'>Nam</div>    
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-number'>0966631xxx</div>    
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-manager'>
                        <div className='StaffAdmin__manager-content-items-icon'>
                            <p className='StaffAdmin__manager-content-items-icon-icon'><i class="fa-solid fa-pen-to-square"></i></p>
                            <p className='StaffAdmin__manager-content-items-icon-text'>Edit</p>
                        </div>
                        <div className='StaffAdmin__manager-content-items-space'></div>
                        <div className='StaffAdmin__manager-content-items-icon-right'>
                        <p className='StaffAdmin__manager-content-items-icon-icon'><i class="fa-solid fa-user-xmark"></i></p>
                            <p className='StaffAdmin__manager-content-items-icon-text'>Delete</p>
                        </div>
                    </div>    
                </div>
                {/*  */}
                 {/* DIV NHÂN VIÊN */}
                 <div className='StaffAdmin__manager-content'>
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-image'>
                        <img src='https://avatarfiles.alphacoders.com/703/70382.jpg' alt='alo' className='StaffAdmin__manager-content-items-tagimage'/>
                        </div>    
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-name'>Bùi Việt Anh</div>    
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-age'>22</div>    
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-gender'>Nam</div>    
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-number'>084428+xxx</div>    
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-manager'>
                        <div className='StaffAdmin__manager-content-items-icon'>
                            <p className='StaffAdmin__manager-content-items-icon-icon'><i class="fa-solid fa-pen-to-square"></i></p>
                            <p className='StaffAdmin__manager-content-items-icon-text'>Edit</p>
                        </div>
                        <div className='StaffAdmin__manager-content-items-space'></div>
                        <div className='StaffAdmin__manager-content-items-icon-right'>
                        <p className='StaffAdmin__manager-content-items-icon-icon'><i class="fa-solid fa-user-xmark"></i></p>
                            <p className='StaffAdmin__manager-content-items-icon-text'>Delete</p>
                        </div>
                    </div>    
                </div>
                {/*  */}
            </div>
            


        </div>
    )
}

export default StaffAdmin;