import '../../css/buy.css'

export default function Buy() {
    return (
        <div className='buy'>
            <div className='buy__body row-app'>
                <h2 className='buy__title' >Thanh toán</h2>
                <div className='buy__box'>
                    <h3 className='buy__h3'>Thông tin người mua hàng</h3>
                    <div className='buy__row'>
                        <span className='buy__row--left'>Tên người nhận</span>
                        <input className='buy__row--right' type='text' />
                    </div>
                    <div className='buy__row'>
                        <span className='buy__row--left'>Điện thoại</span>
                        <input className='buy__row--right' type='text' />
                    </div>
                    <div className='buy__row'>
                        <span className='buy__row--left'>Tỉnh/Thành phố</span>
                        <input className='buy__row--right' type='text' />
                    </div>
                    <div className='buy__row'>
                        <span className='buy__row--left'>Quận/Huyện</span>
                        <input className='buy__row--right' type='text' />
                    </div>
                    <div className='buy__row'>
                        <span className='buy__row--left'>Phường/Xã</span>
                        <input className='buy__row--right' type='text' />
                    </div>
                    <div className='buy__row'>
                        <span className='buy__row--left'>Số nhà, tên đường</span>
                        <input className='buy__row--right' type='text' />
                    </div>
                    <div className='buy__row'>
                        <span className='buy__row--left'>Địa chỉ email</span>
                        <input className='buy__row--right' type='text' />
                    </div>
                </div>
                <div className='buy__box buy__box--payment'>
                    <div className='buy__payment'>
                        <div className='buy__payment__row'>
                            <div className='buy__payment__info'>Tiền hàng:</div>
                            <div className='buy__payment__info'>200000đ</div>
                        </div>
                        <div className='buy__payment__row'>
                            <div className='buy__payment__info'>Phí giao hàng:</div>
                            <div className='buy__payment__info'>10000đ</div>
                        </div>
                        <div className='buy__payment__row'>
                            <div className='buy__payment__info'><div className='button buy__btn buy__btn--other'>Hủy</div></div>
                            <div className='buy__payment__info'><div className='button buy__btn'>Thanh toán</div></div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}