import '../../css/admininvoice.css';
import { useEffect, useState } from 'react';
import AdminInvoiceItem from './admininvoice/AdminInvoiceItem';
import axios from 'axios';


export default function AdminInvoice() {
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

    /**Lấy dữ liệu */
    useEffect(() => {
        axios.get('/order/laydonhangcanduyet')
            .then(res => {
                setDonHang(res.data);
            })
    }, []);
    /**Hàm xác nhận xóa khỏi danh sách đơn hàng */
    const deleteDonHang = id => {
        console.log('delete')
        setDonHang(prev => {
            let data = prev.filter(ele => {
                return ele._id !== id;
            })
            return data;
        })
    }

    return (
        <div className='admin-invoice'>
            <div className='admin-invoice__top'>
                <div style={{padding: '10px'}}>Duyệt đơn hàng cho khách hàng của bạn</div>
            </div>
            <div className='admin-invoice__body'>
                {donhang.map((item, index) => {
                    return <AdminInvoiceItem
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