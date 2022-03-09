function AdminStaff(props){
        return(
                <div className='StaffAdmin__manager-content'>
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-image'>
                        <img src={props.staff.image} alt='alo' className='StaffAdmin__manager-content-items-tagimage'/>
                        </div>    
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-name'>{props.staff.name}</div>    
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-age'>{props.staff.age}</div>    
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-gender'>{props.staff.gender}</div>    
                    <div className='StaffAdmin__manager-content-items StaffAdmin__manager-content-items-number'>{props.staff.number}</div>    
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
        )
}
export default AdminStaff;