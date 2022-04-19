
import axios from 'axios';
import { useEffect, useState } from 'react'
import PersonHistoryProduct from './PersonHistoryProduct';

const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

export default function PersonHistoryItem(props) {
    const [item, setItem] = useState({
        _id: '62569a69c99fb86b550a1d67',
        khachhang: {
            _id: "622efe3359050ca85dfe6d68",
            hoten: "Nguyễn Trần Thanh Tâm"
        },
        trangthai: 'chờ duyệt',
        dathanhtoan: false,
        tongtien: 14600
    });
    const [chitietdathang, setChiTietDatHang] = useState([{
        _id: "62569d2208ae0d0fe4c83ca1",
        dathang: "62569cf69840aafb2a84cdb6",
        sanpham: {
            donvitinh: "0.3kg",
            gianiemyet: 4600,
            hinhanh: [''],
            tensanpham: "Nha đam Đà Lạt - 0.3kg",
            _id: "6231d81878248a9dd74c21f9"
        },
        soluong: 1,
        gia: 0,
    }]);

    useEffect(() => {
        setItem(props.prop);
        if (props.prop._id !== '')
            axios.post('/order/laychitietdathang', { id: props.prop._id })
                .then(res => {

                    setChiTietDatHang(res.data)
                })
    }, [props])

    /**Hủy đơn hàng */
    const handleCancer = () => {
        const bool = window.confirm('Bạn có muốn hủy đơn hàng này!');
        if (bool)
            axios.post('/order/huydonhang', { id: item._id })
                .then(res => {
                    props.getAPI();
                    props.deleteDonHang();
                });
    }

    return (<>
        {(props.filter === item.trangthai || props.filter === '') ?
            <div className='admin-invoice__item'>
                <div className='admin-invoice__border'></div>
                <div className='admin-invoice__row '>
                    <div className='admin-invoice__status'>
                        <div><i className='fi fi-rr-map-marker-home'></i>
                            {item.khachhang.diachi !== undefined
                                && item.khachhang.diachi}, {item.khachhang.quanhuyen !== undefined &&
                                    item.khachhang.quanhuyen.ten + ', ' + item.khachhang.quanhuyen.tinhtp.ten}
                        </div>
                        <span>{item.trangthai}</span>
                    </div>
                </div>
                {chitietdathang.map((ele, index) => {
                    return (<PersonHistoryProduct
                        key={index}
                        product={ele.sanpham}
                        soluong={ele.soluong}
                        gia={ele.gia}
                    />)
                })
                }
                <div className='admin-invoice__row admin-invoice__row--top'>
                    <div className='admin-invoice__box admin-invoice__box--cost'>
                        <div className='admin-invoice__date admin-invoice__client'>Khách hàng: {item.khachhang.hoten}</div>
                        <div className='admin-invoice__totalcost'>
                            <span className='admin-invoice__span'>Phí vận chuyển: </span>
                            <span>10.000đ</span>
                        </div>
                    </div>
                </div>
                <div className='admin-invoice__row admin-invoice__row--top'>
                    <div className='admin-invoice__box admin-invoice__box--cost'>
                        <div className='admin-invoice__date'>
                            <span>Ngày đặt: {new Date(item.ngaydat).toLocaleDateString('vi-VI')}</span>
                        </div>
                        <div className='admin-invoice__totalcost'>
                            <span className='admin-invoice__span'>Tổng tiền: </span>
                            <span className='admin-invoice__cost'>{formatNumber(Number(item.tongtien))}đ</span>
                        </div>
                    </div>
                </div>
                <div className='admin-invoice__row admin-invoice__row--top'>
                    <div className='admin-invoice__button--div'>
                        {item.trangthai !== 'đã xác nhận' &&
                            <div className='admin-invoice__button'>
                                {item.trangthai !== 'hủy' && <div className='button admin-invoice__button--gray' onClick={handleCancer}>Hủy</div>}
                            </div>}
                    </div>
                </div>
            </div> : <></>
        }</>
    );
}