import '../../css/login.css';
import LogoLG from '../../images/Shop-247.png';
import { useState, useContext } from 'react';
import { LoginContext } from '../../contexts/LoginContext';
import axios from 'axios';

function Login() {
    /**Lấy dữ liệu đăng nhập bên LoginContext */
    const loginState = useContext(LoginContext)

    /*Giá trị của input trong form đăng nhập */
    const [formInfo, setFormInfo] = useState({
        name: '',
        phone: '',
        password: '',
        repassword: ''
    })

    const [errorSubmit, setErrorSubmit] = useState(false);
    const [errorRePass, setErrorRePass] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    const [errorEmpty, setErrorEmpty] = useState(false);

    const handleCheckPW = () => {
        const box = document.querySelectorAll('.login__box');
        setErrorSubmit(false);
        box[3].classList.remove('signup__repassword');
        setErrorRePass(false);
    }
    const handleCheckPhone = () => {
        if (formInfo.phone === '') return;
        const box = document.querySelectorAll('.login__box');
        if (formInfo.phone.length !== 10) {
            setErrorSubmit(true);
            box[1].classList.add('signup__repassword');
            setErrorPhone(true);
        }
        else {
            setErrorSubmit(false);
            box[1].classList.remove('signup__repassword');
            setErrorPhone(false);
        }
    }
    const handleCheckRePW = () => {
        const box = document.querySelectorAll('.login__box');

        if (formInfo.repassword !== formInfo.password) {
            setErrorSubmit(true);
            box[3].classList.add('signup__repassword');
            setErrorRePass(true);
            return true;
        } else {
            setErrorSubmit(false);
            box[3].classList.remove('signup__repassword');
            setErrorRePass(false);
            return false;
        }
    }
    const handleSubmit = () => {
        let error = false;
        if (formInfo.name === '' || formInfo.phone === '' || formInfo.password === '' || formInfo.repassword === '') {
            setErrorEmpty(true);
            setErrorSubmit(true);
            error = true;
        }
        else {
            setErrorEmpty(false);
            setErrorSubmit(false);
            error = handleCheckRePW();
        }

        if (!errorSubmit && !error) axios.post('/customer/themkhachhang', formInfo)
            .then(response => response.data)
            .then(response => {
                if (typeof response === 'string') {
                    alert('Lỗi : ' + response);
                }
                else {
                    console.log(response);
                    alert('Bạn đã tạo tài khoản thành công;');
                    loginState.handleSetLogin(response._id);
                    localStorage.setItem('accessToken', response._id);
                    window.location = '/';
                }
            });
    }

    return (
        <div className='login'>
            <div className='login__content row-app'>
                <div className='login__content-left'>
                    <div className='login__img'></div>
                </div>
                <div className='login__content-right'>
                    <div className='login__div'>
                        <div className='login__logo'>
                            <img alt='logo' className='login__logo-img' src={LogoLG} style={{ height: '70px' }}></img>
                            <h4 style={{ margin: '10px 0' }}>Bạn hãy điền thông tin vào bên dưới để đăng ký!
                            </h4>
                        </div>
                        <div className='login__box'>
                            <label className='login__label'>Họ và tên</label>
                            <br />
                            <input className='login__input' onChange={e => setFormInfo({ ...formInfo, name: e.target.value })} />
                        </div>
                        <div className='login__box'>
                            <label className='login__label' >Số điện thoại</label>
                            <br />
                            <input type='text' className='login__input'
                                onChange={e => setFormInfo({ ...formInfo, phone: e.target.value })}
                                onBlur={handleCheckPhone}
                            />
                        </div>
                        <div className='login__box'>
                            <label className='login__label'>Mật khẩu</label>
                            <br />
                            <input className='login__input' type='password'
                                onChange={e => setFormInfo({ ...formInfo, password: e.target.value })}
                                onFocus={handleCheckPW}
                            />
                        </div>
                        <div className='login__box'>
                            <label className='login__label'>Xác nhận lại mật khẩu</label>
                            <br />
                            <input className='login__input' type='password'
                                onChange={e => setFormInfo({ ...formInfo, repassword: e.target.value })}
                                onBlur={handleCheckRePW}
                            />
                        </div>
                        <p className='signup__error'>
                            {errorRePass && 'Mật khẩu nhập lại không khớp! '}
                            {errorPhone && 'Số điện thoại phải gồm 10 số! '}
                            {errorEmpty && 'Có ô bị bỏ trống! '}
                        </p>
                        <div className='login__button'>
                            <div className='button login__submit button__signup' onClick={handleSubmit}>
                                Đăng Ký
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
export default Login;