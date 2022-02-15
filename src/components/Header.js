import { Link } from 'react-router-dom';
import '../css/header.css';
import Search from './Search';
import { useEffect, useRef } from 'react';

function Header() {
    const bar = useRef();
    const ul = useRef();
    const close = useRef();

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
                            <h1 className='header__logo'><b>L</b>ogo</h1>
                        </Link>
                        <div className='header__icon header__icon--bar'>
                            <i ref={bar} id='headerBarIcon' className='fas fa-bars' onClick={toggleNav}></i>
                            <span>Danh mục</span>
                        </div>
                    </div>
                    <div className='header__closebar' ref={close} onClick={unshowNav}></div>
                    <ul className='header__ul' ref={ul}>
                        <li className='header__li'><a className='header__link' href='home' >GIA VỊ</a></li>
                        <li className='header__li'><a className='header__link' href='home' >RAU CỦ</a></li>
                        <li className='header__li'><a className='header__link' href='home' >NƯỚC NGỌT</a></li>
                        <li className='header__li'><a className='header__link' href='home' >BÁNH KẸO</a></li>
                    </ul>
                </div>
                <div className='header__box' style={{flex: '1'}}>
                    <Search />
                </div>
                <div className='header__box'>
                    <div className='header__icon'>
                        <Link to='/cart'><i className='fas fa-shopping-basket'></i></Link>
                    </div>
                    <div className='button header__button'>
                        <i className='fas fa-sign-in-alt' style={{ marginRight: "5px" }} ></i>
                        <span>Đăng nhập</span>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;