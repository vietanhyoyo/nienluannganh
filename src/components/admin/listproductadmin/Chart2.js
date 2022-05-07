import React, { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";
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
  const [doanhthu, setdoanhthu] = useState([
    {
      ngay: "",
      tien: 0,
      sosanphamdaban: 0,
    },
  ]);
  const b = () =>
    axios
      .get("/statistical/danhsachdoanhso")
      .then((Response) => Response.data)
      .then((Response) => {
        setdoanhthu(Response);
      });

  useEffect(() => {
    b();
  }, []);
  let labels = [];
  const d = new Date();
  const selectthang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const thangcurren = selectthang.slice(0, d.getMonth() + 1);
  const [aloha, setAloha] = useState(d.getMonth()+1);

  const chan = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  const thang2 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
  ];
  const le = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const today = new Date();
  if (aloha === today.getMonth() + 1) {
    if (
      aloha === 1 ||
      aloha === 3 ||
      aloha === 5 ||
      aloha === 7 ||
      aloha === 8 ||
      aloha === 10 ||
      aloha === 12
    ) {
      labels = le.slice(0, today.getDate());
    }
    if (aloha === 2) {
      labels = thang2.slice(0, today.getDate());
    }
    if (aloha === 4 || aloha === 6 || aloha === 9 || aloha === 11) {
      labels = chan.slice(0, today.getDate());
    }
  } else {
    if (
      aloha === 1 ||
      aloha === 3 ||
      aloha === 5 ||
      aloha === 7 ||
      aloha === 8 ||
      aloha === 10 ||
      aloha === 12
    ) {
      labels = le;
    }
    if (aloha === 2) {
      labels = thang2;
    }
    if (aloha === 4 || aloha === 6 || aloha === 9 || aloha === 11) {
      labels = chan;
    }
  }

  const mangdoanhthutheongay = [];

  for (let i = 0; i < doanhthu.length; i++) {
    const ngaydoanhthu = new Date(doanhthu[i].ngay);
    if (aloha === ngaydoanhthu.getMonth() + 1) {
      mangdoanhthutheongay.push(doanhthu[i]);
    }
  }
  mangdoanhthutheongay.sort(function(a, b) {
    if (a.ngay > b.ngay) return 1;
    if (a.ngay < b.ngay) return -1;
    return 0;
});


  const data = {
    labels,
    datasets: [
      {
        label: "Doanh thu",
        data: mangdoanhthutheongay.map((c) => c.tien),
        borderColor: "rgb(10, 161, 221)",
        backgroundColor: "white",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "BIỂU ĐỒ DOANH THU TỪNG NGÀY TRONG THÁNG " + aloha,
      },
    },
  };

  return (
    <div>
      <div className="div-chart2">
        <p>Tháng </p>
        <select className="div-chart2-select"
          defaultValue={aloha}
          onChange={(e) => {
            setAloha(Number(e.target.value));
          }}
        >
          {thangcurren.map((a, index) => {
            return (
              <option key={index} value={a}>
                {a}
              </option>
            );
          })}
        </select>
      </div>

      <Line options={options} data={data} />
    </div>
  );
}

export default Chart2;
