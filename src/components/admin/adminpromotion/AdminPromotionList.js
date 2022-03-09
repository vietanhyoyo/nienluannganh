import { useState } from 'react'
import AdminPromotionListItem from './AdminPromotionListItem';

export default function AdminPromotionList(prop) {
    const [product] = useState([{
        hinhanh: 'https://thucphamdongxanh.com/wp-content/uploads/2019/09/dua-nu-hoang.jpg',
        name: 'Khóm cầu đúc loại 1'
    }, {
        hinhanh: 'https://product.hstatic.net/200000287323/product/ca-chua-bee-cherry-huu-co-500x500_022d78c38d90452894d50e4b8a393e65.jpg',
        name: 'Cà chua bi trái ngọt ngây 5 quả'
    }, {
        hinhanh: 'https://product.hstatic.net/200000287323/product/ca-chua-bee-cherry-huu-co-500x500_022d78c38d90452894d50e4b8a393e65.jpg',
        name: 'Cà chua bi trái ngọt ngây 5 quả'
    }, {
        hinhanh: 'https://product.hstatic.net/200000287323/product/ca-chua-bee-cherry-huu-co-500x500_022d78c38d90452894d50e4b8a393e65.jpg',
        name: 'Cà chua bi trái ngọt ngây 5 quả'
    }, {
        hinhanh: 'https://thucphamdongxanh.com/wp-content/uploads/2019/09/dua-nu-hoang.jpg',
        name: 'Khóm cầu đúc loại 1'
    }, {
        hinhanh: 'https://thucphamdongxanh.com/wp-content/uploads/2019/09/dua-nu-hoang.jpg',
        name: 'Khóm cầu đúc loại 1'
    }, {
        hinhanh: 'https://thucphamdongxanh.com/wp-content/uploads/2019/09/dua-nu-hoang.jpg',
        name: 'Khóm cầu đúc loại 1'
    }, {
        hinhanh: 'https://thucphamdongxanh.com/wp-content/uploads/2019/09/dua-nu-hoang.jpg',
        name: 'Khóm cầu đúc loại 1'
    }, {
        hinhanh: 'https://thucphamdongxanh.com/wp-content/uploads/2019/09/dua-nu-hoang.jpg',
        name: 'Khóm cầu đúc loại 1'
    }])

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
                    {product.map((pro, index) => {
                        return <AdminPromotionListItem
                            key={index}
                            data={pro}
                        />
                    })}
                    <div className='admin-promotion-list-item'>
                        <div className='admin-promotion-list-item__col'>
                            <div className='admin-promotion-list-item__button admin-promotion-list-item__button--add'>
                                <i class="fi fi-rr-plus"></i> Thêm
                            </div>
                        </div>
                        <div className='admin-promotion-list-item__col'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}