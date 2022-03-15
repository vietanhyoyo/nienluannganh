import axios from "axios";
import { memo, useState, useContext, useEffect } from "react";
import { LoginContext } from '../contexts/LoginContext';

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
        <div className='header__avatar' onClick={handleSignOut}>
            <div className='header__avatar--img' style={{ backgroundImage: `url(${avatarimg})` }} />
        </div>
    );
}

export default memo(HeaderAvatar);