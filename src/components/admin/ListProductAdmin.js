import '../../css/listproductadmin.css' 
import AdminProductItem from './listproductadmin/AdminProductItem';
import {useEffect, useState} from 'react'
import axios from 'axios'
function OrderAdmin(){
    
   

    const [product,setProduct] = useState([{
            id    : '',
            tensanpham  : '',
            loaihang  : '',
            hinhanh : '',
            gianiemyet : 0,
            soluong: 0,
            donvitinh  :  '',
            loaisanpham : {
                tenloaisanpham : ''
            }
    }]);

   const a = () => axios.get("/products/sanpham")
            .then(res => res.data)
            .then(res => {
                setProduct(res);
                console.log(res);
            })
            .catch(function (error) {
                console.log(error);
            });

            useEffect(()=>{
                a()
            },[])
   
         
    return(
        <div className="OrderAdmin">
            {/* Div tổng */}
          <div className="orderadmin-app">
                {/* Div trên */}
             <div className="orderadmin-header">
                    {/* Div chữ sản phẩm */}
                <div className="orderadmin-title">
                <p className="orderamin-title-icon"><i className="fa-solid fa-boxes-stacked"></i></p>
                    <h3 className="orderamin-title-text">
                        {/* icon và text */}
                        Hàng hóa
                    </h3>
                </div>
                
                {/* Search */}
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
                  {/* Div dưới */}
             <div className="orderadmin-content">
                {/* Search text */}
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
                                <input id='adminorder-inputsearch' className='orderadmin-content-navbar-text-input-items' placeholder='Nhập thông tin sản phẩm cần tìm'/>
                            </p>
                        </div>
                </div>

                {/* Div product header */}
                <div className="admin-product-header">
       
                   <div className="admin-product-header-item">Ảnh sản phẩm</div>
                   <div className="admin-product-header-item">Tên sản phẩm</div>
                   <div className="admin-product-header-item">Loại sản phẩm</div>
                   <div className="admin-product-header-item">Số lượng còn lại</div>
                   <div className="admin-product-header-item">Giá bán</div>
                   <div className="admin-product-header-item">Quản lý</div>
                </div>
                {/* Div product*/}
                {product.map((productitem,index)=>{
                    return(
                        <AdminProductItem
                            key= {index}
                            product = {productitem}
                        />
                    )
                })}



             </div>
          </div>

        </div>    
    )
}

export default OrderAdmin;