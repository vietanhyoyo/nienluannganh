import '../../css/merchandise.css'
import MerchandiseItem from './MerchandiseItem';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Merchandise() {
    const [list, setList] = useState({ _id:'' });
    useEffect(function () {
        axios.get('/merchandise')
            .then(response=>response.data)
            .then(function (response) {
                if(list._id===''){
                    console.log(response);
                    setList(response[0]);
                }
                
            })
            .catch(function (error) {
                console.log(error);
            });
    },[list]);
    console.log('In');
    console.log(list);
    return (
        <div className='merchandise' >
            <div className='merchandise__content row-app'>
                <div className='merchandise__row'>
                    <MerchandiseItem
                        name={list.name}
                        image={list.image}
                        cost={list.cost}
                        donvi={list.donvi}
                    />
                    <MerchandiseItem
                        name='xa lach'
                        image='https://vinmec-prod.s3.amazonaws.com/images/20210106_041321_793265_hat-giong-rau-xa-la.max-1800x1800.jpg'
                        cost='50000'
                        donvi='đ/kg'
                    />
                    <MerchandiseItem
                        name='ca chua'
                        image='https://nuoitrong.vn/wp-content/uploads/2020/10/b12-768x1024.jpg'
                        cost='5000'
                        donvi='đ/kg'
                    />
                    <MerchandiseItem
                        name='ca chua'
                        image='https://nuoitrong.vn/wp-content/uploads/2020/10/b12-768x1024.jpg'
                        cost='5000'
                        donvi='đ/kg'
                    />
                    <MerchandiseItem
                        name='xa lach'
                        image='https://vinmec-prod.s3.amazonaws.com/images/20210106_041321_793265_hat-giong-rau-xa-la.max-1800x1800.jpg'
                        cost='50000'
                        donvi='đ/kg'
                    />
                    <MerchandiseItem
                        name='carot la day lam mua di mua di duoc khong vay lam on di ma'
                        image='https://cdn1.tuoitre.vn/zoom/600_315/2017/photo1513309842425-1513309842425.jpg'
                        cost='10000'
                        donvi='đ/kg'
                    />
                    <MerchandiseItem
                        name='carot la day lam mua di mua di duoc khong vay lam on di ma'
                        image='https://cdn1.tuoitre.vn/zoom/600_315/2017/photo1513309842425-1513309842425.jpg'
                        cost='10000'
                        donvi='đ/kg'
                    />
                    <MerchandiseItem
                        name='xa lach'
                        image='https://vinmec-prod.s3.amazonaws.com/images/20210106_041321_793265_hat-giong-rau-xa-la.max-1800x1800.jpg'
                        cost='50000'
                        donvi='đ/kg'
                    />
                </div>
            </div>
        </div>
    );
}

export default Merchandise;