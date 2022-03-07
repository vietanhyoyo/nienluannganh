import '../../css/personhistory.css';
import { useState } from 'react';
import PersonHistoryItem from './personhistory/PersonHistoryItem';


export default function PersonHistory() {
    const [item] = useState({
        status: 'Giao hàng công',
        products: [{
            name: 'Sữa tắm bảo vệ Lifebuoy 833ml',
            image: 'https://cdn.tgdd.vn/Products/Images/2444/76820/bhx/-202110231003194441.jpg',
            cost: 141000,
            amount: 1,
            unit: 'chai'
        },{
            name: 'Bột giặt nhiệt sạch tinh tương',
            image: 'https://cdn.tgdd.vn/Products/Images/2463/88314/bhx/bot-giat-nhiet-aba-sach-tinh-tuom-400g-201912031037171175.jpg',
            cost: 34100,
            amount: 1,
            unit: 'bịt'
        }],
        total: 132900
    });
    return (
        <div className='person-history'>
            <div className='person-history__top'>
                <ul className='person-history__ul'>
                    <li className='person-history__li person-history__li--select'>Tất cả</li>
                    <li className='person-history__li'>Chờ xác nhận</li>
                    <li className='person-history__li'>Đang giao</li>
                    <li className='person-history__li'>Đã giao</li>
                    <li className='person-history__li'>Đã hủy</li>
                </ul>
            </div>
            <div className='person-history__body'>
                <PersonHistoryItem 
                    prop={item}
                />
            </div>
        </div>
    );
}