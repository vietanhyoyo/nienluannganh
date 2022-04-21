import React, { useEffect, useState } from 'react'
import '../../../css/charjsproducts.css'
import { faker } from '@faker-js/faker';
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

    const [propsa,setPropsa] = useState([{}])

    const b = () => axios.get('/statistical/danhsachdoanhso')
    .then(Response => Response.data)
    .then(Response => {
      setPropsa(Response)
    })
    
    useEffect(()=> {
      b()
    },[])

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
  const labels = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'];
   const data = {
    labels,
    datasets: [
      {
        label: 'Doanh thu',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 99999 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
    return (
    <div className='charjs-products'>
      <Line options={options} data={data} className='div-char'/>
    </div>
  )
}

export default Charjs