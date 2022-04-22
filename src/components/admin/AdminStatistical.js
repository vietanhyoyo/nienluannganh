import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../css/adminstatistical.css";
import Charjs from "./listproductadmin/Charjs";
import Chart2 from "./listproductadmin/Chart2";
const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};
export default function AdminStatistical() {
  // Sản phẩm (Dưa leo không hột , Dưa hấu màu tím ...vV)
  const [product, setProduct] = useState([
    {
      tensanpham: "",
      loaisanpham: { tenloaisanpham: "" },
      hinhanh: ["", ""],
      daban: 0,
    },
  ]);
  // Còn lại trong kho
  var countSanPhamconlai = 0;
  // Bán được
  for (let i = 0; i < product.length; i++) {
    countSanPhamconlai += product[i].soluong;
  }

  const [statistical, setStatistical] = useState([
    {
      _id: "",
      ngay: "",
      tien: 0,
      sosanphamdaban: 0,
    },
    {
      _id: "",
      ngay: "",
      tien: 0,
      sosanphamdaban: 0,
    },
  ]);
  // Doanh thu hôm nay phần tử cuối của mảng.
  
  let lasitem_statistical = statistical[statistical.length - 1];
  let lasitem_statistical1 = statistical[statistical.length - 2];
 
 
  const today = new Date();
  const homnay = getFormattedDate(today);
  
  function getFormattedDate(date) {
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;
    return year + "-" + month + "-" + day;
  }
  
 
  

  const ngaysinhmacdinh = getFormattedDate(today)
  
  // Tổng số sản phẩm đang bán
  const [typeproduct, setTypeproduct] = useState([{}]);
  // Tổng số loại sán phẩm
  const counttype = typeproduct.length;
  let mangdasapxep;
  let top10sanpham;
  let thangdaudan;
  if (product.length > 1) {
    mangdasapxep = product.sort(function (a, b) {
      if (a.daban > b.daban) return -1;
      if (a.daban < b.daban) return 1;
      return 0;
    });
    top10sanpham = mangdasapxep.slice(0, 10);
    thangdaudan = top10sanpham[0];
  } else {
    thangdaudan = product[0];
  }
  

  // Sản phẩm
  const a = () =>
    axios
      .get("/products/sanpham")
      .then((Response) => Response.data)
      .then((Response) => {
        setProduct(Response);
      });
  // Loại sản phẩm
  const b = () =>
    axios
      .get("/statistical/danhsachdoanhso")
      .then((Response) => Response.data)
      .then((Response) => {
        setStatistical(Response);
      });
  const c = () =>
    axios
      .get("/products/loaisanpham")
      .then((Response) => Response.data)
      .then((Response) => {
        setTypeproduct(Response);
      });
  useEffect(() => {
    a();
    b();
    c();
  }, []);

  const [topproduct, setTopproduct] = useState({
    tensanpham: "",
    loaisanpham: { tenloaisanpham: "" },
    hinhanh: ["", ""],
    daban: 0,
  });
  const [indexproduct, setIndexproduct] = useState(0);

  if (indexproduct < 0) {
    setIndexproduct(9);
  }
  if (indexproduct > 9) {
    setIndexproduct(0);
  }

  const [chart, setChart] = useState(1);

  const [chooseday, setChooseday] = useState(ngaysinhmacdinh);
  
   
  for(let i=0;i<statistical.length;i++){
    const date = new Date(statistical[i].ngay)
    const a = getFormattedDate(date)
    if(a === chooseday){
      lasitem_statistical = statistical[i];
      lasitem_statistical1 = statistical[i-1]
    }
  }
  const doanhthu =
  ((lasitem_statistical.tien - lasitem_statistical1.tien) /
    lasitem_statistical1.tien) *
  100;
  const sanphambanduoc =
  ((lasitem_statistical.sosanphamdaban -
    lasitem_statistical1.sosanphamdaban) /
    lasitem_statistical1.sosanphamdaban) *
  100;
  return (
    <div className="AdminStatistical__app">
      {/* Div thống kê và  các nút chức năng */}
      <div className="AdminStatistical__app--title">
        {/* Chữ thống kê */}
        <div className="AdminStatistical__app--title-text">
          <p className="AdminStatistical__app--title-items-title AdminStatistical__app--title-items-title">
            {" "}
            Thống kê{" "}
          </p>
          <p className="AdminStatistical__app--title-items-text">
            {" "}
            Xin chào Thanh Điền , Chúc bạn một ngày tốt lành
          </p>
        </div>

        {/* Div bên phải chữ thống kê */}
        <div className="AdminStatistical__app--title-use">
          <p className="AdminStatistical__app--title-use-icon"></p>

          <div className="button-80">
             <input
              type="date"
              defaultValue={ngaysinhmacdinh}
              className="choose-day-adminstatistical"
              max={homnay}
              min={"2022-01-01"}
              onChange={(e) => {
                setChooseday(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* Div tổng content */}
      <div className="AdminStatistical__app--content">
        {/* Div bao 4 thẻ doanh thu */}
        <div className="AdminStatistical__app--content-table">
          {/* Thẻ doanh thu */}
          <div
            className="AdminStatistical__app--content-table-items"
            title={formatNumber(lasitem_statistical1.tien)}
          >
            {/* Content thẻ doanh thu */}
            <div className="AdminStatistical__app--content-table-items-content">
              <div className="AdminStatistical__app--content-table-items-content-items">
                Doanh thu hôm nay
              </div>
              <div
                className="AdminStatistical__app--content-table-items-content-items
                                        AdminStatistical__app--content-table-items-content-items-day "
              >
                Hôm nay
              </div>
            </div>
            <div className="AdminStatistical__app--content-table-items-content">
              <p className="AdminStatistical__app--content-table-items-content-money">
                {formatNumber(lasitem_statistical.tien)}đ
              </p>
            </div>

            <div className="AdminStatistical__app--content-table-items-content">
              <span className="AdminStatistical__app--content-table-items-content-percent">
                <p className="AdminStatistical__app--content-table-items-content-percent-text">
                  {doanhthu.toFixed(0)}%
                </p>
                So với hôm qua
              </span>
            </div>
          </div>
          <div
            className="AdminStatistical__app--content-table-items"
            title={formatNumber(lasitem_statistical1.sosanphamdaban)}
          >
            {/* Content thẻ doanh thu */}
            <div className="AdminStatistical__app--content-table-items-content">
              <div className="AdminStatistical__app--content-table-items-content-items">
                Tổng sản phẩm đã bán được
              </div>
              <div
                className="AdminStatistical__app--content-table-items-content-items
                                        AdminStatistical__app--content-table-items-content-items-day "
              >
                Hôm nay
              </div>
            </div>
            <div className="AdminStatistical__app--content-table-items-content">
              <p className="AdminStatistical__app--content-table-items-content-money">
                {lasitem_statistical.sosanphamdaban} sản phẩm{" "}
              </p>
            </div>

            <div className="AdminStatistical__app--content-table-items-content">
              <span className="AdminStatistical__app--content-table-items-content-percent">
                <p className="AdminStatistical__app--content-table-items-content-percent-text">
                  {sanphambanduoc.toFixed(0)}%
                </p>
                So với hôm qua
              </span>
            </div>
          </div>
          {/* Thẻ doanh thu */}
          <div className="AdminStatistical__app--content-table-items">
            {/* Content thẻ doanh thu */}
            <div className="AdminStatistical__app--content-table-items-content">
              <div className="AdminStatistical__app--content-table-items-content-items">
                Tổng sản phẩm trong kho
              </div>
              <div
                className="AdminStatistical__app--content-table-items-content-items
                                        AdminStatistical__app--content-table-items-content-items-day "
              >
                Tổng Số
              </div>
            </div>
            <div className="AdminStatistical__app--content-table-items-content">
              <p className="AdminStatistical__app--content-table-items-content-money">
                {countSanPhamconlai} sản phẩm
              </p>
            </div>

            <div className="AdminStatistical__app--content-table-items-content">
              <span className="AdminStatistical__app--content-table-items-content-percent">
                <p className="AdminStatistical__app--content-table-items-content-percent-text">
                  - 20%
                </p>
                Tổng số còn lại
              </span>
            </div>
          </div>
          <div className="AdminStatistical__app--content-table-items">
            {/* Content thẻ doanh thu */}
            <div className="AdminStatistical__app--content-table-items-content">
              <div className="AdminStatistical__app--content-table-items-content-items">
                Tổng loại sản phẩm đang bán
              </div>
              <div
                className="AdminStatistical__app--content-table-items-content-items
                                        AdminStatistical__app--content-table-items-content-items-day "
              >
                Tổng số
              </div>
            </div>
            <div className="AdminStatistical__app--content-table-items-content">
              <p className="AdminStatistical__app--content-table-items-content-money">
                {counttype} loại
              </p>
            </div>

            <div className="AdminStatistical__app--content-table-items-content">
              <span className="AdminStatistical__app--content-table-items-content-percent">
                <p className="AdminStatistical__app--content-table-items-content-percent-text">
                  +2 loại
                </p>
                Tổng số sản phẩm đã bán
              </span>
            </div>
          </div>
        </div>
        {/* DIV CHART */}
        <div className="AdminStatistical__app--content-chart">
          <div className="AdminStatistical__app--content-chart-items">
            {/* CHART */}
            <div className="AdminStatistical__app--content-chart-items-content">
              <div className="AdminStatistical__app--content-chart-items-content-item">
                <select 
                  className="select-adminchart"
                  onChange={(e) => {
                    setChart(Number(e.target.value));
                  }}
                >
                  <option value={2}> Năm </option>
                  <option value={1} selected> Tháng </option>
                </select>
                {chart === 1 ?<Chart2 />:<Charjs doanhthu={statistical} />  }
              </div>
            </div>
          </div>
          {/* DIV product */}
          <div className="AdminStatistical__app--content-chart-product">
            {/* TITLE */}
            <div className="AdminStatistical__app--content-chart-product-title">
              <h4 className="AdminStatistical__app--content-chart-product-title-text">
                <i className="fa-solid fa-truck-ramp-box AdminStatistical__app--content-chart-product-title-text-icon"></i>
                TOP 10 SẢN PHẨM BÁN NHIỀU NHẤT
              </h4>
            </div>
            {/* Content */}
            <div className="AdminStatistical__app--content-chart-product-content">
              {/* Div con bên trong */}
              <div className="AdminStatistical__app--content-chart-product-content-title">
                <p className="AdminStatistical__app--content-chart-product-content-title-text">
                  {topproduct.tensanpham || thangdaudan.tensanpham}
                </p>
              </div>
              <div className="AdminStatistical__app--content-chart-product-content-image">
                <img
                  src={topproduct.hinhanh[0] || thangdaudan.hinhanh[0]}
                  alt=""
                  className="AdminStatistical__app--content-chart-product-content-image-items"
                />
              </div>
              <div className="AdminStatistical__app--content-chart-product-content-type">
                <p className="AdminStatistical__app--content-chart-product-content-type-text">
                  {topproduct.loaisanpham.tenloaisanpham ||
                    thangdaudan.loaisanpham.tenloaisanpham}
                </p>
              </div>
              <div className="AdminStatistical__app--content-chart-product-content-price">
                <p className="AdminStatistical__app--content-chart-product-content-price-text">
                  Số lượng đã bán: {topproduct.daban || thangdaudan.daban}
                </p>
              </div>
            </div>
            <div className="AdminStatistical__app--content-chart-product-button">
              <button
                className="snip1585"
                onClick={() => {
                  setIndexproduct(indexproduct - 1);
                  setTopproduct(top10sanpham[indexproduct]);
                }}
              >
                <i className="fa-solid fa-angle-left"></i>
              </button>
              <button
                className="snip1585"
                onClick={() => {
                  setIndexproduct(indexproduct + 1);
                  setTopproduct(top10sanpham[indexproduct]);
                }}
              >
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
