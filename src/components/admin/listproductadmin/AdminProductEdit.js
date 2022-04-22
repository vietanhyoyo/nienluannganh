import '../../../css/adminproductedit.css'
import axios from 'axios';
import { useState, useEffect, memo } from 'react';
import AdminProductAddType from './AdminProductAddType';
import AdminProductTypeImage from './AdminProductTypeImage';

function AdminProductEdit(props) {
    /**id của san pham */
    const idProduct = props.idProductSelect;

    /**UseState san pham */
    const [product, setProduct] = useState({
        tensanpham: '',
        gianiemyet: 0,
        loaisanpham: '',
        soluong: 0,
        mota: '',
        donvitinh: '',
        hinhanh: [],
        sanphamcungloai: []
    });

    /**Hinh anh san pham */
    const [images, setImages] = useState(['']);
    /**File hình nếu có thay đổi */
    const [file, setFile] = useState(null);

    /**Danh sach loai san pham */
    const [dsLoaiSP, setDSLoaiSP] = useState([{
        _id: 'null',
        tenloaisanpham: 'null'
    }]);

    const getAPI = () => {
        axios.get('/products/loaisanpham')
            .then(response => response.data)
            .then(response => {
                setDSLoaiSP(response);
            })
        axios.post('/products/timsanphamtheoid', { _id: idProduct })
            .then(response => response.data)
            .then(response => {
                setProduct(response);
                setImages(response.hinhanh);
            });
    }

    /**Lay loai san pham và san pham*/
    useEffect(() => {
        axios.get('/products/loaisanpham')
            .then(response => response.data)
            .then(response => {
                setDSLoaiSP(response);
            })
        axios.post('/products/timsanphamtheoid', { _id: idProduct })
            .then(response => response.data)
            .then(response => {
                setProduct(response);
                setImages(response.hinhanh);
            });
    }, [idProduct])

    /**Update san pham */
    const handleUpdate = e => {
        e.preventDefault();

        if (file === null) {
            console.log('them san pham')
            axios.post('/products/suasanpham', { product: product })
                .then(response => response.data)
                .then(response => {
                    props.reRender();
                    alert('Đã cập nhật sản phẩm!');
                });
        }
        else {
            let formData = new FormData();
            for (let i = 0; i < file.length; i++) {
                formData.append(`fileImage`, file[i]);
            }
            axios.post('/products/themsanphamhinhanh', formData)
                .then(response => {
                    console.log(response.data)
                    axios.post('/products/suasanpham', { product: product })
                        .then(response => response.data)
                        .then(response => {
                            props.reRender();
                            alert('Đã cập nhật sản phẩm!');
                        });
                })
                .catch(err => console.log(err));
        }
    }

    const xoaSanPhamCungLoai = id => {
        const bool = window.confirm('Bạn muốn xóa id: ' + id);
        if (bool)
            axios.post('/products/xoasanphamcungloai', { id: id })
                .then(res => {
                    console.log(res.data);
                    props.reRender();
                    getAPI();
                })
    }
    const [showThemSanPhamCungLoai, setShowThemSanPhamCungLoai] = useState(false);

    return (
        <div className='adminproductedit'>
            {!showThemSanPhamCungLoai && <div className='adminproductedit__turnoff' onClick={props.onUnShow}></div>}
            {!showThemSanPhamCungLoai && <div className='adminproductedit__box'>
                <div className='adminproductedit__header'>
                    <span>Chỉnh sửa sản phẩm</span>
                    <span className='adminproductedit__close' onClick={props.onUnShow}>Đóng</span>
                </div>
                <div className='adminproductedit__body'>
                    <div className="adminproductedit__content">
                        <h3 className='adminproductedit__topic'>Thay đổi thông tin sản phẩm</h3>
                        <form name="admin__addproduct" action='#' encType='multipart/form-data'>
                            <div className='admin__addproduct-form'>
                                <div className='adminproductedit__row'>
                                    <div className='adminproductedit__col' style={{ width: '33.33%' }}>
                                        <label forHTMl='admin__product--name-product'>Tên sản phẩm</label>
                                        <input
                                            type='text' id='name-inputext'
                                            className='adminproductedit__input'
                                            name='admin__product--name-product'
                                            value={product.tensanpham}
                                            onChange={e => setProduct(prev => ({ ...prev, tensanpham: e.target.value }))}
                                        />
                                        <label forHTMl='admin__product-select'>Loại sản phẩm</label>
                                        <select
                                            className='adminproductedit__input'
                                            name='admin__product-select'
                                            value={product.loaisanpham}
                                            onChange={e => setProduct(prev => ({ ...prev, loaisanpham: e.target.value }))}
                                        >
                                            {dsLoaiSP.map((ele, index) => {
                                                return <option key={index} value={ele._id}>{ele.tenloaisanpham}</option>
                                            })}
                                        </select>
                                        <div className='admin__addproduct-divinputtext'>
                                            <label htmlFor='admin__product-amount'>Số lượng</label>
                                            <input type='text' id='amount-inputext'
                                                className='adminproductedit__input'
                                                name='admin__product-amount'
                                                value={product.soluong}
                                                onChange={e => setProduct(prev => ({ ...prev, soluong: Number(e.target.value) }))} />
                                        </div>
                                        <div className='admin__addproduct-divinputtext'>
                                            <label htmlFor='admin__input-unit'>Đơn vị</label>
                                            <input type='text'
                                                className='adminproductedit__input'
                                                name='admin__product-unit' value={product.donvitinh}
                                                onChange={e => setProduct(prev => ({ ...prev, donvitinh: e.target.value }))} />
                                        </div>
                                        <div className='admin__addproduct-divinputtext'>
                                            <label htmlFor='price-inputext'>Giá</label>
                                            <input
                                                type='text' id='price-inputext'
                                                className='adminproductedit__input'
                                                name='admin__input--price-product'
                                                value={product.gianiemyet}
                                                onChange={e => setProduct(prev => ({ ...prev, gianiemyet: Number(e.target.value) }))} />
                                        </div>
                                    </div>
                                    <div className='adminproductedit__col' style={{ width: '66.66%' }}>
                                        <label htmlFor='admin__product-textarea'>Mô tả sản phẩm</label>
                                        <textarea
                                            className='adminproductedit__textarea'
                                            name='admin__product-textarea'
                                            placeholder="Ví dụ ..."
                                            value={product.mota}
                                            onChange={e => setProduct(prev => ({ ...prev, mota: e.target.value }))}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className='admin__addproduct-form'>
                                <div className='adminproductedit__row'>
                                    <div className='adminproductedit__col' style={{ width: '33.33%' }}>
                                        <h3 className='admin__addproduct-formtitle'>Hình ảnh</h3>
                                        <p className='admin__addproduct-formtext'>Upload hình của sản phẩm</p>
                                        <input type='file'
                                            id='file-inputfile'
                                            name="admin__product-file"
                                            multiple
                                            onChange={event => {
                                                const file_data = event.target.files;
                                                setFile(file_data);

                                                let imgs = [];
                                                const imgArray = [];
                                                for (let i = 0; i < file_data.length; i++) {
                                                    imgArray.push(URL.createObjectURL(file_data[i]));

                                                    const str = 'http://localhost:5001/?id=' + file_data[i].name;
                                                    imgs.push(str);
                                                }

                                                /**useState san pham */
                                                setProduct(prev => ({ ...prev, hinhanh: imgs }))
                                                /**img hien thi hinh anh */
                                                setImages(imgArray);
                                            }}

                                        />
                                    </div>
                                    <div className='adminproductedit__col'>
                                        <div className='admin__infomation-addproduct admin__infomation-addproduct--image'>
                                            {images.map((ele, index) => {
                                                return <img
                                                    key={index}
                                                    className='admin__addproduct-image'
                                                    src={ele} alt='phot'
                                                />
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='admin__addproduct-form'>
                                <div className='adminproductedit__row'>
                                    <div className='adminproductedit__col' style={{ width: '33.33%' }}>
                                        <h3 className='admin__addproduct-formtitle'>Thêm đơn vị mua</h3>
                                        <p className='admin__addproduct-formtext'>Thêm lựa chọn cho khách hàng</p>
                                        <div className="adminproductedit__btn--small"
                                            onClick={e => {
                                                e.preventDefault();
                                                setShowThemSanPhamCungLoai(true);
                                            }}>THÊM LOẠI SẢN PHẨM</div>
                                    </div>
                                    <div className='adminproductedit__col'>
                                        <div className='admin__form-addproduct  admin__infomation-addproduct--image'>
                                            <div className='admin__form-addproduct__imageType'>
                                                {product.sanphamcungloai.map((ele, index) => {
                                                    if (ele !== idProduct)
                                                        return <AdminProductTypeImage
                                                            key={index}
                                                            idProduct={ele}
                                                            onDelete={() => xoaSanPhamCungLoai(ele)}
                                                        />
                                                    else return <div key={index}></div>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='admin__addproduct--button-app'>
                                <div className='admin__addproduct--button-left'>
                                    <button className="snip1582" onClick={e => handleUpdate(e)}>LƯU THAY ĐỔI</button>
                                    <button className="snip1582" onClick={e => {
                                        e.preventDefault();
                                        props.onUnShow();
                                    }}>HỦY BỎ</button>
                                </div>
                                <div className='admin__addproduct--button-right'>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='adminproductedit__footer'></div>
            </div>}
            {showThemSanPhamCungLoai &&
                <AdminProductAddType
                    onUnShow={() => setShowThemSanPhamCungLoai(false)}
                    ProductSelect={product}
                    reRender={getAPI}
                />
            }
        </div>
    )
}

export default memo(AdminProductEdit);