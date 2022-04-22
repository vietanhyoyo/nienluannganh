import '../../css/person.css'
import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { LoginContext } from '../../contexts/LoginContext';


export default function Person() {

    const idKH = useContext(LoginContext)

    const [load, setLoad] = useState({
        _id: '',
        hoten: '',
        sdt: '',
        gioitinh: '',
        quanhuyen: '',
        diachi: '',
        hinhanh: ''
    });

    useEffect(() => {
        axios.post('/customer/infokhachhang', { id: idKH.iduser })
            .then(response => response.data)
            .then(response => {
                setLoad(response);
            });

    }, [idKH.iduser]);

    return (
        <div className='person'>
            <div className='person__content row-app'>
                <div className='person__left'>
                    <div className='person__left__row person__left__row--top'>
                        <div className='person__left__image'>
                            <img src={load.hinhanh} alt='z' />
                        </div>
                        <div className='person__left__text'>
                            <span>{load.hoten}</span>
                        </div>
                    </div>
                    <div className='person__hr'></div>
                    <Link to='/person/profile' className='person__left__row'>
                        <div className='person__left__i'>
                            <i className='fi fi-rr-portrait'></i>
                        </div>
                        <div className='person__left__span'>
                            <span>Hồ sơ</span>
                        </div>
                    </Link>
                    <Link to='/person/history' className='person__left__row'>
                        <div className='person__left__i'>
                            <i className='fi fi-rr-comment-alt'></i>
                        </div>
                        <div className='person__left__span'>
                            <span>Lịch sử mua</span>
                        </div>
                    </Link>
                    <div className='person__left__row'>
                        <div className='person__left__i'>
                            <i className='fi fi-rr-map-marker'></i>
                        </div>
                        <div className='person__left__span'>
                            <span>Địa chỉ</span>
                        </div>
                    </div>
                </div>
                <div className='person__right'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}