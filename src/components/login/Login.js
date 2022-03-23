import '../../css/login.css';
import LogoLG from '../../images/logotext.png';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'

import { LoginContext } from '../../contexts/LoginContext';
import axios from 'axios';

function Login() {

    /*Lấy dữ liệu đăng nhập**/
    const loginState = useContext(LoginContext)

    /*Các state dữ liệu form đăng nhập */
    const [name, setName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = () => {
        /*Đăng nhập vào localStorage */
        axios.post('/login/dangnhap', { name, password })
            .then(response => response.data)
            .then(response => {
                /*Nếu kết quả là chuỗi thì đăng nhập thất bại */
                if (typeof response === 'string') {
                    alert(response);
                } else {
                    /**Nếu đúng tài khoản và mật khẩu thì lưu vào localStorage và state trong loginContext */
                    loginState.handleSetLogin(response._id);
                    localStorage.setItem('accessToken', response._id);
                    window.location = '/';
                }
            })
            .catch(err => console.log(err))

    }
    /*Bắt sự kiện enter */
    const handlEnter = (e) => {
        if (e.key === 'Enter') {
            const input = name + password;
            if (input !== '') {
                handleSubmit();
            }
        }
    }

    return (
        <div className='login'>
            <div className='login__content row-app'>
                <div className='login__content-left'>
                    <div className='login__img'></div>
                </div>
                <div className='login__content-right' onKeyPress={(e) => handlEnter(e)}>
                    <div className='login__div'>
                        <div className='login__logo'>
                            <img alt='logo' className='login__logo-img' src={LogoLG}></img>
                            <h4>Nếu bạn đã có tài khoản thì hãy đăng nhập! <br />
                                Nếu bạn chưa có tài khoản thì hãy đăng ký!
                            </h4>
                        </div>
                        <div className='login__box'>
                            <label className='login__label' htmlFor='name'>Tài khoản</label>
                            <input name='name' className='login__input' type='text' onChange={e => setName(e.target.value)} />
                        </div>
                        <div className='login__box'>
                            <label className='login__label' htmlFor='password'>Mật khẩu</label>
                            <input name='password' type='password' className='login__input' onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div className='login__button'>
                            <div className='button login__submit' onClick={handleSubmit}>
                                Đăng nhập
                            </div>
                            <Link to='/signup' className='button login__submit'>
                                Đăng Ký
                            </Link>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
export default Login;