

function CartInfo() {
    return (
        <div className='cart__row cart__row--boder'>
            <div className='cart__info cart__info--big cart__info--image' >
                    <img
                        className='cart__img'
                        src='https://cdn.tgdd.vn/Products/Images/2443/205993/bhx/-202201150926543269.jpg'
                        alt='product'
                    />
                    <div className='cart__name--product'>
                        <p style={{color: '#444'}}>Tên sản phẩm</p>
                        <p className='cart__delete'>Xóa</p>
                    </div>
            </div>
            <div className='cart__info cart__info--small' >
                <div className='cart__info__content'>
                    <span>10000</span>
                    <span>đ/lon</span>
                </div>
            </div>
            <div className='cart__info cart__info--small' >
                <div className='cart__info__content'>
                    <div className='cart__adjustbutton'><i class="fa-solid fa-plus"></i></div>
                    <input type='text'/>
                    <div className='cart__adjustbutton'><i class="fa-solid fa-minus"></i></div>
                </div>
            </div>
            <div className='cart__info cart__info--small' >
                <div className='cart__info__content'>
                    <span>10000</span><span>đ</span>
                </div>
            </div>
        </div>
    );
}

export default CartInfo;