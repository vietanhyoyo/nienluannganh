import '../../css/paysuccess.css'
import { Link } from 'react-router-dom'

export default function PaySuccess() {
    return (
        <div class='pay row-app'>
            <div class='pay_notify'>
                <div class='pay_icon'>
                    <i class=" pay_check_success fa-solid fa-circle-check"></i>
                </div>
                <div class='pay_notify_detail'>
                    <h1>Thanh toán thành công!</h1>
                    <h2>Cảm ơn bạn đã đến và mua hàng của chúng tôi!</h2>
                </div>
                <Link to='/'>
                    <button class='button button_back'>Tiếp tục mua hàng</button>
                </Link>
                <Link to='/cart' >
                    <p className='back_cart'>Kiểm tra giỏ hàng</p>
                </Link>
            </div>
        </div>
    )
}