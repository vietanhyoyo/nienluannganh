import '../../css/cart.css';
import { useNavigate } from 'react-router-dom';
import CartInfo from './CartInfo';
import { useState, useEffect, useContext } from 'react';
import { LoginContext } from '../../contexts/LoginContext';
import { CartContext } from '../../contexts/CartContext';
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
        giasanpham: 0
    }]);
    /**Tổng số tiền */
    const [tongsotien, setTongSoTien] = useState(0);

    /**Phí vận chuyển */
    const shipfee = 10000;

    /**Các context */
    const loginState = useContext(LoginContext);
    const userid = loginState.iduser;

    /**Dữ liệu giỏ hàng trên header */
    const cartState = useContext(CartContext);

    /**Tính tổng tiền của các chi tiết đặt hàng */
    const tinhTongTien = () => {
        if (load.length === 0) return 0;
        else {
            let sum = 0;
            for (let i = 0; i < load.length; i++) {
                sum += load[i].soluong * load[i].giasanpham;
            }
            return sum;
        }
    }

    /**Ham goi api load lai gio hang */
    const reRender = function () {
        axios.post('/order/hienthigiohang', { khachhang: userid })
            .then(response => response.data)
            .then(response => {
                setLoad(response);
            });
    }

    /**Lấy dữ liệu */
    useEffect(() => {
        axios.post('/order/hienthigiohang', { khachhang: userid })
            .then(response => response.data)
            .then(response => {
                // console.log(response)
                setLoad(response);
            });
    }, [userid]);

    /**Cập nhật tổng tiền lên server */
    useEffect(() => {
        if (load.length > 0) {
            axios.post('/order/tinhtongtiendathang', {
                id: load[0].dathang,
                tongtien: tinhTongTien() + shipfee
            }).then(res => console.log(res.data))
        }

        else axios.post('/order/tinhtongtiendathang', {
            khachhang: userid
        })
            .then(res => console.log(res.data))
    })

    console.log(load);

    /**Nút đặt hàng */
    const handleOrderSubmit = () => {
        if (load.length === 0) alert('Chưa có sản phẩm trong giỏ hàng');
        else {
            navigate('/buy');
        }
    }
    /**Tính tổng tiền */
    const sum = tinhTongTien();
    useEffect(() => {
        console.log('Tính tổng tiền')
        setTongSoTien(sum);
        if (load.length > 0)
            axios.post('/order/tinhtongtiendathang', {
                id: load[0].dathang,
                tongtien: tongsotien + shipfee
            }).then(res => console.log(res.data))

    }, [sum, load, tongsotien])
    /**Xóa giỏ hàng */
    const handleDelete = () => {
        axios.post('/order/xoagiohang', { _id: load[0].dathang })
            .then(res => {
                reRender();
                cartState.getAPI(userid);
                console.log(res.data);
            })
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
                        gia={ele.giasanpham}
                        donvitinh={ele.sanpham.donvitinh}
                        tangTongTien={() => setLoad(load.map((element, id) => {
                            if (id === index) {
                                element.soluong++;
                            }
                            return element;
                        }))}

                        giamTongTien={() => setLoad(load.map((element, id) => {
                            if (id === index) {
                                element.soluong--;
                            }
                            return element;
                        }))}
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
                                <p className='cart__p cart__info__p--red'>{formatNumber(tongsotien + shipfee)}đ</p>
                                <div>
                                    <div className='button' onClick={handleOrderSubmit}>Đặt hàng</div>
                                    <div className='button cart--gray' onClick={handleDelete}>Xóa giỏ hàng</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}