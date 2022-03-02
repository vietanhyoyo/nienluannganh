import MerchandiseItem from "./MerchandiseItem";
import { useState } from "react";

export default function MerchandiseBox() {

    const [products] = useState([
        {
            name: 'xa lach',
            image: 'https://vinmec-prod.s3.amazonaws.com/images/20210106_041321_793265_hat-giong-rau-xa-la.max-1800x1800.jpg',
            cost: '50000',
            donvi: 'đ/kg',
        }, {
            name: 'ca chua',
            image: 'https://nuoitrong.vn/wp-content/uploads/2020/10/b12-768x1024.jpg',
            cost: '5000',
            donvi: 'đ/kg',
        }, {
            name: 'Cam Vĩnh Long',
            image: 'https://product.hstatic.net/200000239961/product/cay-cam-vang-my-2_9d5bac331dc04a0a9e9300e0b6373ecf.jpg',
            cost: '48000',
            donvi: 'đ/kg',
        }, {
            name: 'xa lach',
            image: 'https://vinmec-prod.s3.amazonaws.com/images/20210106_041321_793265_hat-giong-rau-xa-la.max-1800x1800.jpg',
            cost: '50000',
            donvi: 'đ/kg',
        }, {
            name: 'xa lach',
            image: 'https://vinmec-prod.s3.amazonaws.com/images/20210106_041321_793265_hat-giong-rau-xa-la.max-1800x1800.jpg',
            cost: '50000',
            donvi: 'đ/kg',
        }, {
            name: 'xa lach',
            image: 'https://vinmec-prod.s3.amazonaws.com/images/20210106_041321_793265_hat-giong-rau-xa-la.max-1800x1800.jpg',
            cost: '50000',
            donvi: 'đ/kg',
        }, {
            name: 'xa lach',
            image: 'https://vinmec-prod.s3.amazonaws.com/images/20210106_041321_793265_hat-giong-rau-xa-la.max-1800x1800.jpg',
            cost: '50000',
            donvi: 'đ/kg',
        }, {
            name: 'xa lach',
            image: 'https://vinmec-prod.s3.amazonaws.com/images/20210106_041321_793265_hat-giong-rau-xa-la.max-1800x1800.jpg',
            cost: '50000',
            donvi: 'đ/kg',
        }, {
            name: 'xa lach',
            image: 'https://vinmec-prod.s3.amazonaws.com/images/20210106_041321_793265_hat-giong-rau-xa-la.max-1800x1800.jpg',
            cost: '50000',
            donvi: 'đ/kg',
        }, {
            name: 'xa lach',
            image: 'https://vinmec-prod.s3.amazonaws.com/images/20210106_041321_793265_hat-giong-rau-xa-la.max-1800x1800.jpg',
            cost: '50000',
            donvi: 'đ/kg',
        }
    ]);

    const showProduct = () => {
        const listProduct = [];

        for (let i = 0; i < 5 ; i++) {
            listProduct.push(<MerchandiseItem
                key={i}
                name={products[i].name}
                image={products[i].image}
                cost={products[i].cost}
                donvi={products[i].donvi}
            />);
        }

        return listProduct;
    }

    return (
        <>
            <div className='merchandise__topic'>
                <div className='merchandise__emphasize'></div>
                <div className='merchandise__topic--span'>
                    <span>Rau củ</span>
                </div>
            </div>
            <div className='merchandise__row'>
                {
                showProduct()
                /*products.map((product, index) => {
                    return <MerchandiseItem
                        key={index}
                        name={product.name}
                        image={product.image}
                        cost={product.cost}
                        donvi={product.donvi}
                    />
                })*/}
            </div>
        </>
    );
} 