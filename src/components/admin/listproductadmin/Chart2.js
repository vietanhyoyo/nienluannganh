import React, { useEffect, useState } from 'react'
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
function Chart2() {
  // const [thang, setthang] = useState(0);
  const [doanhthu, setdoanhthu] = useState([{
    ngay: '',
    tien: 0,
    sosanphamdaban: 0
  }]);
  let labels = [];
  const d = new Date();
  const selectthang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const thangcurren = selectthang.slice(0, d.getMonth() + 1)
  const [aloha, setAloha] = useState(1);

  const chan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
  const thang2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
  const le = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
  
  if (aloha === 1 || aloha === 3 || aloha === 5 || aloha === 7 || aloha === 8 || aloha === 10 || aloha === 12) {
    labels = le;
  }
  if (aloha === 2) {
    labels = thang2;
  }
  if (aloha === 4 || aloha === 6 || aloha === 9 || aloha === 11) {
    labels = chan;
  }
  console.log(typeof aloha)
  const b = () => axios.get('/chart2/chart2')
    .then(Response => Response.data)
    .then(Response => {
      setdoanhthu(Response)
    })
  console.log(doanhthu)
  useEffect(() => {
    b()
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'black',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
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
 
  return (
    <div style={{ width: '1000px' }}>
      <select defaultValue={aloha} onChange={(e) => {
        setAloha(Number(e.target.value))
      }}>
        {
          thangcurren.map((a, index) => {

            return (
              <option key={index} value={a}>{a}</option>
            )
          })
        }
      </select>
      <Line options={options} data={data} />
    </div>
  )
}

export default Chart2