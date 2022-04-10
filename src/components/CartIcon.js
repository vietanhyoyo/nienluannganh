import { useContext, useEffect } from 'react';
import { LoginContext } from '../contexts/LoginContext';
import { CartContext } from '../contexts/CartContext';

function CartIcon() {
    const loginState = useContext(LoginContext);
    const cartState = useContext(CartContext);

    useEffect(() => {
        if (loginState.role === null && loginState.role !== 'admin' && loginState.role !== 'nhanvien')
            cartState.getAPI(loginState.iduser);
    }, [loginState.iduser])

    return (
        <div>{cartState.list.length > 0 &&
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
            }}>{cartState.list.length}</div>}
            <i className='fas fa-shopping-basket'></i>
        </div>
    )
}
export default CartIcon;