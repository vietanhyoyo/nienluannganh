import '../../css/person.css'
import { Outlet, Link } from 'react-router-dom';
import imgg from '../../images/logoicon.png'

export default function Person() {
    return (
        <div className='person'>
            <div className='person__content row-app'>
                <div className='person__left'>
                    <div className='person__left__row person__left__row--top'>
                        <div className='person__left__image'>
                            <img src={imgg} alt='z' />
                        </div>
                        <div className='person__left__text'>
                            <span>vanhyoyo</span>
                        </div>
                    </div>
                    <div className='person__hr'></div>
                    <Link to='/person/profile' className='person__left__row'>
                        <div className='person__left__i'>
                            <i className='fi fi-rr-portrait'></i>
                        </div>
                        <div className='person__left__span'>
                            <span>Hồ sơ</span>
                        </div>
                    </Link>
                    <Link to='/person/history' className='person__left__row'>
                        <div className='person__left__i'>
                            <i className='fi fi-rr-comment-alt'></i>
                        </div>
                        <div className='person__left__span'>
                            <span>Lịch sử mua</span>
                        </div>
                    </Link>
                    <div className='person__left__row'>
                        <div className='person__left__i'>
                            <i className='fi fi-rr-map-marker'></i>
                        </div>
                        <div className='person__left__span'>
                            <span>Địa chỉ</span>
                        </div>
                    </div>
                </div>
                <div className='person__right'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}