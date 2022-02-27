import '../../css/orderadmin.css' 

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
                    <p className="admin-product-header-content">Ảnh sản phẩm</p>
                    <p className="admin-product-header-content">Tên sản phẩm</p>
                    <div className="admin-product-header-content-1">
                        <p className="admin-product-header-content">Loại sản phẩm</p>
                        <p className="admin-product-header-content">Số lượng</p>
                        <p className="admin-product-header-content">Giá tiền</p>
                    </div>      
                </div>
                {/* Div product*/}
                <div className="admin-product-content">
                    <img className="img-product" src="https://product.hstatic.net/200000423303/product/ca-rot-huu-co_051657cb99144443bac8015f6dd34dae_1024x1024.jpg" alt="alo"/>
                    <div className="name-product">Cà rốt</div>
                    <div className="type-product">Rau củ</div>
                    <div className="amount-product">50kg</div>
                    <div className="price-product">25.000đ/kg</div>
                </div>
                <div className="admin-product-content">
                    <img className="img-product" src="https://cf.shopee.vn/file/9bd0837f66d70732a31cee2b8e07853b" alt="alo"/>
                    <div className="name-product">Coca cola lon</div>
                    <div className="type-product">Thức uống có gas</div>
                    <div className="amount-product">20 thùng</div>
                    <div className="price-product">125.000/thùng</div>
                </div>
                <div className="admin-product-content">
                    <img className="img-product" src="http://product.hstatic.net/1000282430/product/tao_xanh_my_grande.jpg" alt="alo"/>
                    <div className="name-product">Táo xanh</div>
                    <div className="type-product">Hoa quả</div>
                    <div className="amount-product">100kg</div>
                    <div className="price-product">86.000đ/kg</div>
                </div>
             </div>
          </div>

        </div>    
    )
}

export default OrderAdmin;