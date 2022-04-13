import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../contexts/LoginContext';
import { CartContext } from '../../contexts/CartContext';
import '../../css/buy.css';
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import PaypalButton from './PaypalButton';

const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

const PAYPAL_APP_REACT_ID = 'AaL54LXl9M2BUpwvP9MYYeD46AF4uj3NGYhBWg-q5FCzdJ4TsIlyE0KUp3auPPXf36AJQVxMjdfi4vab'

export default function Buy() {

    const [donhang, setDonHang] = useState({
        _id: '',
        tongtien: 0
    })

    /**Các phương thức thanh toán */
    const DirectPay = 0;
    const PaypalPay = 1;
    /**Phuong thuc thanh toan */
    const [phuongthuc, setPhuongThuc] = useState(0)

    /**Các context */
    const loginState = useContext(LoginContext);
    const userid = loginState.iduser;
    /**Dữ liệu giỏ hàng trên header */
    const cartState = useContext(CartContext);

    /**Hook để chuyển trang */
    const navigator = useNavigate();

    console.log(donhang);

    /**Lấy dữ liệu giỏ hàng để thanh toán */
    useEffect(() => {
        axios.post('/order/laygiohangthanhtoan', { khachhang: userid })
            .then(res => setDonHang(res.data));
    },[])

    /**Phương thức thanh toán tới paypal */
    const handleSubmit = () => {
        axios.post('/payment/dathang', { dathang: donhang })
            .then(res => {
                console.log(res.data);
                cartState.getAPI(userid);
                navigator('/paysuccess');
            })
    }
    /**Phương thức thanh toán tới paypal */
    const handlePay = () => {
        axios.post('/payment/thanhtoan', { dathang: donhang })
            .then(res => {
                console.log(res.data);
                cartState.getAPI(userid);
                navigator('/paysuccess');
            })
    }

    return (
        <div className='buy'>
            <div className='buy__body row-app'>
                <h2 className='buy__title' >Thanh toán</h2>
                <div className='buy__box'>
                    <h3 className='buy__h3'>Thông tin người mua hàng</h3>
                    <div className='buy__row'>
                        <span className='buy__row--left'>Tên người nhận</span>
                        <input className='buy__row--right' type='text' />
                    </div>
                    <div className='buy__row'>
                        <span className='buy__row--left'>Điện thoại</span>
                        <input className='buy__row--right' type='text' />
                    </div>
                    <div className='buy__row'>
                        <span className='buy__row--left'>Tỉnh/Thành phố</span>
                        <input className='buy__row--right' type='text' />
                    </div>
                    <div className='buy__row'>
                        <span className='buy__row--left'>Quận/Huyện</span>
                        <input className='buy__row--right' type='text' />
                    </div>
                    <div className='buy__row'>
                        <span className='buy__row--left'>Phường/Xã</span>
                        <input className='buy__row--right' type='text' />
                    </div>
                    <div className='buy__row'>
                        <span className='buy__row--left'>Số nhà, tên đường</span>
                        <input className='buy__row--right' type='text' />
                    </div>
                    <div className='buy__row'>
                        <span className='buy__row--left'>Địa chỉ email</span>
                        <input className='buy__row--right' type='text' />
                    </div>
                </div>
                <div className='buy__box'>
                    <div className='buy__row'>
                        <span className='buy__row--left'>Chọn phương thức thanh toán</span>
                        <div className='buy__row--right--radio'>
                            <div className='buy__row--right--radio__col'>
                                <input type={'radio'} name='phuongthuc'
                                    checked={phuongthuc === DirectPay}
                                    onChange={() => setPhuongThuc(DirectPay)}></input>
                                <label style={{ lineHeight: '20px' }}>Thanh toán trực tiếp</label>
                            </div>
                            <div className='buy__row--right--radio__col'>
                                <input type={'radio'} name='phuongthuc'
                                    checked={phuongthuc === PaypalPay}
                                    onChange={() => setPhuongThuc(PaypalPay)}></input>
                                <label style={{ lineHeight: '20px' }}>Thanh toán qua Paypal</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='buy__box buy__box--payment'>
                    <div className='buy__payment'>
                        <div className='buy__payment__row'>
                            <div className='buy__payment__info'>Tiền hàng:</div>
                            <div className='buy__payment__info'>{formatNumber(Number(donhang.tongtien))}đ</div>
                        </div>
                        {phuongthuc === PaypalPay &&
                            <PayPalScriptProvider options={{
                                "client-id": PAYPAL_APP_REACT_ID,
                                currency: "USD",
                            }}>
                                <PaypalButton donhang={donhang} handlePay={handlePay} />
                            </PayPalScriptProvider>
                        }
                        {phuongthuc === DirectPay && <div className='buy__payment__row'>
                            <div className='buy__payment__info'>
                                <div className='button buy__btn buy__btn--other'>Hủy</div>
                            </div>
                            <div className='buy__payment__info'>
                                <div className='button buy__btn' onClick={handleSubmit}>Thanh toán</div>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
}