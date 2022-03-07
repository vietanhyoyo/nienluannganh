import { useState } from 'react';

export default function AdminInvoiceProduct(prop){
    const [product] = useState(prop.product);
    return(
        <div className='admin-invoice__row admin-invoice__row--top' key={prop.index}>
                <div className='admin-invoice__box'>
                    <div className='admin-invoice__img'>
                        <img src={product.image} alt='noPhoto' />
                    </div>
                    <div>
                        <p className='admin-invoice__name'>{product.name}</p>
                        <p className='admin-invoice__quantity'>SL: 
                        <span> {product.amount} </span> 
                        <span> {product.unit} </span></p>
                    </div>
                </div>
                <div className='admin-invoice__box admin-invoice__box--right'>
                    <p className='admin-invoice__cost'>{product.cost}đ</p>
                </div>
            </div>
    );
}