import { memo, useState, useEffect } from 'react'
import axios from 'axios';


function AdminProductFilter(props) {

    /*Các dữ liệu của menu bar */
    const [lists, setLists] = useState([{
        _id: '',
        tenloaihang: '',
        loaisanpham: [{
            _id: '',
            tenloaisanpham: ''
        }]
    }]);
    /**Lựa chọn loại hàng */
    const [select, setSelect] = useState(lists[0]);

    /**Lấy dữ liệu danh sách loại hàng */
    const getDataToAPI = () => axios.get('/products/loaihangloaisanpham')
        .then(response => response.data)
        .then(function (response) {
            setLists(response);
            setSelect(response[0])
        })
        .catch(function (error) {
            console.log(error);
        });
    useEffect(() => {
        getDataToAPI();
    }, [])

    return (
        <div className="orderadmin-header" style={{backgroundColor: '#fff'}}>
            <div className="orderadmin-title">
                <p className="orderamin-title-icon"><i className="fa-solid fa-boxes-stacked"></i></p>
                <h3 className="orderamin-title-text">
                    Hàng hóa
                </h3>
            </div>
            <div className="orderadmin-search">
                <div className="orderadmin-search-item"
                    onClick={() => props.setFilter('')}
                ><b>Tất cả sản phẩm</b>
                </div>
                <div className="orderadmin-search-item">
                    <select className='orderadmin-search--select'
                        defaultValue={lists[0]}
                        onChange={e => setSelect(lists[Number(e.target.value)])}>
                        {lists.map((ele, index) => {
                            return <option key={index} value={index}>
                                {ele.tenloaihang}
                            </option>
                        })}
                    </select>
                </div>
                {select.loaisanpham.map((ele, index) => {
                    return <div
                        key={index}
                        className="orderadmin-search-item"
                        onClick={() => props.setFilter(ele._id)}>
                        {ele.tenloaisanpham}
                    </div>
                })}
            </div>
        </div>
    )
}

export default memo(AdminProductFilter);