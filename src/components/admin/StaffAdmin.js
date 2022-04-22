import '../../css/staffadmin.css'
import AdminStaff from './adminstaff/AdminStaff.js';
import { useState } from 'react'
import Adminedit from './adminstaff/Adminedit';
import Admininfomation from './adminstaff/Admininfomation';
import { useEffect } from 'react';
import axios from 'axios';
function StaffAdmin() {

    // Mở form edit 
    const [editstaff, setEditstaff] = useState(false);
    // Mở form infomation
    const [infomation, setInfomation] = useState(false);
    // Giữ giá trị để hiển thị các thông tin nhân viên cụ thể [ID]
    const [index, setIndex] = useState(-1);

    const [staff, setStaff] = useState([
        {
            hoten: 'server chưa chạy',
            chucvu: 'admin',
            diachi: '3/2 Ninh Kieu Can Tho',
            hinhanh: 'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2020/09/avatar-lolita-4.jpg?fit=656%2C20000&quality=95&ssl=1',
            gioitinh: 'Nam',
            sdt: '0966631453',
            ngaysinh: '13/06/2000',
            email: 'dienB1805751@gmail.com',
            matkhau: 'aloha123'
        }
    ])



    const a = () => axios.get("/employee/danhsachNhanVien")
        .then(res => res.data)
        .then(res => {
            setStaff(res);
        })
        .catch(function (error) {
            console.log(error);
        });
    useEffect(() => {
        a()
    }, [])
    // Bật tắt form edit và infomation
    const OpenFormEditStaff = () => {
        setEditstaff(!editstaff);
    }
    const OpenForminfoStaff = () => {
        setInfomation(!infomation);
    }
    // send index staff cho edit và infomation render
    const setIndexArray = (value) => {
        setIndex(value)
    }

    const filterstaff = [
        {
            id: 1,
            name: 'Tất cả nhân viên',
            value: 'all'
        },
        {
            id: 2,
            name: 'Quản trị viên',
            value: 'admin'
        },
        {
            id: 3,
            name: 'Nhân viên',
            value: 'nhanvien'
        },
    ]
    // set value và css cho filter lọc nhân viên
    const [idfilter, setIdfilter] = useState(0);
    const [valuefilter, setValuefilter] = useState('all')
    const setmountfilter = (index) => {
        setIdfilter(filterstaff[index].id - 1);
        setValuefilter(filterstaff[index].value)
    }

    const b = () => axios.get(`/employee/locnhanvien?id=${valuefilter}`)
        .then(response => response.data)
        .then(function (response) {
            setStaff(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    /**Name filter: Tìm tên nhân viên */
    const [namefilter, setNameFilter] = useState('');
    useEffect(() => {
        if (valuefilter === 'all') {
            a()
        } else {
            b()
        }
    }, [valuefilter])


    return (
        <div className="StaffAdmin">
            <div className='StaffAdmin__filter-title'>Danh sách</div>
            {/* DIV Search staff */}

            <div className='StaffAdmin__search'>
                <label className='StaffAdmin__search-icon' htmlFor='StaffAdmin__search-input-fl'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </label>
                <input type='text' id='StaffAdmin__search-input-fl' className='StaffAdmin__search-input'
                    onChange={e => setNameFilter(e.target.value)}
                    value={namefilter}
                    placeholder='Nhập tên nhân viên cần tìm...' />
            </div>
            {/* DIV filter staff*/}

            <div className='StaffAdmin__filter'>

                {filterstaff.map((title, index) => (
                    <div className={idfilter === index ? 'StaffAdmin__filter-items StaffAdmin__filter-items-css' : 'StaffAdmin__filter-items'}
                        key={index}
                        onClick={() => {
                            setNameFilter('');
                            if (filterstaff.value === 'all') {
                                
                            }
                            else {
                                setmountfilter(index)
                            }
                        }
                        }
                    >{title.name}</div>
                ))}

            </div>
            {/* TITLE */}
            <div className='StaffAdmin__manager'>
                <div className='StaffAdmin__manager-title'>

                    <div className='StaffAdmin__manager-title-items StaffAdmin__manager-title-items-image'>Ảnh</div>
                    <div className='StaffAdmin__manager-title-items StaffAdmin__manager-title-items-name'>Tên</div>
                    <div className='StaffAdmin__manager-title-items StaffAdmin__manager-title-items-age'>Tuổi</div>
                    <div className='StaffAdmin__manager-title-items StaffAdmin__manager-title-items-gender'>Giới tính</div>
                    <div className='StaffAdmin__manager-title-items StaffAdmin__manager-title-items-gender'>chức vụ</div>
                    <div className='StaffAdmin__manager-title-items StaffAdmin__manager-title-items-number'>Số điện thoại</div>
                    <div className='StaffAdmin__manager-title-items StaffAdmin__manager-title-items-manager'>Quản lý</div>
                </div>
                {/* DIV NHÂN VIÊN */}
                {staff.map((staffitems, index) => {
                    return (
                        <AdminStaff
                            key={index}
                            staff={staffitems}
                            onClick={OpenFormEditStaff}
                            onClick2={OpenForminfoStaff}
                            onClick3={setIndexArray}
                            rerender={a}
                            index={index}
                            id={staff[index]._id}
                            staffdate={staff[index]}
                            namefilter={namefilter}
                        />
                    )
                })}
                {/*  */}


            </div>

            {editstaff &&
                <Adminedit
                    onClick={OpenFormEditStaff}
                    staff={staff[index]}
                    rerender={a}
                    rerender1={b}
                    propsrender={valuefilter}
                />}
            {infomation &&
                <Admininfomation
                    onClick={OpenForminfoStaff}
                    staff={staff[index]}
                />}



        </div>
    )
}

export default StaffAdmin;