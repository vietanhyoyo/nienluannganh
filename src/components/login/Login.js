import '../../css/login.css';
import LogoLG from '../../images/logotext.png'
import { useContext } from 'react';
import { LoginContext } from '../../contexts/LoginContext'

function Login() {

    console.log(useContext(LoginContext))

    return (
        <div className='login'>
            <div className='login__content row-app'>
                <div className='login__content-left'>
                    <div className='login__img'></div>
                </div>
                <div className='login__content-right'>
                    <div className='login__div'>
                        <div className='login__logo'>
                            <img alt='logo' className='login__logo-img' src={LogoLG}></img>
                            <h4>Nếu bạn đã có tài khoản thì hãy đăng nhập! <br/>
                                Nếu bạn chưa có tài khoản thì hãy đăng ký!
                            </h4>
                        </div>
                        <div className='login__box'>
                            <label className='login__label' htmlFor='name'>Tài khoản</label>
                            <input name='name' className='login__input' type='text'></input>
                        </div>
                        <div className='login__box'>
                            <label className='login__label' htmlFor='password'>Mật khẩu</label>
                            <input name='password' type='password' className='login__input'></input>
                        </div>
                        <div className='login__button'>
                            <div className='button login__submit'>
                                Đăng nhập
                            </div>
                            <div className='button login__submit'>
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