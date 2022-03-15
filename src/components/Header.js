import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import Search from './Search';
import { useEffect, useRef, useState, useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext';
import HeaderAvatar from './HeaderAvatar';
import MenuItemList from './MenuItemList';
import logoima from '../images/logotext.png'
import axios from 'axios';

function Header() {

    /*Lấy giá trị đăng nhập */
    const loginState = useContext(LoginContext);
    const userid = loginState.loginstate;
    /*Kiểm tra xem đã đăng nhập hay chưa thai dang nhap*/
    const dadangnhap = userid === null ? false : true;

    const bar = useRef();
    const ul = useRef();
    const close = useRef();
    const cartpath = '/cart/id=23';

    /*Các dữ liệu của menu bar */
    const [lists, setLists] = useState([]);

    const getDataToAPI = () => axios.get('/products/loaihangloaisanpham')
        .then(response => response.data)
        .then(function (response) {
            setLists(response)
        })
        .catch(function (error) {
            console.log(error);
        });

        /*Hàm in danh sách menu list */
    const list_item = (
        <React.Fragment>
            {lists.map((list, index) =>
                <MenuItemList
                    key={index}
                    name={list.tenloaihang}
                    item={list.loaisanpham}
                    index={index}
                />
            )}
        </React.Fragment>
    );

    const showNav = () => {
        bar.current.classList.remove('fa-bars');
        bar.current.classList.add('fa-times');
        ul.current.classList.add('header__ul--show');
        close.current.classList.add('header__closebar--show');
    }

    const unshowNav = () => {
        bar.current.classList.add('fa-bars');
        bar.current.classList.remove('fa-times');
        ul.current.classList.remove('header__ul--show');
        close.current.classList.remove('header__closebar--show');
    }

    /*Đóng mở menu */
    const toggleNav = () => {
        if (bar.current.classList.contains('fa-bars')) showNav();
        else unshowNav();
    }

    const checkSize = () => {
        if (window.screen.width > 700) {
            unshowNav();
        }
    }

    useEffect(function () {
        getDataToAPI();
    }, []);

    useEffect(() => {
        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);
    });

    return (
        <div className='header'>
            <nav className='row-app header__row'>
                <div className='header__box'>
                    <div className='header__contentlogo'>
                        <Link to='/'>
                            <h1 className='header__logo'><img src={logoima} alt='logoo' /></h1>
                        </Link>
                        <div className='header__icon header__icon--bar' onClick={toggleNav}>
                            <i ref={bar} id='headerBarIcon' className='fas fa-bars' ></i>
                            <span className='header__icon__span'>Danh mục</span>
                        </div>
                    </div>
                    <div className='header__closebar' ref={close} onClick={unshowNav}></div>
                    <ul className='header__ul' ref={ul}>
                        {list_item}
                    </ul>
                </div>
                <div className='header__box' style={{ flex: '1' }}>
                    <Search />
                </div>
                <div className='header__box'>
                    <div className='header__icon'>
                        <Link to={cartpath}><i className='fas fa-shopping-basket'></i></Link>
                    </div>
                    {dadangnhap ?
                        <HeaderAvatar />
                        : <div className='button header__button'>
                            <i className='fas fa-sign-in-alt' style={{ marginRight: "5px" }} ></i>
                            <Link to='/login' style={{ color: '#fff' }}>Đăng nhập</Link>
                        </div>}
                </div>
            </nav>
        </div>
    );
}

export default Header;