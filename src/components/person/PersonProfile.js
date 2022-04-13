import '../../css/presonprofile.css';
import PersonProfileQH from './personProfile/PersonProfileQH';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { LoginContext } from '../../contexts/LoginContext';

export default function PersonProfile() {
    const idKH = useContext(LoginContext)
    const [load, setLoad] = useState({
        _id: '',
        hoten: '',
        sdt: '',
    });
    const [TP, setTP] = useState([{
       _id: '',
       ten: ''
    }]);
    const [selectTP, setSelectTP] = useState({
        _id: '',
        ten: ''
     });
    useEffect(() => {
        axios.get('/address/tinh')
            .then(response => response.data)
            .then(response => {
                setTP(response);
            });
    },[]);
    useEffect(() => {
        axios.post('/customer/infokhachhang', {id : idKH.iduser})
            .then(response => response.data)
            .then(response => {
                setLoad(response);
            });
    },[idKH.iduser]);
    
    return (
        <>
            <div className='person__profile'>
                <h2 className='person__profile-title'>Thông tin tài khoản</h2>
                <div className="person__profile__row">
                    <label className="person-profile__row-label">Họ Tên:</label>
                    <input className="person__profile__row-input-wrapper-input" value={load.hoten}></input>
                </div>
                <div className="person__profile__row">
                    <label className="person-profile__row-label">Số điện thoại:</label>
                    <input className="person__profile__row-input-wrapper-input" value={load.sdt}></input>
                </div>
                <div className="person__profile__row">
                    <label className="person-profile__row-label">Email:</label>
                    <input type={'email'} className="person__profile__row-input-wrapper-input"></input>
                </div>
                <div className="person__profile__row person__profile__row-radio">
                    <label className="person-profile__row-label">Email:</label>
                    <span className='person__profile__row-span'>
                        <input name='sex' type={'radio'} className="person__profile__row-span-radio"></input>
                        <label className='person__profile__row-span-sex'>Nam</label>
                    </span>
                    <span className='person__profile__row-span'>
                        <input name='sex' type={'radio'} className="person__profile__row-span-radio"></input>
                        <label className='person__profile__row-span-sex'>Nữ</label>
                    </span>
                </div>
                <div className="person__profile__row">
                    <label className="person-profile__row-label">Ngày sinh:</label>
                    <input type={'date'} className="person__profile__row-input-wrapper-input"></input>
                </div>
                <div className="person__profile__row">
                    <label className="person-profile__row-label">Tỉnh/Thành phố:</label>
                    <select onChange={(e)=>{
                                setSelectTP(TP[Number(e.target.value)]);
                                console.log(selectTP);
                            }} value={0} className="person__profile__row-input-wrapper-input">
                        {TP.map((ele, index)=>{
                            return <option key={index} value={index}>{ele.ten}</option>
                        })}
                    </select>
                </div>
                <PersonProfileQH
                    id={selectTP._id}
                    ten={selectTP.ten}
                />
                <div className="person__profile__row">
                    <label className="person-profile__row-label">Phường/Xã:</label>
                    <input type={'text'} className="person__profile__row-input-wrapper-input"></input>
                </div>
                <div className="person__profile__row">
                    <label className="person-profile__row-label">Só nhà:</label>
                    <input type={'text'} className="person__profile__row-input-wrapper-input"></input>
                </div>
                <div className="person__profile__row">
                    <div className='button button_update'>
                        Cập nhật
                    </div>
                </div>
            </div>
        </>
    );
}