

function CartInfo(props) {
    return (
        <div className='cart__row cart__row--boder'>
            <div className='cart__info cart__info--big cart__info--image' >
                    <img
                        className='cart__img'
                        src={props.hinhanh}
                        alt='product'
                    />
                    <div className='cart__name--product'>
                        <p style={{color: '#444'}}>{props.tensanpham}</p>
                        <p className='cart__delete'>Xóa</p>
                    </div>
            </div>
            <div className='cart__info cart__info--small' >
                <div className='cart__info__content'>
                    <span>{props.gia}</span>
                    <span>đ{props.donvitinh}</span>
                </div>
            </div>
            <div className='cart__info cart__info--small' >
                <div className='cart__info__content'>
                    <div className='cart__adjustbutton'><i className='fa-solid fa-plus'></i></div>
                    <input type='text' value={props.soluong.toString()}/>
                    <div className='cart__adjustbutton'><i className='fa-solid fa-minus'></i></div>
                </div>
            </div>
            <div className='cart__info cart__info--small' >
                <div className='cart__info__content'>
                    <span>{props.tongtien}</span><span>đ</span>
                </div>
            </div>
        </div>
    );
}

export default CartInfo;