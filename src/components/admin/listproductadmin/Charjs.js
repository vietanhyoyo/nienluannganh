  import React, { useEffect, useState } from 'react'
  import '../../../css/charjsproducts.css'
  import {
      Chart as ChartJS,
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend,
    } from 'chart.js';
    import { Line } from 'react-chartjs-2';
  import axios from 'axios';
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );


  

function Charjs(props) {
  var DoanhThu = [0,0,0,0,0,0,0,0,0,0,0,0]
  var tinhtientrongthang1 =0
  var tinhtientrongthang2 =0
  var tinhtientrongthang3 =0
  var tinhtientrongthang4 =0
  var tinhtientrongthang5 =0
  var tinhtientrongthang6 =0
  var tinhtientrongthang7 =0
  var tinhtientrongthang8 =0
  var tinhtientrongthang9 =0
  var tinhtientrongthang10 =0
  var tinhtientrongthang11 =0
  var tinhtientrongthang12 =0

 
   props.doanhthu.map(a => {
      const d = new Date(a.ngay);
        switch(d.getMonth()){
          case 0:
              tinhtientrongthang1 += a.tien;
              DoanhThu[d.getMonth()]=tinhtientrongthang1;
          break;
          case 1 :
            tinhtientrongthang2 += a.tien;
            DoanhThu[d.getMonth()]=tinhtientrongthang2;
          break;
          case 2 :
            tinhtientrongthang3 += a.tien;
            DoanhThu[d.getMonth()]=tinhtientrongthang3;
          break;
          case 3 :
            tinhtientrongthang4 += a.tien;
            DoanhThu[d.getMonth()]=tinhtientrongthang4;
          break;
          case 4 :
            tinhtientrongthang5 += a.tien;
            DoanhThu[d.getMonth()]=tinhtientrongthang5;
          break;
          case 5 :
            tinhtientrongthang6 += a.tien;
            DoanhThu[d.getMonth()]=tinhtientrongthang6;
          break;
          case 6 :
            tinhtientrongthang7 += a.tien;;
            DoanhThu[d.getMonth()]=tinhtientrongthang7;
          break;
          case 7 :
            tinhtientrongthang8 += a.tien;
            DoanhThu[d.getMonth()]=tinhtientrongthang8;
          break;
          case 8 :
            tinhtientrongthang9 += a.tien;
            DoanhThu[d.getMonth()]=tinhtientrongthang9;
          break;
          case 9 :
            tinhtientrongthang10 += a.tien;
            DoanhThu[d.getMonth()]=tinhtientrongthang10;
          break;
          case 10 :
            tinhtientrongthang11 += a.tien;
            DoanhThu[d.getMonth()]=tinhtientrongthang11;
          break;
          case 11:
            tinhtientrongthang12 += a.tien;
            DoanhThu[d.getMonth()]=tinhtientrongthang12;
          break;
        }
        })
       let count = 0;
        DoanhThu.map(a => {
          if(a > 0){
            count ++
          }
        })
       
   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' 
      },
      title: {
        display: true,
        text: 'Biểu đồ doanh thu cửa hàng theo tháng',
      },
    },
  };


   const mangthang = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'];
   
   const labels = mangthang.slice(0,count);
   
   const data = {
    labels,
    datasets: [
      {
        label: 'Doanh thu',
        data: DoanhThu.map(c=>c),
        borderColor: '#64d275',
        backgroundColor: 'white',
      },
    ],
    
      
    
  };
    return (
    <div className='charjs-products' >
      <Line options={options} data={data} className='div-char'/>
    </div>
  )
}

export default Charjs