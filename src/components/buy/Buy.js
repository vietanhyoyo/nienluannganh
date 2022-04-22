import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LoginContext } from '../../contexts/LoginContext';
import { CartContext } from '../../contexts/CartContext';
import '../../css/buy.css';
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import PaypalButton from './PaypalButton';
import BuyProfile from './buyProfile/BuyProfile';

const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

const PAYPAL_APP_REACT_ID = 'AaL54LXl9M2BUpwvP9MYYeD46AF4uj3NGYhBWg-q5FCzdJ4TsIlyE0KUp3auPPXf36AJQVxMjdfi4vab'

export default function Buy() {
    const idKH = useContext(LoginContext)
    const [load, setLoad] = useState({
        _id: '',
        hoten: '',
        sdt: '',
        gioitinh: '',
        quanhuyen: '',
        diachi: ''
    });
    const [TP, setTP] = useState([{
        _id: '',
        ten: ''
    }]);
    const [selectTP, setSelectTP] = useState(0);
    const [QH, setQH] = useState({
        _id: '',
        ten: '',
        tinhtp: ''
    });
    useEffect(() => {
        axios.get('/address/tinh')
            .then(response => response.data)
            .then(response => {
                setTP(response);
            });
    }, [idKH.iduser, QH, load]);
    useEffect(() => {
        axios.post('/customer/infokhachhang', { id: idKH.iduser })
            .then(response => response.data)
            .then(response => {
                setLoad(response);
                if (response.quanhuyen !== undefined) {
                    setQH(response.quanhuyen)
                }
            });

    }, [idKH.iduser]);

    useEffect(() => {
        if (TP.length > 1 && load.quanhuyen !== undefined && QH._id !== '')
            setSelectTP(TP.indexOf(TP.filter(element => {
                return element._id === QH.tinhtp
            })[0]))
        if (load.diachi === undefined) {
            setLoad(prev => ({ ...prev, diachi: '' }))
        }
    }, [load, TP, QH])

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

    /**Lấy dữ liệu giỏ hàng để thanh toán */
    useEffect(() => {
        axios.post('/order/laygiohangthanhtoan', { khachhang: userid })
            .then(res => setDonHang(res.data));
    }, [userid])

    /**Phương thức đặt hàng nhưng chưa thanh toán */
    const handleSubmit = () => {
        if (load.diachi.length < 10) {
            alert('Chưa có địa chỉ, địa chỉ chư phù hợp');
        } else if (load.hoten.length < 10) {
            alert('Hãy nhập họ tên đầy đủ của bạn');
        }
        else {
            axios.post('/payment/dathang', { dathang: donhang })
                .then(res => {
                    load.quanhuyen = QH._id
                    axios.post('/customer/updateinfo', { id: load._id, load: load })
                        .then(response => response.data)
                        .then(response => {
                            alert('Cập nhật thành công')
                        })
                    cartState.getAPI(userid);
                    navigator('/paysuccess');
                })

        }

    }
    /**Phương thức thanh toán tới paypal */
    const handlePay = () => {
        if (load.diachi.length < 10) {
            alert('Chưa có địa chỉ, địa chỉ chư phù hợp');
        } else if (load.hoten.length < 10) {
            alert('Hãy nhập họ tên đầy đủ của bạn');
        }
        else {
            axios.post('/payment/thanhtoan', { dathang: donhang })
                .then(res => {
                    console.log(res.data);
                    cartState.getAPI(userid);
                    navigator('/paysuccess');
                })
            load.quanhuyen = QH._id
            axios.post('/customer/updateinfo', { load })
                .then(response => response.data)
                .then(response => {
                    alert('Cập nhật thành công')
                })
        }

    }

    return (
        <div className='buy'>
            <div className='buy__body row-app'>
                <h2 className='buy__title' >Thanh toán</h2>
                <div className='buy__box'>
                    <h3 className='buy__h3'>Thông tin người mua hàng</h3>
                    <div className='buy__row'>
                        <span className='buy__row--left'>Tên người nhận</span>
                        <input
                            onChange={(e) => {
                                setLoad(prev => ({ ...prev, hoten: e.target.value }))
                            }}
                            className='buy__row--right' defaultValue={load.hoten}></input>
                        {/* <input className='buy__row--right' type='text' /> */}
                    </div>
                    <div className='buy__row'>
                        <span className='buy__row--left'>Điện thoại</span>
                        <input
                            onChange={(e) => {
                                setLoad(prev => ({ ...prev, sdt: e.target.value }))
                            }}
                            className='buy__row--right' defaultValue={load.sdt}></input>
                        {/* <input className='buy__row--right' type='text' /> */}
                    </div>
                    <div className='buy__row'>
                        <span className='buy__row--left'>Tỉnh/Thành phố</span>
                        <select name='dsTinh' onChange={(e) => {
                            setSelectTP(e.target.value);
                        }}
                            value={selectTP} className='buy__row--right'>
                            {TP.map((ele, index) => {
                                return <option key={index} value={index}>{ele.ten}</option>
                            })}
                        </select>
                        {/* <input className='buy__row--right' type='text' /> */}
                    </div>
                    {TP.length !== 0 && <BuyProfile
                        id={TP[selectTP]._id}
                        ten={TP[selectTP].ten}
                        setQH={(value) => { setQH(value) }}
                        QH={QH}
                    />}
                    <div className='buy__row'>
                        <span className='buy__row--left'>Số nhà, tên đường</span>
                        <input type={'text'}
                            onChange={(e) => {
                                setLoad(prev => ({ ...prev, diachi: e.target.value }))
                            }}
                            className="buy__row--right" defaultValue={load.diachi}></input>
                        {/* <input className='buy__row--right' type='text' /> */}
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
                            <Link to='/cart' className='buy__payment__info'>
                                <div className='button buy__btn buy__btn--other'>Hủy</div>
                            </Link>
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