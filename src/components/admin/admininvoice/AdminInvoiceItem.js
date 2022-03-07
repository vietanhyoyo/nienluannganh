import { useState } from 'react'
import AdminInvoiceProduct from './AdminInvoiceProduct';

export default function AdminInvoiceItem(prop) {
    const [item] = useState(prop.prop);
    return (
        <div className='admin-invoice__item'>
            <div className='admin-invoice__border'></div>
            <div className='admin-invoice__row '>
                <div className='admin-invoice__status'>
                    <div><i className='fi fi-rr-map-marker-home'></i>{item.address}</div>
                    <span>{item.status}</span>
                </div>
            </div>
            {item.products.map((product, index) => {
                return (<AdminInvoiceProduct
                    key={index}
                    product={product}
                />)
            })
            }
            <div className='admin-invoice__row admin-invoice__row--top'>
                <div className='admin-invoice__box admin-invoice__box--cost'>
                    <div className='admin-invoice__date'>
                        <span>Ngày đặt: {item.date}</span>
                    </div>
                    <div className='admin-invoice__totalcost'>
                        <span className='admin-invoice__span'>Tổng tiền: </span>
                        <span className='admin-invoice__cost'>{item.total}đ</span>
                    </div>
                </div>
            </div>
            <div className='admin-invoice__row admin-invoice__row--top'>
                <div className='admin-invoice__button--div'>
                    <div className='admin-invoice__button'>
                        <div className='button'>Xác nhận</div>
                        <div className='button admin-invoice__button--gray'>Hủy</div>
                    </div>
                </div>
            </div>
        </div>
    );
}