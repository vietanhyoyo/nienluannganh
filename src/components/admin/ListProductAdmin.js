import '../../css/listproductadmin.css' 

function OrderAdmin(){
    return(
        <div className="OrderAdmin">
            {/* Div tổng */}
          <div className="orderadmin-app">
                {/* Div trên */}
             <div className="orderadmin-header">
                    {/* Div chữ sản phẩm */}
                <div className="orderadmin-title">
                <p className="orderamin-title-icon"><i class="fa-solid fa-boxes-stacked"></i></p>
                    <h3 className="orderamin-title-text">
                        {/* icon và text */}
                        Hàng hóa
                    </h3>
                  
                </div>
                
                {/* Search */}
                <div className="orderadmin-search">
                    <div className="orderadmin-search-item"><b>Tất cả sản phẩm</b></div>
                    <div className="orderadmin-search-item">Rau củ</div>
                    <div className="orderadmin-search-item">Hoa quả</div>
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
                    <div className="orderadmin-content-navbar-choose">
                        <p className="orderadmin-content-navbar-choose-p">Tên sản phẩm</p>
                        <p className="orderadmin-content-navbar-choose-icon"><i class="fa-solid fa-angle-down"></i> </p>
                    </div>
                    <div className="orderadmin-content-navbar-text">
                        <p className="orderadmin-content-navbar-text-icon"><i class="fa-solid fa-magnifying-glass"></i></p>
                        <input type="text" className="orderadmin-input-text" tabindex="1" placeholder="Nhập sản phẩm cần tìm"/>
                    </div>
                </div>

                {/* Div product header */}
                <div className="admin-product-header">
                   <div className="admin-product-header-item">Ảnh sản phẩm</div>
                   <div className="admin-product-header-item">Tên sản phẩm</div>
                   <div className="admin-product-header-item">Loại sản phẩm</div>
                   <div className="admin-product-header-item">Số lượng</div>
                   <div className="admin-product-header-item">Giá bán</div>
                   <div className="admin-product-header-item">Quản lý</div>
                </div>
                {/* Div product*/}
                <div className="admin-product-content">
                   <div className="admin-product-header-item"><img src="https://thitbohuunghi.com/wp-content/uploads/2021/06/6gt5cdi_-_imgur_grande.png" alt="Alo"className="admin-product-header-item-img"/></div>
                   <div className="admin-product-header-item">Thịt bò</div>
                   <div className="admin-product-header-item">Loại sản phẩm</div>
                   <div className="admin-product-header-item">Số lượng</div>
                   <div className="admin-product-header-item">Giá bán</div>
                   <div className="admin-product-header-item">Quản lý</div>
                </div>



             </div>
          </div>

        </div>    
    )
}

export default OrderAdmin;