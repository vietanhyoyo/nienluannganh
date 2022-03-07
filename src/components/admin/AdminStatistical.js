import '../../css/adminstatistical.css'
import React from "react";
import { Bar  } from "react-chartjs-2";
function AdminStatistical(){
    

    return(
                // DIV tổng
        <div className="AdminStatistical__app">
                    {/* Div title */}
            <div className='AdminStatistical__title'>
            <p className='AdminStatistical__title-text'> THỐNG KÊ</p> 
            <p className='AdminStatistical__title-icon'><i class="fa-solid fa-chart-pie"></i></p>    
            </div>
            
            <div className='AdminStatistical__chart'>
                <div className='AdminStatistical__chart--items'>
                  <p className='AdminStatistical__chart--items-text'>Tổng doanh thu trong 1 ngày</p>  
                  <div className='AdminStatistical__chart--items-chart'>15.000.000đ</div>
                  <p className=''>Làm mới</p>
                    
                </div>
                
            </div>

            
        </div>
    )
}

export default AdminStatistical;
