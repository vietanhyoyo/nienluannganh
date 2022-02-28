import '../../css/adminpromotion.css'
import AdminPromotionItem from './adminpromotion/AdminPromotionItem';
import {useState} from 'react'

export default function AdminPromotion() {
    const [promotions] = useState([
        {
            id: 'ddd',
            name: 'Khuyến mãi 8/3',
            price: '10',
            startdate: '12:00 8/3/2022',
            enddate: '24:00 20/3/2022',
            products: 0,
            status: 0  
        },{
            id: 'dttt',
            name: 'Khuyến mãi học sinh, sinh viên',
            price: '30',
            startdate: '12:00 5/3/2022',
            enddate: '24:00 30/4/2022',
            products: 128,
            status: 1
        },
        {
            id: 'dttt',
            name: 'Khuyến mãi tết',
            price: '30',
            startdate: '12:00 1/1/2022',
            enddate: '24:00 15/2/2022',
            products: 81,
            status: 1
        }
    ])
    return (
        <div className='admin-promotion'>
            <div className='admin-promotion__header'>
                <div className='admin-promotion__header__1'>
                    <div className='admin-promotion__header--title'>
                        <i className='fi fi-rr-megaphone'></i>
                        <h2>Tạo khuyến mãi cho sản phẩm</h2>
                    </div>
                    <p className='admin-promotion__minitext'>Quản lý các khuyển mãi của cửa hàng!</p>
                </div>
                <div>
                    <form method='post' action='' className='admin-promotion__form'>
                        <div className='admin-promotion__row'>
                            <div className='admin-promotion__col'>
                                <label htmlFor='name' className='admin-promotion__label'>Tên khuyến mãi<b>*</b></label>
                                <input type='text' name='name' className='admin-promotion__input' />
                            </div>
                            <div className='admin-promotion__col admin-promotion__col--after'>
                                <label htmlFor='price' className='admin-promotion__label'>Nhập giá giảm<b>*</b></label>
                                <input type='text' name='price' className='admin-promotion__input' placeholder='0.1' />
                            </div>
                        </div>
                        <div className='admin-promotion__row'>
                            <div className='admin-promotion__col'>
                                <label htmlFor='startdate' className='admin-promotion__label'>Ngày bắt đầu<b>*</b></label>
                                <input type='date' name='startdate' className='admin-promotion__input' />
                            </div>
                            <div className='admin-promotion__col admin-promotion__col--after'>
                                <label htmlFor='enddate' className='admin-promotion__label'>Ngày kết thúc<b>*</b></label>
                                <input type='date' name='enddate' className='admin-promotion__input' />
                            </div>
                        </div>
                        <div className='admin-promotion__row admin-promotion__row--btn'>
                            <div className='button' >Thêm</div>
                            <div className='button admin-promotion__btn-gray' >Hủy</div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='admin-promotion__body'>
                <div className='admin-promotion__list'>
                    {promotions.map((promotion,index) => {
                        return <AdminPromotionItem 
                            key = {index}
                            promo = {promotion}
                        />
                    })}
                </div>
            </div>
        </div>
    );
}