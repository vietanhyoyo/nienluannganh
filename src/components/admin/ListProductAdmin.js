import '../../css/listproductadmin.css'
import AdminProductItem from './listproductadmin/AdminProductItem';
import AdminAddPromotion from './adminpromotion/AdminAddPromotion';
import AdminProductEdit from './listproductadmin/AdminProductEdit';
import { useEffect, useState } from 'react'
import axios from 'axios'
function OrderAdmin() {

    /**Ẩn hiện form thêm khuyến mãi */
    const [promotionDisplay, setPromotionDisplay] = useState(false);
    /**Ẩn hiện form sua san pham */
    const [editDisplay, setEditDisplay] = useState(false);

    /**Sản phẩm đang được chọn */
    const [idProductSelect, setIDProductSelect] = useState('');

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
            tenloaisanpham: ''
        }
    }]);

    /**Lấy danh sách sản phẩm */
    const a = () => axios.get("/products/sanpham")
        .then(res => res.data)
        .then(res => {
            setProduct(res);
        })
        .catch(function (error) {
            console.log(error);
        });

    useEffect(() => {
        a()
    }, [])

    return (
        <div className="OrderAdmin">
            <div className="orderadmin-app">
                <div className="orderadmin-header">
                    <div className="orderadmin-title">
                        <p className="orderamin-title-icon"><i className="fa-solid fa-boxes-stacked"></i></p>
                        <h3 className="orderamin-title-text">
                            Hàng hóa
                        </h3>
                    </div>
                    <div className="orderadmin-search">
                        <div className="orderadmin-search-item"><b>Tất cả sản phẩm</b></div>
                        <div className="orderadmin-search-item">Rau củ quả</div>
                        <div className="orderadmin-search-item">Trái cây</div>
                        <div className="orderadmin-search-item">Mì</div>
                        <div className="orderadmin-search-item">Sữa</div>
                        <div className="orderadmin-search-item">Trứng</div>
                        <div className="orderadmin-search-item">Nước ngọt</div>
                        <div className="orderadmin-search-item">...</div>
                    </div>
                </div>
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
                                <input id='adminorder-inputsearch' className='orderadmin-content-navbar-text-input-items' placeholder='Nhập thông tin sản phẩm cần tìm' />
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