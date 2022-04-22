import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { LoginContext } from '../../contexts/LoginContext';
import { CartContext } from '../../contexts/CartContext';

const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}
function MerchandiseItem(prop) {


    /*Dữ liệu đăng nhập */
    const loginState = useContext(LoginContext);
    const userid = loginState.iduser;
    /**Dữ liệu giỏ hàng trên header */
    const cartState = useContext(CartContext);
    const navigator = useNavigate();
    const handleShowProduct = value => {
        navigator(`/product/${value}`);
    }
    const addCart = e => {
        e.stopPropagation();
        const giatri = prop.salecost ? prop.salecost : prop.cost;
        console.log(giatri)
        if (userid !== null)
            axios.post('/order/themchitietdathang', { khachhang: userid, soluong: 1, idSP: prop._id, gia: giatri })
                .then(response => response.data)
                .then(response => {
                    cartState.getAPI(userid);
                    alert('Đã thêm vào giở hàng')
                });
        else alert('Bạn vui lòng đăng nhập!');
    }

    return (
        <div onClick={() => handleShowProduct(prop._id)} className='merchandise__item'>
            <div className='merchandise__box'>
                <div className='merchandise__element'>
                    {prop.khuyenmai && <div className='merchandise__promotion'>-{prop.khuyenmai}<i>%</i></div>}
                    <div className='merchandise__img'>
                        <img src={prop.image} alt='noPhoto' />
                    </div>
                    <p className='merchandise__name'>{prop.name}</p>
                    {prop.cost === prop.salecost ?
                        <p className='merchandise__price'>
                            <span>
                                <b>{formatNumber(prop.cost)}</b>đ/{prop.donvi}
                            </span>
                        </p> :
                        <p className='merchandise__price'>
                            <span>
                                <b>{formatNumber(prop.salecost)}</b>đ/{prop.donvi}
                            </span>
                            <span className='merchandise__price--undone'>
                                {formatNumber(prop.cost)}đ/{prop.donvi}
                            </span>
                        </p>}
                    <div className='merchandise__add-cart'>
                        <i className='fa-solid fa-cart-arrow-down ' onClick={e => addCart(e)}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MerchandiseItem;