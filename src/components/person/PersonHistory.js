import '../../css/personhistory.css';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { LoginContext } from '../../contexts/LoginContext';
import PersonHistoryItem from './personhistory/PersonHistoryItem';


export default function PersonHistory() {
    /**Lấy login Context */
    const loginState = useContext(LoginContext);
    /**Fillter */
    const [filter, setFilter] = useState('');

    /**State đơn hàng chờ duyệt */
    const [donhang, setDonHang] = useState([{
        _id: '',
        khachhang: {
            _id: '',
            hoten: '',
            sdt: '0000000000'
        },
        trangthai: '',
        dathanhtoan: false,
        tongtien: 0,
        ngaydat: '2022-04-13T14:54:55.504+00:00'
    }])

    const getAPI = () => {
        if (loginState.iduser !== null)
            axios.post('/order/laydonhangcuakhachhang', { _id: loginState.iduser })
                .then(res => {
                    setDonHang(res.data);
                })
    }

    /**Lấy dữ liệu */
    useEffect(() => {
        if (loginState.iduser !== null)
            axios.post('/order/laydonhangcuakhachhang', { _id: loginState.iduser })
                .then(res => {
                    setDonHang(res.data);
                })
    }, [loginState.iduser]);

    /**Xóa */
    const deleteDonHang = item => {

    }

    return (
        <div className='person-history'>
            <div className='person-history__top'>
                <ul className='person-history__ul'>
                    <li className={filter === '' ? 'person-history__li person-history__li--select' : 'person-history__li'}
                        onClick={e => setFilter('')}>Tất cả</li>
                    <li className={filter === 'chờ duyệt' ? 'person-history__li person-history__li--select' : 'person-history__li'}
                        onClick={() => setFilter('chờ duyệt')}>Chờ xác nhận</li>
                    <li className={filter === 'đã xác nhận' ? 'person-history__li person-history__li--select' : 'person-history__li'}
                        onClick={() => setFilter('đã xác nhận')}>Đang giao</li>
                    <li className={filter === 'đã giao' ? 'person-history__li person-history__li--select' : 'person-history__li'}
                        onClick={() => setFilter('đã giao')}>Đã giao</li>
                    <li className={filter === 'hủy' ? 'person-history__li person-history__li--select' : 'person-history__li'}
                        onClick={() => setFilter('hủy')}>Đã hủy</li>
                </ul>
            </div>
            <div className='person-history__body'>
                {donhang.map((item, index) => {
                    return <PersonHistoryItem
                        getAPI={getAPI}
                        filter={filter}
                        key={index}
                        prop={item}
                        tongtien={item.tongtien}
                        deleteDonHang={() => deleteDonHang(item._id)}
                    />
                })}
            </div>
        </div>
    );
}