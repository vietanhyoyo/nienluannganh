
import {useState} from 'react'

export default function AdminPromotionItem(prop) {
    const [promotion] = useState(prop.promo);
    let statusClass = 'admin-promotion__num';
    if(promotion.status === 1) statusClass += ' admin-promotion__num--green'

    return (
        <div className='admin-promotion__item'>
            <div className='admin-promotion__item__col'>
                <div className={statusClass}>
                    <div className='admin-promotion__num__content'>
                        <p>{promotion.products}</p>
                        <p className='admin-promotion__num__sp'>sản phẩm</p>
                    </div>
                </div>
            </div>
            <div className='admin-promotion__item__col admin-promotion__item__col--after'>
                <div className='admin-promotion__item__row'>
                    <div className='admin-promotion__item__name'>{promotion.name}</div>
                    <div className='admin-promotion__item__price'>Giảm {promotion.price}%</div>
                </div>
                <div className='admin-promotion__item__row'>
                    <div className='admin-promotion__item__date'>{promotion.startdate} - {promotion.enddate}</div>
                </div>
            </div>
        </div>
    );
}