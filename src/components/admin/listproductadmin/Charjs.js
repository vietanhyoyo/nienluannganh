  import React from 'react'
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
  const today = new Date();
  const a = props.doanhthu
  
  
    for(let i=0;i<a.length;i++){
      const d = new Date(a[i].ngay);
      if(d.getMonth() === 0){
        tinhtientrongthang1 += a[i].tien
        DoanhThu[d.getMonth()] = tinhtientrongthang1
      }
      if(d.getMonth() === 1){
        tinhtientrongthang2 += a[i].tien
        DoanhThu[d.getMonth()] = tinhtientrongthang2
      }
      if(d.getMonth() === 2){
        tinhtientrongthang3 += a[i].tien
        DoanhThu[d.getMonth()] = tinhtientrongthang3
      }
      if(d.getMonth() === 3){
        tinhtientrongthang4 += a[i].tien
        DoanhThu[d.getMonth()] = tinhtientrongthang4
      }
      if(d.getMonth() === 4){
        tinhtientrongthang5 += a[i].tien
        DoanhThu[d.getMonth()] = tinhtientrongthang5
      }
      if(d.getMonth() === 5){
        tinhtientrongthang6 += a[i].tien
        DoanhThu[d.getMonth()] = tinhtientrongthang6
      }
      if(d.getMonth() === 6){
        tinhtientrongthang7 += a[i].tien
        DoanhThu[d.getMonth()] = tinhtientrongthang7
      }
      if(d.getMonth() === 7){
        tinhtientrongthang8 += a[i].tien
        DoanhThu[d.getMonth()] = tinhtientrongthang8
      }
      if(d.getMonth() === 8){
        tinhtientrongthang9 += a[i].tien
        DoanhThu[d.getMonth()] = tinhtientrongthang9
      }
      if(d.getMonth() === 9){
        tinhtientrongthang10 += a[i].tien
        DoanhThu[d.getMonth()] = tinhtientrongthang10
      }
      if(d.getMonth() === 10){
        tinhtientrongthang11 += a[i].tien
        DoanhThu[d.getMonth()] = tinhtientrongthang11
      }
      if(d.getMonth() === 11){
        tinhtientrongthang12 += a[i].tien
        DoanhThu[d.getMonth()] = tinhtientrongthang12
      }
  }

   
       let count = 0;
      for(let i=0;i<DoanhThu.length;i++){
        if(DoanhThu[i]>0){
          count++
        }
      }
       
   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' 
      },
      title: {
        display: true,
        text: 'BI???U ????? DOANH THU T???NG TH??NG TRONG N??M '  + today.getFullYear(  ),
      },
    },
  };


   const mangthang = ['Th??ng 1', 'Th??ng 2', 'Th??ng 3', 'Th??ng 4', 'Th??ng 5', 'Th??ng 6', 'Th??ng 7','Th??ng 8','Th??ng 9','Th??ng 10','Th??ng 11','Th??ng 12'];
   
   const labels = mangthang.slice(0,count);
   
   const data = {
    labels,
    datasets: [
      {
        label: 'Doanh thu',
        data: DoanhThu.map(c=>c),
        borderColor: 'rgb(139, 219, 139)',
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

export default Charjs;