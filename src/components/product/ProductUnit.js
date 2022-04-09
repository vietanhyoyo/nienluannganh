import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductUnit(props) {
    /**Dùng để chuyển trang */
    const navigate = useNavigate();
    /**Use State lưu sản phẩm */
    const [product, setProduct] = useState({
        _id: '',
        donvitinh: 'Gia'
    })
    /**Chuyển hướng trang qua loại sản phẩm khác */
    const handleURL = () => {
        navigate(`/product/${product._id}`);
    }

    useEffect(() => {
        /**Lấy dữ liệu API */
        axios.post('/products/donvitinh', {id: props.idProduct})
            .then(res => setProduct(res.data))
    }, [props.idProduct])

    return (<div className='product__name-type-btn' onClick={handleURL}>
        <p>{product.donvitinh}</p>
    </div>)
}

export default ProductUnit;