import '../../css/listproductadmin.css'
import AdminProductItem from './listproductadmin/AdminProductItem';
import AdminAddPromotion from './adminpromotion/AdminAddPromotion';
import AdminProductEdit from './listproductadmin/AdminProductEdit';
import AdminProductFilter from './listproductadmin/AdminProductFilter';
import { useEffect, useState } from 'react'
import axios from 'axios'
function OrderAdmin() {

    /**Ẩn hiện form thêm khuyến mãi */
    const [promotionDisplay, setPromotionDisplay] = useState(false);
    /**Ẩn hiện form sua san pham */
    const [editDisplay, setEditDisplay] = useState(false);
    /**Loc Filter kết quả */
    const [filter, setFilter] = useState({
        tensanpham: '',
        loaisanpham: ''
    })

    /**Sản phẩm đang được chọn */
    const [idProductSelect, setIDProductSelect] = useState('');

    const [data, setData] = useState([{
        id: '',
        tensanpham: '',
        loaihang: '',
        hinhanh: '',
        gianiemyet: 0,
        soluong: 0,
        donvitinh: '',
        loaisanpham: {
            _id: '',
            tenloaisanpham: ''
        }
    }])

    /**Danh sách sản phẩm */
    const [product, setProduct] = useState([{
        id: '',
        tensanpham: '',
        loaihang: '',
        hinhanh: '',
        gianiemyet: 0,
        soluong: 0,
        donvitinh: '',
        loaisanpham: {
            _id: '',
            tenloaisanpham: ''
        }
    }]);

    /**Lấy danh sách sản phẩm */
    const a = () => axios.get("/products/sanpham")
        .then(res => res.data)
        .then(res => {
            setData(res);
        })
        .catch(function (error) {
            console.log(error);
        });

    useEffect(() => {
        a();
    }, [])

    useEffect(() => {
        if (filter.loaisanpham !== '') {
            const arr = data.filter(ele => {
                return ele.loaisanpham._id === filter.loaisanpham;
            })
            setProduct(arr);
        } else {
            if (filter.tensanpham !== '') {
                const arr = data.filter(ele => {
                    return ele.tensanpham.indexOf(filter.tensanpham) !== -1;
                })
                setProduct(arr);
            }
            else {
                setProduct(data)
            }

        }
    }, [filter, data]);

    return (
        <div className="OrderAdmin">
            <div className="orderadmin-app">
                <AdminProductFilter
                    setFilter={value => setFilter(({ tensanpham: '', loaisanpham: value }))}
                />
                <div className="orderadmin-content">
                    <div className="orderadmin-content-navbar">
                        <div className='orderadmin-content-navbar-choose'>
                            <p className='orderadmin-content-navbar-choose-text'>
                                Tên sản phẩm
                            </p>
                            <p className='orderadmin-content-navbar-choose-icon'>
                                <i className="fa-solid fa-sort-down"></i>
                            </p>
                        </div>
                        <div className='orderadmin-content-navbar-text'>
                            <label htmlFor='adminorder-inputsearch' className='orderadmin-content-navbar-text-icon'>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </label>
                            <p className='orderadmin-content-navbar-text-input'>
                                <input id='adminorder-inputsearch'
                                    className='orderadmin-content-navbar-text-input-items'
                                    placeholder='Nhập thông tin sản phẩm cần tìm'
                                    value={filter.tensanpham}
                                    onChange={e => setFilter(({ tensanpham: e.target.value, loaisanpham: '' }))}
                                />
                            </p>
                        </div>
                    </div>
                    <div className="admin-product-header">
                        <div className="admin-product-header-item">Ảnh sản phẩm</div>
                        <div className="admin-product-header-item">Tên sản phẩm</div>
                        <div className="admin-product-header-item">Loại sản phẩm</div>
                        <div className="admin-product-header-item">Số lượng còn lại</div>
                        <div className="admin-product-header-item">Giá bán</div>
                        <div className="admin-product-header-item">Quản lý</div>
                    </div>
                    {product.map((productitem, index) => {
                        return (
                            <AdminProductItem
                                key={index}
                                product={productitem}
                                onShowPromotion={() => setPromotionDisplay(true)}
                                onShowEdit={() => setEditDisplay(true)}
                                onSelectID={() => setIDProductSelect(productitem._id)}
                                reRender={a}
                            />
                        )
                    })}
                </div>
            </div>
            {promotionDisplay && <AdminAddPromotion
                onUnShow={() => setPromotionDisplay(false)}
                idProductSelect={idProductSelect}
            />}
            {editDisplay &&
                <AdminProductEdit
                    onUnShow={() => setEditDisplay(false)}
                    idProductSelect={idProductSelect}
                    reRender={a}
                />
            }
        </div>
    )
}

export default OrderAdmin;