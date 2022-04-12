import { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../contexts/LoginContext';
import { CartContext } from '../contexts/CartContext';

function CartIcon() {
    /**Các context */
    const loginState = useContext(LoginContext);
    const cartState = useContext(CartContext);

    /**UseState lưu số liệu */
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (loginState.role === null && loginState.role !== 'admin' && loginState.role !== 'nhanvien')
            cartState.getAPI(loginState.iduser);
    }, [loginState.iduser, loginState.role])

    useEffect(() => {
        setIndex(cartState.list.length)
        return (() => {

        })
    }, [cartState.list])

    return (
        <div>{index > 0 &&
            <div style={{
                position: 'absolute',
                zIndex: '1',
                backgroundColor: 'var(--c5)',
                color: '#fff',
                fontSize: '8px',
                lineHeight: '16px',
                width: '16px',
                height: '16px',
                transform: 'translate(-10px,-10px)',
                textAlign: 'center',
                borderRadius: '50%'
            }}>{index}</div>}
            <i className='fas fa-shopping-basket'></i>
        </div>
    )
}
export default CartIcon;