import { useState } from 'react'
import PersonHistoryProduct from './PersonHistoryProduct';

export default function PersonHistoryItem(prop) {
    const [item] = useState(prop.prop);
    return (
        <div className='person-history__item'>
            <div className='person-history__border'></div>
            <div className='person-history__row '>
                <div className='person-history__status'>
                    <i className='fi fi-rr-truck-side'></i>{item.status}
                </div>
            </div>
            {item.products.map((product, index) => {
                return (<PersonHistoryProduct 
                    key={index}
                    product={product}
                />)
            })
            }
            <div className='person-history__row person-history__row--top'>
                <div className='person-history__box person-history__box--cost'>
                    <div className='person-history__totalcost'>
                        <span className='person-history__span'>Tổng tiền: </span>
                        <span className='person-history__cost'>{item.total}đ</span>
                    </div>
                </div>
            </div>
        </div>
    );
}