
import axios from "axios";
import { useState, useEffect } from "react";

const divStyle = {
    border: '1px solid #ddd'
}

const boxStyle = {
    margin: 'auto',
    display: 'flex',
    textAlign: 'center',
    width: '60px',
    height: '60px'
}

const imgStyle = {
    margin: 'auto',
    maxWidth: '100%',
    maxWeight: '100%',
}

const pStyle = {
    marginTop: '10px',
    width: '100%',
    textAlign: 'center'
}

const deleteStyle = {
    color: 'var(--c5)',
    margin: '5px auto',
    width: '100%',
    textAlign: 'center',
}

const deletebuttonStyle = {
    cursor: 'pointer'
}

export default function AdminProductTypeImage(props) {
    const [product, setProduct] = useState({
        _id: 'dd',
        donvitinh: 'donvi',
        hinhanh: ['']
    })

    useEffect(() => {
        if (props.idProduct)
            axios.post('/products/laysanphamcungloai', { _id: props.idProduct })
                .then(res => setProduct(res.data));
    }, [props.idProduct]);

    return (
        <div style={divStyle}>
            <div style={boxStyle}>
                {props.idProduct && <img src={product.hinhanh[0]} alt='hh' style={imgStyle} />}
            </div>
            <p style={pStyle}>{product.donvitinh}</p>
            <p style={deleteStyle}>
                <span style={deletebuttonStyle} onClick={props.onDelete}>xóa</span>
            </p>
        </div >
    )
}