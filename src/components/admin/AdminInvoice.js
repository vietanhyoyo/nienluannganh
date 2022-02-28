import '../../css/admininvoice.css';
import { useState } from 'react';
import AdminInvoiceItem from './admininvoice/AdminInvoiceItem';


export default function AdminInvoice() {
    const [items] = useState([{
        status: 'Chưa duyệt',
        address: 'Đ 3/2, Ninh Kiều, Cần Thơ',
        date: '12:32 12/2/2022',
        products: [{
            name: 'Sữa tắm bảo vệ Lifebuoy 833ml',
            image: 'https://cdn.tgdd.vn/Products/Images/2444/76820/bhx/-202110231003194441.jpg',
            cost: 141000,
            amount: 1,
            unit: 'chai'
        }, {
            name: 'Bột giặt nhiệt sạch tinh tương',
            image: 'https://cdn.tgdd.vn/Products/Images/2463/88314/bhx/bot-giat-nhiet-aba-sach-tinh-tuom-400g-201912031037171175.jpg',
            cost: 34100,
            amount: 1,
            unit: 'bịt'
        }],
        total: 132900
    }, {
        status: 'Chưa duyệt',
        address: 'Đ 3/2, Ninh Kiều, Cần Thơ',
        date: '12:32 12/2/2022',
        products: [{
            name: 'Sữa tắm bảo vệ Lifebuoy 833ml',
            image: 'https://cdn.tgdd.vn/Products/Images/2444/76820/bhx/-202110231003194441.jpg',
            cost: 141000,
            amount: 1,
            unit: 'chai'
        }, {
            name: 'Bột giặt nhiệt sạch tinh tương',
            image: 'https://cdn.tgdd.vn/Products/Images/2463/88314/bhx/bot-giat-nhiet-aba-sach-tinh-tuom-400g-201912031037171175.jpg',
            cost: 34100,
            amount: 1,
            unit: 'bịt'
        }],
        total: 132900
    }]);
    return (
        <div className='admin-invoice'>
            <div className='admin-invoice__top'>
                <ul className='admin-invoice__ul'>
                    <li className='admin-invoice__li admin-invoice__li--select'>Đang chờ</li>
                    <li className='admin-invoice__li'>Đã hủy</li>
                </ul>
            </div>
            <div className='admin-invoice__body'>
                {items.map((item, index) => {
                    return <AdminInvoiceItem
                        key={index}
                        prop={item}
                    />
                })}
            </div>
        </div>
    );
}