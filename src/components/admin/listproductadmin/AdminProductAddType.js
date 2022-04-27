import '../../../css/adminproductedit.css'
import axios from 'axios';
import { useState, memo } from 'react';

function AdminProductAddType(props) {
    /**id của san pham */
    const idProduct = props.ProductSelect._id;

    /**UseState san pham */
    const [product, setProduct] = useState({
        tensanpham: '',
        gianiemyet: 0,
        loaisanpham: props.ProductSelect.loaisanpham,
        soluong: 0,
        mota: props.ProductSelect.mota,
        donvitinh: '',
        hinhanh: [],
        trangthai: 'Ẩn',
        sanphamcungloai: []
    });

    /**Hinh anh san pham */
    const [images, setImages] = useState(['']);
    /**File hình nếu có thay đổi */
    const [file, setFile] = useState(null);

    /**Update san pham */
    const handleUpdate = e => {
        e.preventDefault();
        /**Kiểm tra */
        if(file === null) {
            alert('Thiếu hình ảnh!');
            return;
        }
        if(product.tensanpham.length < 10){
            alert('Tên sản phẩm không hợp lệ!');
            return;
        }
        if(product.gianiemyet <= 0){
            alert('Thiếu giá niêm yết!');
            return;
        }
        if(product.donvitinh.length < 2){
            alert('Thiếu đơn vị tính!');
            return;
        }
        if(product.soluong < 0){
            alert('Số lượng không hợp lệ!');
            return;
        }
        if (file === null) {
            console.log('them san pham')
            axios.post('/products/themsanphamcungloai', { product, idProduct })
                .then(response => {
                    console.log(response.data);
                    props.reRender();
                    props.onUnShow();
                })
        }
        else {
            let formData = new FormData();
            for (let i = 0; i < file.length; i++) {
                formData.append(`fileImage`, file[i]);
            }
            axios.post('/products/themsanphamhinhanh', formData)
                .then(() => {
                    axios.post('/products/themsanphamcungloai', { product, idProduct })
                        .then(response => {
                            console.log(response.data);
                            props.reRender();
                            props.onUnShow();
                        })
                })
                .catch(err => console.log(err));
        }

    }

    return (
        <div className='adminproductedit'>
            <div className='adminproductedit__turnoff' onClick={props.onUnShow}></div>
            <div className='adminproductedit__box' style={{ width: '900px' }}>
                <div className='adminproductedit__header'>
                    <span>Chỉnh sửa sản phẩm</span>
                    <span className='adminproductedit__close' onClick={props.onUnShow}>Đóng</span>
                </div>
                <div className='adminproductedit__body'>
                    <div className="admin__add-product">
                        <div className="admin__addproduct-app">
                            <h3 className='admin__addproduct-title'>Thêm lựa chọn cho sản phẩm</h3>
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
                                    <div className='admin__form-addproduct admin__form-addproduct--group'>
                                        <div className='admin__addproduct-divinputtext'>
                                            <label htmlFor='admin__product-amount'>Số lượng</label>
                                            <input type='number' id='amount-inputext'
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
                                                type='number' id='price-inputext'
                                                className='admin__addproduct-inputtext admin__addproduct-inputtext--short'
                                                name='admin__input--price-product'
                                                value={product.gianiemyet}
                                                onChange={e => setProduct(prev => ({ ...prev, gianiemyet: Number(e.target.value) }))} />
                                        </div>
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
                </div>
                <div className='adminproductedit__footer'></div>
            </div>
        </div>
    )
}

export default memo(AdminProductAddType);