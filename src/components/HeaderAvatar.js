import axios from "axios";
import { memo, useState, useContext, useEffect } from "react";
import { LoginContext } from '../contexts/LoginContext';
import {Link} from 'react-router-dom';

function HeaderAvatar() {
    /**Lấy login Context */
    const loginState = useContext(LoginContext);
    const [user, setUser] = useState({});
    const [avatarimg, setAvatarImg] = useState('/images/Wellcome.png');

    /*Đăng xuất */
    const handleSignOut = () => {
        loginState.handleSetLogin(null);
        localStorage.removeItem('accessToken');
    }
    /*Hiển thị đăng xuất */
    const handleDisplay = () => {
        const ul = document.querySelector('.header__avatar__ul');
        ul.classList.toggle('header__avatar__ul--show');
    }

    useEffect(() => {
        axios.post('/login/layuser', { id: loginState.loginstate })
            .then(response => response.data)
            .then(response => {
                const photo = String(response.hinhanh);
                setUser(response);
                setAvatarImg(photo)
            });
    }, [loginState.loginstate]);

    return (
        <div className='header__avatar'>
            <div className='header__avatar--img' style={{ backgroundImage: `url(${avatarimg})` }} onClick={handleDisplay}/>
            <ul className='header__avatar__ul'>
                <li><Link to='/person/profile' className='header__avatar__ul__element'>Trang cá nhân</Link></li>
                <li><Link to='/person/history' className='header__avatar__ul__element'>Đơn mua hàng</Link></li>
                <li><div onClick={handleSignOut} className='header__avatar__ul__element'>Đăng xuất</div></li>
            </ul>
        </div>
    );
}

export default memo(HeaderAvatar);