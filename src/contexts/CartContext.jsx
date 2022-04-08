import axios from "axios";
import { useState, createContext } from "react";

const CartContext = createContext()

function CartProvider({ children }) {

    const [list, setList] = useState([]);


    const getAPI = id =>
        axios.post('/order/hienthigiohang', { khachhang: id })
            .then(response => response.data)
            .then(response => {
                setList(response);
                console.log(response)
            });

    const value = {
        list,
        setList, 
        getAPI
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider }