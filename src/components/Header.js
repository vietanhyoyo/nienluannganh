import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import Search from './Search';
import { useEffect, useRef, useState, useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext'
import MenuItemList from './MenuItemList';
import logoima from '../images/logotext.png'
import axios from 'axios';

function Header() {

    /*Lấy giá trị đăng nhập */
    const loginState = useContext(LoginContext);
    const username = loginState.loginstate;
    console.log('contextHeader : ' + username);
    /*Trang thai dang nhap*/
    const dadangnhap = username === '' ? false : true;

    const bar = useRef();
    const ul = useRef();
    const close = useRef();
    const cartpath = '/cart/id=23';

    const [lists, setLists] = useState([{
        _id: "62286a59344956318319ce40",
        tenloaihang: "Rau - củ - trái cây",
        loaisanpham: [
            {
                _id: "62289f268dd8fc963c448db0",
                tenloaisanpham: "Rau củ quả",
                loaihang: "62286a59344956318319ce40",
                createdAt: "2022-03-09T12:35:50.541Z",
                updatedAt: "2022-03-09T12:35:50.541Z",
                __v: 0
            },
            {
                _id: "6229fa0c668f87e0cdc9bfc4",
                tenloaisanpham: "Trái cây",
                loaihang: "62286a59344956318319ce40",
                createdAt: "2022-03-10T13:15:56.258Z",
                updatedAt: "2022-03-10T13:15:56.258Z",
                __v: 0
            }
        ]
    }]);

    const getDataToAPI = () => axios.get('/products/loaihangloaisanpham')
        .then(response => response.data)
        .then(function (response) {
            setLists(response)
        })
        .catch(function (error) {
            console.log(error);
        });

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

    const toggleNav = () => {
        if (bar.current.classList.contains('fa-bars')) showNav();
        else unshowNav();
    }

    const checkSize = () => {
        if (window.screen.width > 700) {
            unshowNav();
        }
    }

    const handleSignOut = () => {
        loginState.handleSetLogin('');
        localStorage.removeItem('accessToken');
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
                        <div className='button header__button' onClick={handleSignOut}>
                            <i className='fa-solid fa-arrow-right-from-bracket' style={{ marginRight: "5px" }} ></i>
                            <div style={{ color: '#fff', display: 'inline' }}>Đăng xuất</div>
                        </div>
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