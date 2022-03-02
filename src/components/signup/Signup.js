import '../../css/login.css';
import imgform from '../../images/BGlogin.png'
import LogoLG from '../../images/LOGOLG.jpg'

function Login() {
    return (
        <div className='login'>
            <div className='login__content row-app'>
                <div className='login__content-left'>
                    <img alt='logo' className='login__img' src={imgform}></img>
                </div>
                <div className='login__content-right'>
                    <div className='login__div'>
                        <div className='login__logo'>
                            <img alt='logo' className='login__logo-img' src={LogoLG}></img>
                        </div>
                        <div className='login__box'>
                            <label className='login__label'>Tài khoản</label>
                            <br />
                            <input className='login__input'></input>
                        </div>
                        <div className='login__box'>
                            <label className='login__label'>Mật khẩu</label>
                            <br />
                            <input type='password' className='login__input'></input>
                        </div>
                        <div className='login__box'>
                            <label className='login__label'>Xác nhận lại mật khẩu</label>
                            <br />
                            <input type='password' className='login__input'></input>
                        </div>
                        <div className='login__box'>
                            <label className='login__label'>Số điện thoại</label>
                            <br />
                            <input type='password' className='login__input'></input>
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