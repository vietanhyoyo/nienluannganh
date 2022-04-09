import React from 'react'
import '../../css/adminstatistical.css'
export default function AdminStatistical() {
  return (
    <div className='AdminStatistical__app'>
       {/* Div thống kê và  các nút chức năng */}
        <div className='AdminStatistical__app--title'>
            {/* Chữ thống kê */}
            <div className='AdminStatistical__app--title-text'>
            <p className='AdminStatistical__app--title-items-title AdminStatistical__app--title-items-title'> Thống kê </p>   
            <p className='AdminStatistical__app--title-items-text'> Xin chào Thanh Điền , Chúc bạn một ngày tốt lành</p>
            </div>
            
            {/* Div bên phải chữ thống kê */}
            <div className='AdminStatistical__app--title-use'>
                 <p className='AdminStatistical__app--title-use-icon'>
                     <i className="fa-solid fa-arrows-rotate"></i>   
                 </p>
                
                <div className="button-80">Hôm nay : 18/03</div>
            </div>    
        </div>
        {/* Div tổng content */}
        <div className='AdminStatistical__app--content'>
            {/* Div bao 4 thẻ doanh thu */}
            <div className='AdminStatistical__app--content-table'>
                {/* Thẻ doanh thu */}
                <div className='AdminStatistical__app--content-table-items'>
                    {/* Content thẻ doanh thu */}
                    <div className='AdminStatistical__app--content-table-items-content'>
                        <div className='AdminStatistical__app--content-table-items-content-items'>Doanh thu hôm nay</div>
                        <div className='AdminStatistical__app--content-table-items-content-items
                                        AdminStatistical__app--content-table-items-content-items-day '>
                                        Hôm nay
                        </div>
                    </div>
                    <div className='AdminStatistical__app--content-table-items-content'>
                     <p className='AdminStatistical__app--content-table-items-content-money'>2.500.000đ</p> 
                        </div>
                   
                    <div className='AdminStatistical__app--content-table-items-content'> 
                        <span className='AdminStatistical__app--content-table-items-content-percent'>
                           <p className='AdminStatistical__app--content-table-items-content-percent-text'>
                           +26%
                           </p> 
                            kể từ tháng trước
                        </span>
                        
                   </div>
                </div>
                {/* Thẻ doanh thu */}
                <div className='AdminStatistical__app--content-table-items'>
                    {/* Content thẻ doanh thu */}
                    <div className='AdminStatistical__app--content-table-items-content'>
                        <div className='AdminStatistical__app--content-table-items-content-items'>Tổng sản phẩm trong kho</div>
                        <div className='AdminStatistical__app--content-table-items-content-items
                                        AdminStatistical__app--content-table-items-content-items-day '>
                                         Hôm nay
                        </div>
                    </div>
                    <div className='AdminStatistical__app--content-table-items-content'>
                     <p className='AdminStatistical__app--content-table-items-content-money'>80%</p> 
                        </div>
                   
                    <div className='AdminStatistical__app--content-table-items-content'> 
                        <span className='AdminStatistical__app--content-table-items-content-percent'>
                           <p className='AdminStatistical__app--content-table-items-content-percent-text'>
                           - 20%
                           </p> 
                            Tổng số còn lại
                        </span>
                        
                   </div>
                </div>
                <div className='AdminStatistical__app--content-table-items'>
                    {/* Content thẻ doanh thu */}
                    <div className='AdminStatistical__app--content-table-items-content'>
                        <div className='AdminStatistical__app--content-table-items-content-items'>Tổng loại sản phẩm đang bán</div>
                        <div className='AdminStatistical__app--content-table-items-content-items
                                        AdminStatistical__app--content-table-items-content-items-day '>
                                         Tổng số
                        </div>
                    </div>
                    <div className='AdminStatistical__app--content-table-items-content'>
                     <p className='AdminStatistical__app--content-table-items-content-money'>12 loại</p> 
                        </div>
                   
                    <div className='AdminStatistical__app--content-table-items-content'> 
                        <span className='AdminStatistical__app--content-table-items-content-percent'>
                           <p className='AdminStatistical__app--content-table-items-content-percent-text'>
                           +2 loại
                           </p> 
                            Tổng số sản phẩm đã bán
                        </span>
                        
                   </div>
                </div>
                <div className='AdminStatistical__app--content-table-items'>
                    {/* Content thẻ doanh thu */}
                    <div className='AdminStatistical__app--content-table-items-content'>
                        <div className='AdminStatistical__app--content-table-items-content-items'>Tổng sản phẩm đã bán được</div>
                        <div className='AdminStatistical__app--content-table-items-content-items
                                        AdminStatistical__app--content-table-items-content-items-day '>
                                        Tháng này
                        </div>
                    </div>
                    <div className='AdminStatistical__app--content-table-items-content'>
                     <p className='AdminStatistical__app--content-table-items-content-money'>1415 sản phẩm  </p> 
                        </div>
                   
                    <div className='AdminStatistical__app--content-table-items-content'> 
                        <span className='AdminStatistical__app--content-table-items-content-percent'>
                           <p className='AdminStatistical__app--content-table-items-content-percent-text'>
                           +20%
                           </p> 
                            So với tháng trước
                        </span>        
                   </div>
                </div>
            </div>
                 {/* DIV CHART */}
                 <div className='AdminStatistical__app--content-chart'>
                        <div className='AdminStatistical__app--content-chart-items'>
                            {/* CHART */}
                                <div className='AdminStatistical__app--content-chart-items-text'>
                                   <p className='AdminStatistical__app--content-chart-items-text-content'><b> Biểu đồ doanh thu</b></p> 
                                   <p className='AdminStatistical__app--content-chart-items-text-icon'><i className="fa-solid fa-ellipsis-vertical"></i></p>    
                                </div>
                                <div className='AdminStatistical__app--content-chart-items-content'>
                                    <div className='AdminStatistical__app--content-chart-items-content-item'> </div>
                                </div>
                        </div>
                        {/* DIV product */}
                        <div className='AdminStatistical__app--content-chart-product'>
                                {/* TITLE */}
                                <div className='AdminStatistical__app--content-chart-product-title'>
                                    <h4 className='AdminStatistical__app--content-chart-product-title-text'>
                                   
                                    <i className="fa-solid fa-truck-ramp-box AdminStatistical__app--content-chart-product-title-text-icon"></i> 
                                      TOP SẢN PHẨM BÁN NHIỀU NHẤT
                                    </h4>
                                </div>
                              {/* Content */}
                                <div className='AdminStatistical__app--content-chart-product-content'>
                                    {/* Div con bên trong */}
                                    <div className='AdminStatistical__app--content-chart-product-content-title'>
                                       <p className='AdminStatistical__app--content-chart-product-content-title-text'>
                                           Cải thìa
                                       </p>
                                    </div>
                                    <div className='AdminStatistical__app--content-chart-product-content-image'>
                                        <img src='https://concung.com/img/news/2021/938_cover.png' 
                                        alt='' className='AdminStatistical__app--content-chart-product-content-image-items'/>
                                    </div>
                                    <div className='AdminStatistical__app--content-chart-product-content-type'>
                                        <p className='AdminStatistical__app--content-chart-product-content-type-text'>Rau củ</p>
                                    </div>
                                    <div className='AdminStatistical__app--content-chart-product-content-price'>
                                        <p className='AdminStatistical__app--content-chart-product-content-price-text'>Số lượng : 4530</p>
                                     </div>
                                </div>
                                <div className='AdminStatistical__app--content-chart-product-button'>
                                <button className="snip1585">
                                <i className="fa-solid fa-angle-left"></i>
                                </button>
                                <button className="snip1585">
                                <i className="fa-solid fa-angle-right"></i>
                                </button>

                                </div>
                        </div>


                 </div>


        </div>

    </div>
  )
}
