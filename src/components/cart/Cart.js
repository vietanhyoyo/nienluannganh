import '../../css/cart.css';
import CartInfo from './CartInfo';

export default function Cart() {
    return (
        <div className='cart'>
            <div className='cart__body row-app'>
                <div className='cart__row'><h4>Giỏ hàng</h4></div>
                <div className='cart__row cart__row--boder'>
                    <div className='cart__info--top cart__info--big' >
                        <p className='cart__info__p'>Sản phẩm</p>
                    </div>
                    <div className='cart__info--top cart__info--small' >
                        <p className='cart__info__p'>Đơn giá</p>
                    </div>
                    <div className='ccart__info--top cart__info--small' >
                        <p className='cart__info__p'>Số lượng</p>
                    </div>
                    <div className='cart__info--top cart__info--small' >
                        <p className='cart__info__p'>Tổng tiền</p>
                    </div>
                </div>
                <CartInfo />
                <CartInfo />
                <div className='cart__payment'>
                    <div className='cart__row cart__row--top'>
                        <div className='cart__info--top cart__info--big' ></div>
                        <div className='cart__info--top cart__info--small' ></div>
                        <div className='cart__info--top cart__info--small' >
                            <div className='cart__cost'>
                                <p className='cart__p' style={{textAlign: 'end'}}>Tổng tiền hàng:</p>
                                <p className='cart__p' style={{textAlign: 'end'}}>Phí vận chuyển:</p>
                                <p className='cart__p' style={{textAlign: 'end'}}>Tổng cộng:</p>
                            </div>
                        </div>
                        <div className='cart__info--top cart__info--small' >
                            <div className='cart__cost'>
                                <p className='cart__p'>50000đ</p>
                                <p className='cart__p'>10000đ</p>
                                <p className='cart__p cart__info__p--red'>600000đ</p>
                                <div className='button'>Đặt hàng</div>
                                <div className='button cart--gray'>Xóa giỏ hàng</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}