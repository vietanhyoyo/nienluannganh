import '../../../css/adminproductedit.css'
import axios from 'axios';
import { useState, useEffect, memo } from 'react';

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
        hinhanh: []
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

    /**Lay loai san pham */
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
        console.log(file);
        
        if (file === null) {
            console.log('them san pham')
            axios.post('/products/suasanpham', { product: product })
                .then(response => response.data)
                .then(response => {
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
                            alert('Đã cập nhật sản phẩm!');
                        });
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className='adminproductedit'>
            <div className='adminproductedit__turnoff' onClick={props.onUnShow}></div>
            <div className='adminproductedit__box'>
                <div className='adminproductedit__header'>
                    <span>Chỉnh sửa sản phẩm</span>
                    <span className='adminproductedit__close' onClick={props.onUnShow}>Đóng</span>
                </div>
                <div className='adminproductedit__body'>
                    <div className="admin__add-product">
                        <div className="admin__addproduct-app">
                            <h3 className='admin__addproduct-title'> <p className='addproduct__admin-icon'><i className="fa-solid fa-circle-question"></i></p>  Thêm hàng hóa</h3>
                            <form name="admin__addproduct" action='#' encType='multipart/form-data'>
                                <div className='admin__addproduct-form'>
                                    <div className='admin__form-addproduct'>
                                        <div className='admin__addproduct-divinputtext'>
                                            <label htmlFor='name-inputext'>Tên sản phẩm</label>
                                            <input
                                                type='text' id='name-inputext'
                                                className='admin__addproduct-inputtext'
                                                name='admin__product--name-product'
                                                value={product.tensanpham}
                                                onChange={e => setProduct(prev => ({ ...prev, tensanpham: e.target.value }))}
                                            />
                                        </div>
                                    </div>
                                    <div className='admin__infomation-addproduct'>
                                        <h3 className='admin__addproduct-formtitle'>Loại sản phẩm</h3>
                                        <p className='admin__addproduct-formtext'>Chọn loại cho sản phẩm</p>
                                        <select
                                            className='admin__addproduct--select-type'
                                            name='admin__product-select'
                                            value={product.loaisanpham}
                                            onChange={e => setProduct(prev => ({ ...prev, loaisanpham: e.target.value }))}
                                        >
                                            {dsLoaiSP.map((ele, index) => {
                                                return <option key={index} value={ele._id}>{ele.tenloaisanpham}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className='admin__addproduct-form'>
                                    <div className='admin__infomation-addproduct'>
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
                                <div className='admin__addproduct-form'>
                                    <div className='admin__form-addproduct'>
                                        <div className='admin__addproduct-divinputtext'>
                                            <label htmlFor='textare-inputext'>Mô tả sản phẩm</label>
                                            <textarea id='admin__product-textare' name='admin__product-textare'
                                                rows="4" cols="50" placeholder="Ví dụ ..."
                                                value={product.mota}
                                                onChange={e => setProduct(prev => ({ ...prev, mota: e.target.value }))}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className='admin__form-addproduct admin__form-addproduct--group'>
                                        <div className='admin__addproduct-divinputtext'>
                                            <label htmlFor='admin__product-amount'>Số lượng</label>
                                            <input type='text' id='amount-inputext'
                                                className='admin__addproduct-inputtext admin__addproduct-inputtext--short'
                                                name='admin__product-amount'
                                                value={product.soluong}
                                                onChange={e => setProduct(prev => ({ ...prev, soluong: Number(e.target.value) }))} />
                                        </div>
                                        <div className='admin__addproduct-divinputtext'>
                                            <label htmlFor='admin__input-unit'>Đơn vị</label>
                                            <input type='text'
                                                className='admin__addproduct-inputtext admin__addproduct-inputtext--short'
                                                name='admin__product-unit' value={product.donvitinh}
                                                onChange={e => setProduct(prev => ({ ...prev, donvitinh: e.target.value }))} />
                                        </div>
                                        <div className='admin__addproduct-divinputtext'>
                                            <label htmlFor='price-inputext'>Giá</label>
                                            <input
                                                type='text' id='price-inputext'
                                                className='admin__addproduct-inputtext admin__addproduct-inputtext--short'
                                                name='admin__input--price-product'
                                                value={product.gianiemyet}
                                                onChange={e => setProduct(prev => ({ ...prev, gianiemyet: Number(e.target.value) }))} />
                                        </div>
                                    </div>
                                </div>
                                <div className='admin__addproduct--button-app'>
                                    <div className='admin__addproduct--button-left'>
                                        <button className="snip1582" onClick={e => handleUpdate(e)}>LƯU THAY ĐỔI</button>
                                        <button className="snip1582">HỦY BỎ</button>
                                    </div>
                                    <div className='admin__addproduct--button-right'>
                                    </div>
                                </div>
                            </form>
                            <button className="snip1582 addtype-product">THÊM LOẠI SẢN PHẨM</button>
                        </div>
                    </div>
                </div>
                <div className='adminproductedit__footer'></div>
            </div>
        </div>
    )
}

export default memo(AdminProductEdit);