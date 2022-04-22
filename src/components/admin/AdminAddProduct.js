import axios from 'axios';
import { useState, useEffect, memo } from 'react';
import '../../css/adminaddproduct.css'



function AdminAddProduct() {

    /**UseState san phan gui len server */
    const [product, setProduct] = useState({
        tensanpham: '',
        gianiemyet: 0,
        loaisanpham: '',
        soluong: 0,
        mota: '',
        donvitinh: '',
        hinhanh: []
    });

    const [file, setFile] = useState(null);

    const [dsLoaiSP, setDSLoaiSP] = useState([{
        _id: 'null',
        tenloaisanpham: 'null'
    }]);

    useEffect(() => {
        axios.get('/products/loaisanpham')
            .then(response => response.data)
            .then(response => {
                setDSLoaiSP(response);
                setProduct(prev => ({ ...prev, loaisanpham: response[0]._id }));
            })
            .catch(() => { setProduct(prev => prev) })
    }, [])

    /**Submit san phan len server */
    const handleSubmit = (e) => {
        /**Ngăn hành vi mặc định */
        e.preventDefault();
        /**Ép kiểu th   ành formData */
        let formData = new FormData();
        for (let i = 0; i < file.length; i++) {
            formData.append(`fileImage`, file[i]);
        }
        /**Gửi API */
        axios.post('/products/themsanphamhinhanh', formData)
            .then(response => {
                console.log(response.data)
                axios.post('/products/themsanpham', { product })
                    .then(response => {
                        console.log(response.data);
                        alert('Đã thêm sản phẩm!');
                        /**Xóa ô trắng */
                        document.getElementById('name-inputext').value = '';
                        document.getElementById('file-inputfile').value = '';
                        document.getElementById('admin__product-textare').value = '';
                        document.getElementById('amount-inputext').value = '';
                        document.getElementById('unit-inputext').value = '';
                        document.getElementById('price-inputext').value = '';
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="admin__add-product">
            {/* Div tổng */}
            <div className="admin__addproduct-app">
                <h3 className='admin__addproduct-title'> <p className='addproduct__admin-icon'><i className="fa-solid fa-circle-question"></i></p>  Thêm hàng hóa</h3>
                <form name="admin__addproduct" action='#' encType='multipart/form-data'>
                    {/* DIV input */}
                    <div className='admin__addproduct-form'>

                        {/* DIV trái */}
                        <div className='admin__infomation-addproduct'>
                            <h3 className='admin__addproduct-formtitle'>Thông tin sản phẩm</h3>
                            <p className='admin__addproduct-formtext'>Nhập tên phẩm</p>
                        </div>

                        {/* Div phải */}
                        <div className='admin__form-addproduct'>
                            {/* form */}

                            {/* DIV phải items */}
                            <div className='admin__addproduct-divinputtext'>
                                <label htmlFor='name-inputext'>Tên sản phẩm</label>
                                <input
                                    type='text' id='name-inputext'
                                    className='admin__addproduct-inputtext'
                                    name='admin__product--name-product'
                                    onChange={e => setProduct({ ...product, tensanpham: e.target.value })}
                                />
                            </div>

                        </div>

                    </div>
                    {/* DIV input */}
                    <div className='admin__addproduct-form'>

                        {/* DIV trái */}
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
                                    const imgArray = [];
                                    for (let i = 0; i < file_data.length; i++) {
                                        imgArray.push(file_data[i].name);
                                    }
                                    setProduct({ ...product, hinhanh: imgArray });
                                }}
                            />
                        </div>

                        {/* Div phải */}
                        <div className='admin__form-addproduct'>
                            {/* form */}
                            {/* DIV phải items */}
                            <div className='admin__addproduct-divinputtext'>

                                <div className='admin-addproduct--text-file'>
                                    <p className='admin-addproduct--text-fileicon'> <i className="fa-solid fa-reply"></i>  </p> <p className='admin-addproduct--text-filetext'> Sử dụng nút chọn hình để tải hình ảnh lên </p></div>
                            </div>
                            {/* DIV phải items */}
                        </div>

                    </div>
                    {/* DIV input */}
                    <div className='admin__addproduct-form'>

                        {/* DIV trái */}
                        <div className='admin__infomation-addproduct'>
                            <h3 className='admin__addproduct-formtitle'>Loại sản phẩm</h3>
                            <p className='admin__addproduct-formtext'>Chọn loại cho sản phẩm</p>
                            <select className='admin__addproduct--select-type'
                                tabIndex="1" name='admin__product-select'
                                onChange={e => setProduct({ ...product, loaisanpham: e.target.value })}
                            >
                                {dsLoaiSP.map((ele, index) => {
                                    return <option key={index} value={ele._id}>{ele.tenloaisanpham}</option>
                                })}
                            </select>
                        </div>

                        {/* Div phải */}
                        <div className='admin__form-addproduct'>
                            {/* form */}
                            {/* DIV phải items */}
                            <div className='admin__addproduct-divinputtext'>

                                <div className='admin-addproduct--text-file'>
                                    <p className='admin-addproduct--text-fileicon'> <i className="fa-solid fa-reply"></i> </p>
                                    <p className='admin-addproduct--text-filetext'> Chọn loại sản phẩm ở bên cạnh để phân loại sản phẩm </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* DIV input */}
                    <div className='admin__addproduct-form'>

                        {/* DIV trái */}
                        <div className='admin__infomation-addproduct'>
                            <h3 className='admin__addproduct-formtitle'>Mô tả</h3>
                            <p className='admin__addproduct-formtext'>Nhập mô tả cho sản phẩm</p>
                        </div>

                        {/* Div phải */}
                        <div className='admin__form-addproduct'>
                            {/* form */}

                            {/* DIV phải items */}
                            {/* DIV phải items */}
                            <div className='admin__addproduct-divinputtext'>
                                <label htmlFor='textare-inputext'>Mô tả sản phẩm</label>
                                <textarea id='admin__product-textare' name='admin__product-textare'
                                    rows="4" cols="50" placeholder="Ví dụ ..."
                                    onChange={e => setProduct({ ...product, mota: e.target.value })}></textarea>
                            </div>
                        </div>

                    </div>
                    {/* DIV input */}
                    <div className='admin__addproduct-form'>

                        {/* DIV trái */}
                        <div className='admin__infomation-addproduct'>
                            <h3 className='admin__addproduct-formtitle'>Số lượng và đơn vị tính</h3>
                            <p className='admin__addproduct-formtext'>Nhập số lượng hàng bán và đơn vị bán của mặt hàng</p>
                            {/*<div className='admin__addproduct__buttonAddCost'>Thêm đơn vị tính</div>*/}
                        </div>
                        <div className='admin__form-addproduct admin__form-addproduct--group'>
                            <div className='admin__addproduct-divinputtext'>
                                <label htmlFor='admin__product-amount'>Số lượng</label>
                                <input type='text' id='amount-inputext'
                                    className='admin__addproduct-inputtext admin__addproduct-inputtext--short'
                                    name='admin__product-amount'
                                    onChange={e => setProduct({ ...product, soluong: Number(e.target.value) })} />
                            </div>
                            <div className='admin__addproduct-divinputtext'>
                                <label htmlFor='admin__input-unit'>Đơn vị</label>
                                <input type='text' id='unit-inputext'
                                    className='admin__addproduct-inputtext admin__addproduct-inputtext--short'
                                    name='admin__product-unit'
                                    onChange={e => setProduct({ ...product, donvitinh: e.target.value })} />
                            </div>
                            <div className='admin__addproduct-divinputtext'>
                                <label htmlFor='price-inputext'>Giá</label>
                                <input
                                    type='text' id='price-inputext'
                                    className='admin__addproduct-inputtext admin__addproduct-inputtext--short'
                                    name='admin__input--price-product'
                                    onChange={e => setProduct({ ...product, gianiemyet: Number(e.target.value) })}
                                />
                            </div>
                        </div>

                    </div>

                    <div className='admin__addproduct--button-app'>
                        <div className='admin__addproduct--button-left'>
                            <button className="snip1582" onClick={(e) => handleSubmit(e)} >THÊM</button>
                            <button className="snip1582">HỦY BỎ</button>
                        </div>
                        <div className='admin__addproduct--button-right'>
                        </div>

                    </div>

                </form>
                <button className="snip1582 addtype-product">THÊM LOẠI SẢN PHẨM</button>

            </div>

        </div>
    )
}

export default memo(AdminAddProduct);