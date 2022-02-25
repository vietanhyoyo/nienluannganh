import { useState } from 'react';

export default function PersonHistoryProduct(prop){
    const [product] = useState(prop.product);
    return(
        <div className='person-history__row person-history__row--top' key={prop.index}>
                <div className='person-history__box'>
                    <div className='person-history__img'>
                        <img src={product.image} alt='noPhoto' />
                    </div>
                    <div>
                        <p className='person-history__name'>{product.name}</p>
                        <p className='person-history__quantity'>SL: 
                        <span>{product.amount}</span> 
                        <span>{product.unit}</span></p>
                    </div>
                </div>
                <div className='person-history__box person-history__box--right'>
                    <p className='person-history__cost'>{product.cost}đ</p>
                </div>
            </div>
    );
}