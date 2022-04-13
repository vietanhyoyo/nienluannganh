import MerchandiseItem from "./MerchandiseItem";
import { useState, useEffect, memo } from "react";
import axios from "axios";

function MerchandiseBox(props) {

    const [products, setProducts] = useState([
        {
            _id: 'sadfsadf',
            tensanpham: 'xa lach',
            hinhanh: ['https://vinmec-prod.s3.amazonaws.com/images/20210106_041321_793265_hat-giong-rau-xa-la.max-1800x1800.jpg'],
            gianiemyet: '50000',
            donvitinh: 'đ/kg',
            giasanpham: {
                _id: 'u',
                giaban: 0,
                khuyenmai: {
                    _id: 'd',
                    phantram: 0
                }
            }
        }
    ]);

    const showProduct = () => {
        const listProduct = [];
        let n = products.length - 1;
        if (n >= 6) n = 6;
        for (let i = 0; i <= n; i++) {
            listProduct.push(<MerchandiseItem
                key={i}
                _id={products[i]._id}
                name={products[i].tensanpham}
                image={products[i].hinhanh[0]}
                cost={products[i].gianiemyet}
                salecost={products[i].giasanpham.giaban}
                donvi={products[i].donvitinh}
            />);
        }
        return listProduct;
    }

    useEffect(() => {
        if (props.idloaisanpham !== 'null')
            axios.post('/products/sanphamtheoloaisanpham', { id: props.idloaisanpham })
                .then(response => response.data)
                .then(response => {
                    setProducts(response);
                })
    }, [props.idloaisanpham])

    return (
        <>
            <div className='merchandise__topic'>
                <div className='merchandise__emphasize'></div>
                <div className='merchandise__topic--span'>
                    <span>{props.tenloaisanpham}</span>
                </div>
            </div>
            <div className='merchandise__row'>
                {showProduct()}
            </div>
        </>
    );
}

export default memo(MerchandiseBox);