import '../../css/merchandise.css'
import { useState, useEffect } from 'react';
import MerchandiseBox from './MerchandiseBox';
import axios from 'axios';

function Merchandise() {
    const [list, setList] = useState([{
        _id: 'null',
        tenloaisanpham: 'null'
    }]);
    useEffect(function () {
        axios.get('/products/loaisanpham')
            .then(response => response.data)
            .then(response => {
                setList(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return (
        <div className='merchandise' >
            <div className='merchandise__content row-app'>
                {list.map((ele, index) => {
                    return <MerchandiseBox
                        key={index}
                        idloaisanpham={ele._id}
                        tenloaisanpham={ele.tenloaisanpham}
                    />
                })}
            </div>
        </div>
    );
}

export default Merchandise;