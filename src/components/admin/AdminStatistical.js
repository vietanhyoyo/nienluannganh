import '../../css/adminstatistical.css'
import React from "react";
//import { Bar  } from "react-chartjs-2";
function AdminStatistical(){
    

    return(
                // DIV tổng
        <div className="AdminStatistical__app">
                    {/* Div title */}
            <div className='AdminStatistical__title'>
            <p className='AdminStatistical__title-text'> THỐNG KÊ</p> 
            <p className='AdminStatistical__title-icon'><i class="fa-solid fa-chart-pie"></i></p>    
            </div>
        
                {/* DIV tổng chart  */}
            <div className='AdminStatistical__chart'>
                {/* DIV chart items */}
                <div className='AdminStatistical__chart--items'>
                  <p className='AdminStatistical__chart--items-text'>TỔNG DOANH THU 1 NGÀY</p>  
                  <div className='AdminStatistical__chart--items-chart' id='AdminStatistical__chart--items-chart-doanhthu'>250.000.000  <p className='AdminStatistical__chart--items-chart-doanhthu-text'>đ</p></div>
                  <p className='AdminStatistical__chart--items-refresh'> <p className='AdminStatistical__chart--items-refresh-icon'><i class="fa-solid fa-rotate-right"></i></p> Làm mới</p>
                </div>
                   {/* DIV chart items */}
                <div className='AdminStatistical__chart--items'>
                  <p className='AdminStatistical__chart--items-text'>TỔNG SẢN PHẨM TRONG KHO</p>  
                  <div className='AdminStatistical__chart--items-chart' id='AdminStatistical__chart--items-chart-phantram'>80  <p className='AdminStatistical__chart--items-chart-phantram-text'>%</p></div>
                  <p className='AdminStatistical__chart--items-refresh'> <p className='AdminStatistical__chart--items-refresh-icon'><i class="fa-solid fa-rotate-right"></i></p> Làm mới</p>
                </div>
                <div className='AdminStatistical__chart--items'>
                  <p className='AdminStatistical__chart--items-text'>TỔNG SỐ LOẠI SẢN PHẨM ĐANG BÁN</p>  
                  <div className='AdminStatistical__chart--items-chart' id='AdminStatistical__chart--items-chart-loaisanpham'>12 <p className='AdminStatistical__chart--items-chart-loaisanpham-text'>loại</p></div>
                  <p className='AdminStatistical__chart--items-refresh'> <p className='AdminStatistical__chart--items-refresh-icon'><i class="fa-solid fa-rotate-right"></i></p> Làm mới</p>
                </div>
                <div className='AdminStatistical__chart--items'>
                  <p className='AdminStatistical__chart--items-text'>TỔNG SẢN PHẨM ĐÃ BÁN ĐƯỢC</p>  
                  <div className='AdminStatistical__chart--items-chart' id='AdminStatistical__chart--items-chart-sanpham'>1250  <p className='AdminStatistical__chart--items-chart-sanpham-text'>sản phẩm</p></div>
                  <p className='AdminStatistical__chart--items-refresh'> <p className='AdminStatistical__chart--items-refresh-icon'><i class="fa-solid fa-rotate-right"></i></p> Làm mới</p>
                </div>
            </div>
            
            <div className='AdminStatistical__app-product'>
            <div className='AdminStatistical__Line-graph'>
                <div className='AdminStatistical__Line-graph--title'>
                    <p className='AdminStatistical__Line-graph--title-text'> Biểu đồ doanh thu </p>
                    <p className='AdminStatistical__Line-graph--title-icon'> <i class="fa-solid fa-chart-line"></i> </p>
                </div>
                <div className='AdminStatistical__Line-graph--chart'>
                </div>

            </div>
            <div className='AdminStatistical__top--product'>
                    <div className='AdminStatistical__top--product-title'>
                        <p className='AdminStatistical__top--product-title-icon'>
                        <i class="fa-solid fa-dolly"></i>
                        </p>
                        <p className='AdminStatistical__top--product-title-text'>
                            TOP SẢN PHẨM BÁN NHIỀU NHẤT
                        </p>    
                    </div>
                    <div className='AdminStatistical__top--product-content'>
                        <p className='AdminStatistical__top--product-content-name'> Tên sản phẩm </p>
                        <img src='' className='AdminStatistical__top--product-content-image'/>
                        <p className='AdminStatistical__top--product-content-type'> Loại sản phẩm </p>
                        <div className='AdminStatistical__top--product-content-button'>
                        <button class="snip1583" > <i class="fa-solid fa-left-long"></i></button>    
                         <button class="snip1583"><i class="fa-solid fa-right-long"></i></button> 
                        </div>
                       
                    </div>
            </div>
            </div>
           

            
            
        </div>
    )
}

export default AdminStatistical;
