import '../../css/cart.css';
import { Link } from 'react-router-dom';
import CartInfo from './CartInfo';
import { useState, useEffect, useContext } from 'react';
import { LoginContext } from '../../contexts/LoginContext';
import axios from 'axios';

export default function Cart() {
    const [load, setLoad] = useState([{
        dathang: '',
        _id:'',
        sanpham: {
            tensanpham: '',
            hinhanh: [''],
            _id: '',
            gianiemyet: 0,
            donvitinh: ''
        },
        soluong: '',
    }]);


    const loginState = useContext(LoginContext);
    const userid = loginState.iduser;
    const reRender = function(){
        axios.post('/order/hienthigiohang', { khachhang: userid })
            .then(response => response.data)
            .then(response => {
                setLoad(response);
            });
    }
    useEffect(() => {
        axios.post('/order/hienthigiohang', { khachhang: userid })
            .then(response => response.data)
            .then(response => {
                setLoad(response);
            });
    }, [userid]);
    return (
        <div className='cart'>
            <div className='cart__body row-app'>
                <div className='cart__row'><h4>Giỏ hàng</h4></div>
                <div className='cart__row cart__row--boder'>
                    <div className='cart__info--top cart__info--big' >
                        <p className='cart__info__p'>Sản phẩm</p>
                    </div>
                    <div className='cart__info--top cart__info--small' >
                        <p className='cart__info__p'>Đơn giá</p>
                    </div>
                    <div className='ccart__info--top cart__info--small' >
                        <p className='cart__info__p'>Số lượng</p>
                    </div>
                    <div className='cart__info--top cart__info--small' >
                        <p className='cart__info__p'>Tổng tiền</p>
                    </div>
                </div>
                {load.map((ele, index) => {
                    return <CartInfo key={index}
                        reRender={reRender}
                        id={ele._id}
                        hinhanh={ele.sanpham.hinhanh[0]}
                        tensanpham={ele.sanpham.tensanpham}
                        soluong={ele.soluong}
                        gia={ele.sanpham.gianiemyet}
                        donvitinh={ele.sanpham.donvitinh}
                        tongtien={ele.soluong*ele.sanpham.gianiemyet}
                    />
                })}
                <div className='cart__payment'>
                    <div className='cart__row cart__row--top'>
                        <div className='cart__info--top cart__info--big' ></div>
                        <div className='cart__info--top cart__info--small' ></div>
                        <div className='cart__info--top cart__info--small' >
                            <div className='cart__cost'>
                                <p className='cart__p' style={{ textAlign: 'end' }}>Tổng tiền hàng:</p>
                                <p className='cart__p' style={{ textAlign: 'end' }}>Phí vận chuyển:</p>
                                <p className='cart__p' style={{ textAlign: 'end' }}>Tổng cộng:</p>
                            </div>
                        </div>
                        <div className='cart__info--top cart__info--small' >
                            <div className='cart__cost'>
                                <p className='cart__p'>50000đ</p>
                                <p className='cart__p'>10000đ</p>
                                <p className='cart__p cart__info__p--red'>600000đ</p>
                                <Link to={`/buy`} className='merchandise__item'>
                                    <div className='button'>Đặt hàng</div>
                                </Link>
                                <div className='button cart--gray'>Xóa giỏ hàng</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}