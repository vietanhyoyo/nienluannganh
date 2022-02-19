import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import Search from './Search';
import { useEffect, useRef } from 'react';
import MenuItemList from './MenuItemList';

function Header() {
    const bar = useRef();
    const ul = useRef();
    const close = useRef();
    const cartpath = '/cart/id=23';

    const lists = useRef([{
        name: 'GIA VỊ',
        item: [
            {
                name: 'Nước mắm',
                link: '#'
            }, {
                name: 'Bột ngọt',
                link: '#'
            }
        ]
    }, {
        name: 'TƯƠI SỐNG',
        item: [
            {
                name: 'Thịt',
                link: '#'
            }, {
                name: 'Cá',
                link: '#'
            }
        ]
    }]);

    const list_item = (
        <React.Fragment>
            {lists.current.map((list, index) =>
                <MenuItemList 
                    key={index}
                    name={list.name}
                    index={index}
                    item={list.item}
                />
            )}
        </React.Fragment>
    );
    console.log(list_item);

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