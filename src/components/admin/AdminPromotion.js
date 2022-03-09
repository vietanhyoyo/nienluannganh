import '../../css/adminpromotion.css'
import AdminPromotionItem from './adminpromotion/AdminPromotionItem';
import { useState } from 'react'
import AdminPromotionList from './adminpromotion/AdminPromotionList';

export default function AdminPromotion() {
    const [show, setShow] = useState(false);
    const [promotions] = useState([
        {
            id: 'ddd',
            name: 'Khuyến mãi 8/3',
            price: '10',
            startdate: '12:00 8/3/2022',
            enddate: '24:00 20/3/2022',
            products: 0,
            status: 0
        }, {
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
    const handleToggleShow = () => {
        setShow(!show);
    }
    return (
        <div className='admin-promotion'>
            <div className='admin-promotion__header'>
                <div className='admin-promotion__header__1'>
                    <div className='admin-promotion__header--title'>
                        <i className='fi fi-rr-megaphone'></i>
                        <h2>Tạo khuyến mãi cho sản phẩm</h2>
                    </div>
                    <p className='admin-promotion__minitext'>Form thêm khuyến mãi!</p>
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
                <div className='admin-promotion__controll'>
                    <div className='admin-promotion__row admin-promotion__filter'>
                        <div className='admin-promotion__col--small'>
                            <p>Lọc</p>
                        </div>
                        <div className='admin-promotion__col'>
                            <label htmlFor='startdatefilter' className='admin-promotion__label'>Ngày bắt đầu</label>
                            <input type='date' name='startdatefilter' className='admin-promotion__input' />
                        </div>
                        <div className='admin-promotion__col admin-promotion__col'>
                            <label htmlFor='enddatefilter' className='admin-promotion__label'>Ngày kết thúc</label>
                            <input type='date' name='enddatefilter' className='admin-promotion__input' />
                        </div>
                        <div className='admin-promotion__col'>
                            <label htmlFor='statefilter' className='admin-promotion__label'>Trạng thái</label>
                            <select type='date' name='startdate' className='admin-promotion__input' >
                                <option value='1'>hiệu lực</option>
                                <option value='2'>hết hiệu lực</option>
                            </select>
                        </div>
                        <div className='admin-promotion__col--small'>
                            <div className='button'>Liệt kê</div>
                        </div>
                    </div>
                </div>
                <div className='admin-promotion__list'>
                    {promotions.map((promotion, index) => {
                        return <AdminPromotionItem
                            onToggle={handleToggleShow}
                            key={index}
                            promo={promotion}
                        />
                    })}
                </div>
            </div>
            {show && <AdminPromotionList
                onToggle={handleToggleShow}
            />}
        </div>
    );
}