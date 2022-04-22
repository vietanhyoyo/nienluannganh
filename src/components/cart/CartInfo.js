import axios from "axios";
import { useState, useContext, useEffect } from 'react'
import { LoginContext } from '../../contexts/LoginContext';
import { CartContext } from '../../contexts/CartContext';

const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

function CartInfo(props) {

    /*Dữ liệu đăng nhập */
    const loginState = useContext(LoginContext);
    const userid = loginState.iduser;
    /**Dữ liệu giỏ hàng trên header */
    const cartState = useContext(CartContext);

    const [chitietdathang, setChiTietDatHang] = useState({
        _id: props.id,
        dathang: props.dathang,
        sanpham: props.idSanPham,
        soluong: props.soluong
    })
    /**Xóa sản phẩm */
    const deleteSP = () => {
        axios.post('/order/xoachitietdathang', { id: props.id })
            .then(response => response.data)
            .then(response => {
                props.reRender();
                cartState.getAPI(userid);
            });
    }
    /**Lấy giữ liệu chi tiết đặt hàng */
    useEffect(() => {
        setChiTietDatHang({
            _id: props.id,
            dathang: props.dathang,
            sanpham: props.idSanPham,
            soluong: props.soluong
        })
    }, [props])
    /**Tăng số lượng */
    const handleIncrease = () => {
        setChiTietDatHang(prev => ({ ...prev, soluong: chitietdathang.soluong++ }))
        props.tangTongTien();
    }
    const handleDecrease = () => {
        if (chitietdathang.soluong > 1) {
            setChiTietDatHang(prev => ({ ...prev, soluong: chitietdathang.soluong-- }))
            props.giamTongTien();
        }
    }
    return (
        <div className='cart__row cart__row--boder'>
            <div className='cart__info cart__info--big cart__info--image' >
                <div style={{ width: '150px', height: '100%' }}>
                    <img
                        className='cart__img'
                        src={props.hinhanh}
                        alt='product'
                    />
                </div>
                <div className='cart__name--product'>
                    <p style={{ color: '#444' }}>{props.tensanpham}</p>
                    <p className='cart__delete' onClick={deleteSP}>Xóa</p>
                </div>
            </div>
            <div className='cart__info cart__info--small' >
                <div className='cart__info__content'>
                    <span>{formatNumber(Number(props.gia))}</span>
                    <span>đ/{props.donvitinh}</span>
                </div>
            </div>
            <div className='cart__info cart__info--small' >
                <div className='cart__info__content'>
                    <div className='cart__adjustbutton'>
                        <i className='fa-solid fa-minus' onClick={handleDecrease}></i>
                    </div>
                    <input type='text'
                        value={chitietdathang.soluong.toString()}
                        onChange={e => setChiTietDatHang(prev => ({ ...prev, soluong: Number(e.target.value) }))} />
                    <div className='cart__adjustbutton'>
                        <i className='fa-solid fa-plus' onClick={handleIncrease}></i>
                    </div>
                </div>
            </div>
            <div className='cart__info cart__info--small' >
                <div className='cart__info__content'>
                    <span>{formatNumber(Number(props.gia * chitietdathang.soluong))}</span><span>đ</span>
                </div>
            </div>
        </div>
    );
}

export default CartInfo;