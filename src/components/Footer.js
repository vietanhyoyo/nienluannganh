import '../css/footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__box row-app'>
                <div className='footer__element'>
                    <p className='footer__title'>Về chúng tôi</p>
                    <ul>
                        <li className='footer__li'>Giới thiệu về cửa hàng</li>
                        <li className='footer__li'>Quản lý chất lượng</li>
                        <li className='footer__li'>Chính sách bảo mật và chia sẻ thông tin</li>
                        <li className='footer__li'>Điểu khoản và điều kiện giao dịch</li>
                        <li className='footer__li'>Tuyển dụng</li>
                    </ul>
                </div>
                <div className='footer__element'>
                    <p className='footer__title'>Hỗ trợ khách hàng</p>
                    <ul>
                        <li className='footer__li'>Trung tâm hỗ trợ khách hàng</li>
                        <li className='footer__li'>Chính sách giao hàng</li>
                        <li className='footer__li'>Chính sách thanh toán</li>
                        <li className='footer__li'>Chính sách đổi trả</li>
                        <li className='footer__li'>Chính sách chiếc khấu ưu đãi mua sắm</li>
                    </ul>
                </div>
                <div className='footer__element'>
                    <p className='footer__title'>Chăm sóc khách hàng</p>
                    <ul>
                        <li className='footer__li'>Mua online: 035 8080 8080</li>
                        <li className='footer__li'>Email: bachhoa@gmail.com</li>
                        <li className='footer__li'>Địa chỉ: Ninh Kiều, Cần Thơ</li>
                    </ul>
                </div>
                <div className='footer__element'>
                    <p className='footer__title'>Theo dõi chúng tôi trên</p>
                    <ul>
                        <li className='footer__li'>facebook</li>
                        <li className='footer__li'>zalo</li>
                    </ul>
                </div>
            </div>
            <div className='footer__box row-app'>
                <div>
                    <p style={{marginTop: '20px', color: '#999'}}>
                        <i>Cửa hàng chúng tôi là sự lựa chọn hoàn hảo của bạn</i>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;