import { useState } from 'react'
import AdminPromotionListItem from './AdminPromotionListItem';

export default function AdminPromotionList(prop) {
    const [products, setProducts] = useState(prop.selectPromotion.danhsachsanpham)

    const deleteSanPham = (id) => {
        setProducts(prev => {
            const arr = prev.filter(item => {
                return item._id !== id;
            })
            return arr;
        })
    }

    return (
        <div className='admin-promotion-list'>
            <div className='admin-promotion-list__turnoff' onClick={prop.onToggle}></div>
            <div className='admin-promotion-list__form'>
                <div className='admin-promotion-list__header'>
                    <div className='admin-promotion-list__name'>
                        <span>Khuyến mãi 8/3</span>
                    </div>
                    <div className='admin-promotion-list__close'>
                        <i className='fi fi-rr-cross-circle' onClick={prop.onToggle}></i>
                    </div>
                </div>
                <div className='admin-promotion-list__body'>
                    {products.map((pro, index) => {
                        return <AdminPromotionListItem
                            resetSelectPromotion={prop.resetSelectPromotion}
                            key={index}
                            promotion={prop.selectPromotion}
                            data={pro}
                            onDelete={deleteSanPham}
                        />
                    })}

                </div>
                <div className='admin-promotion-list-item__delete'><span onClick={prop.onDelete}>Xóa khuyến mãi này</span></div>
            </div>
        </div>
    );
}