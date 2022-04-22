import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../css/adminstatistical.css'
import Charjs from './listproductadmin/Charjs'
const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}
export default function AdminStatistical() {
    // Sản phẩm (Dưa leo không hột , Dưa hấu màu tím ...vV) 
    const [product, setProduct] = useState([{}])
    // Còn lại trong kho
    var countSanPhamconlai = 0;
    // Bán được
    for (let i = 0; i < product.length; i++) {
        countSanPhamconlai += product[i].soluong
    }


    const [statistical, setStatistical] = useState([{
        _id: "",
        ngay: "",
        tien: 0,
        sosanphamdaban: 0,
    },{
        _id: "",
        ngay: "",
        tien: 0,
        sosanphamdaban: 0,
    }] )
    // Doanh thu hôm nay phần tử cuối của mảng.


    const lasitem_statistical = statistical[statistical.length - 1]
    const lasitem_statistical1 = statistical[statistical.length - 2]

    const aka = (lasitem_statistical.tien - lasitem_statistical1.tien) / lasitem_statistical1.tien * 100

    const d = new Date(lasitem_statistical.ngay)
    const nam = d.getFullYear();
    const thang = d.getMonth() + 1;
    const ngay = d.getDate();
    const ngaysinh = ngay + '/' + thang + '/' + nam

    // Tổng số sản phẩm đang bán
    const [typeproduct, setTypeproduct] = useState([{}])
    // Tổng số loại sán phẩm
    const counttype = typeproduct.length


    // Sản phẩm
    const a = () => axios.get('/products/sanpham')
        .then(Response => Response.data)
        .then(Response => {
            //setProduct(Response)
        })
    // Loại sản phẩm
    const b = () => axios.get('/statistical/danhsachdoanhso')
        .then(Response => Response.data)
        .then(Response => {
            //setStatistical(Response)
        })
    const c = () => axios.get('/products/loaisanpham')
        .then(Response => Response.data)
        .then(Response => {
            //setTypeproduct(Response)
        })


    useEffect(() => {
        a()
    }, []);
    useEffect(() => {
        b()
    }, [])
    useEffect(() => {
        c()
    }, [])


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

                    </p>

                    <div className="button-80">Hôm nay : {ngaysinh}</div>
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
                            <p className='AdminStatistical__app--content-table-items-content-money'>{formatNumber(lasitem_statistical.tien)}đ</p>
                        </div>

                        <div className='AdminStatistical__app--content-table-items-content'>
                            <span className='AdminStatistical__app--content-table-items-content-percent'>
                                <p className='AdminStatistical__app--content-table-items-content-percent-text'>
                                    {aka}%
                                </p>
                                So với hôm qua
                            </span>

                        </div>
                    </div>
                    <div className='AdminStatistical__app--content-table-items'>
                        {/* Content thẻ doanh thu */}
                        <div className='AdminStatistical__app--content-table-items-content'>
                            <div className='AdminStatistical__app--content-table-items-content-items'>Tổng sản phẩm đã bán được</div>
                            <div className='AdminStatistical__app--content-table-items-content-items
                                        AdminStatistical__app--content-table-items-content-items-day '>
                                Hôm nay
                            </div>
                        </div>
                        <div className='AdminStatistical__app--content-table-items-content'>
                            <p className='AdminStatistical__app--content-table-items-content-money'>{lasitem_statistical.sosanphamdaban} sản phẩm  </p>
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
                    {/* Thẻ doanh thu */}
                    <div className='AdminStatistical__app--content-table-items'>
                        {/* Content thẻ doanh thu */}
                        <div className='AdminStatistical__app--content-table-items-content'>
                            <div className='AdminStatistical__app--content-table-items-content-items'>Tổng sản phẩm trong kho</div>
                            <div className='AdminStatistical__app--content-table-items-content-items
                                        AdminStatistical__app--content-table-items-content-items-day '>
                                Tổng Số
                            </div>
                        </div>
                        <div className='AdminStatistical__app--content-table-items-content'>
                            <p className='AdminStatistical__app--content-table-items-content-money'>{countSanPhamconlai} sản phẩm</p>
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
                            <p className='AdminStatistical__app--content-table-items-content-money'>{counttype} loại</p>
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

                </div>
                {/* DIV CHART */}
                <div className='AdminStatistical__app--content-chart'>
                    <div className='AdminStatistical__app--content-chart-items'>
                        {/* CHART */}
                        <div className='AdminStatistical__app--content-chart-items-content'>
                            <div className='AdminStatistical__app--content-chart-items-content-item'>
                                <Charjs
                                    papa={statistical}
                                />
                            </div>
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
                                    alt='' className='AdminStatistical__app--content-chart-product-content-image-items' />
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
