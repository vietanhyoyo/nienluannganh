import '../../css/cart.css';
import { useNavigate } from 'react-router-dom';
import CartInfo from './CartInfo';
import { useState, useEffect, useContext } from 'react';
import { LoginContext } from '../../contexts/LoginContext';
import axios from 'axios';

const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

export default function Cart() {
    const navigate = useNavigate();
    /**State lưu các chi tiết đặt hàng */
    const [load, setLoad] = useState([{
        dathang: '',
        _id: '',
        sanpham: {
            tensanpham: '',
            hinhanh: [''],
            _id: '',
            gianiemyet: 0,
            donvitinh: ''
        },
        soluong: 0,
    }]);

    /**Phí vận chuyển */
    const shipfee = 10000;

    /**Các context */
    const loginState = useContext(LoginContext);
    const userid = loginState.iduser;
    /**Ham goi api load lai gio hang */
    const reRender = function () {
        axios.post('/order/hienthigiohang', { khachhang: userid })
            .then(response => response.data)
            .then(response => {
                setLoad(response);
            });
    }

    /**Tính tổng tiền của các chi tiết đặt hàng */
    const tinhTongTien = () => {
        if (load.length === 0) return 0;
        else {
            let sum = 0;
            for (let i = 0; i < load.length; i++) {
                sum += load[i].soluong * load[i].sanpham.gianiemyet;
            }
            return sum;
        }
    }
    /**Tính tổng tiền của giỏ hàng bao gồm phí ship */
    const tinhTongTienDatHang = () => {
        const sum = tinhTongTien() + shipfee;
        return sum;
    }

    /**Lấy dữ liệu */
    useEffect(() => {
        axios.post('/order/hienthigiohang', { khachhang: userid })
            .then(response => response.data)
            .then(response => {
                setLoad(response);
            });
    }, [userid]);

    /**Cập nhật tổng tiền lên server */
    useEffect(() => {
        if (load.length > 0)
            axios.post('/order/tinhtongtiendathang', {
                id: load[0].dathang,
                tongtien: tinhTongTien() + shipfee
            })
                .then(res => console.log(res.data))
        else axios.post('/order/tinhtongtiendathang', {
            khachhang: userid
        })
            .then(res => console.log(res.data))
    })

    /**Nút đặt hàng */
    const handleOrderSubmit = () => {
        if (load.length === 0) alert('Chưa có sản phẩm trong giỏ hàng');
        else {
            navigate('/buy');
        }
    }
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
                        idSanPham={ele.sanpham._id}
                        dathang={ele.dathang}
                        hinhanh={ele.sanpham.hinhanh[0]}
                        tensanpham={ele.sanpham.tensanpham}
                        soluong={ele.soluong}
                        gia={ele.sanpham.gianiemyet}
                        donvitinh={ele.sanpham.donvitinh}
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
                                <p className='cart__p'>{formatNumber(tinhTongTien())}đ</p>
                                <p className='cart__p'>{formatNumber(shipfee)}đ</p>
                                <p className='cart__p cart__info__p--red'>{formatNumber(tinhTongTienDatHang())}đ</p>
                                <div>
                                    <div className='button' onClick={handleOrderSubmit}>Đặt hàng</div>
                                    <div className='button cart--gray'>Xóa giỏ hàng</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}