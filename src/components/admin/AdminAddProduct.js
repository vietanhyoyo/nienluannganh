import '../../css/adminaddproduct.css'


function AdminAddProduct(){
    
    return(
        <div className="admin__add-product">
                    {/* Div tổng */}
                <div className="admin__addproduct-app">
                    <h3 className='admin__addproduct-title'> <p className='addproduct__admin-icon'><i class="fa-solid fa-circle-question"></i></p>  Thêm hàng hóa</h3>
                    <form name="admin__addproduct">
                        {/* DIV input */}
                    <div className='admin__addproduct-form'>
                           
                            {/* DIV trái */}
                        <div className='admin__infomation-addproduct'>
                        <h3 className='admin__addproduct-formtitle'>Thông tin sản phẩm</h3>
                        <p className='admin__addproduct-formtext'>Nhập tên, giá sản phẩm</p>
                        </div> 
                       
                            {/* Div phải */}
                        <div className='admin__form-addproduct'>
                                {/* form */}
                       
                                {/* DIV phải items */}
                            <div className='admin__addproduct-divinputtext'>
                                <label for='name-inputext'>Tên sản phẩm</label> 
                                <input type='text' id='name-inputext' className='admin__addproduct-inputtext' name='admin__product--name-product'/>
                            </div>
                                {/* DIV phải items */}
                            <div className='admin__addproduct-divinputtext'>
                                <label for='price-inputext'>Giá</label> 
                                <input type='text' id='price-inputext' className='admin__addproduct-inputtext' name='admin__input--price-product' />
                                
                            </div>    
                        </div>

                    </div>
                      {/* DIV input */}
                    <div className='admin__addproduct-form'>
                           
                            {/* DIV trái */}
                        <div className='admin__infomation-addproduct'>
                        <h3 className='admin__addproduct-formtitle'>Hình ảnh</h3>
                        <p className='admin__addproduct-formtext'>Upload hình của sản phẩm</p>
                        <input type='file' id='file-inputfile' name="admin__product-file"/>
                        </div> 
                       
                            {/* Div phải */}
                        <div className='admin__form-addproduct'>
                                {/* form */}
                                {/* DIV phải items */}
                            <div className='admin__addproduct-divinputtext'>
                           
                            <div className='admin-addproduct--text-file'>
                             <p className='admin-addproduct--text-fileicon'> <i class="fa-solid fa-reply"></i>  </p> <p className='admin-addproduct--text-filetext'> Sử dụng nút chọn hình để tải hình ảnh lên </p></div>     
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
                       <select className='admin__addproduct--select-type' tabindex="1" name='admin__product-select'>
                            <option> Chọn loại </option>
                            <option> Rau củ </option>
                            <option> Nước ngọt </option>
                            <option> Thực phẩm </option>
                            <option> Hoa quả </option>
                       </select>
                       </div> 
                      
                           {/* Div phải */}
                       <div className='admin__form-addproduct'>
                               {/* form */}
                               {/* DIV phải items */}
                           <div className='admin__addproduct-divinputtext'>
                          
                           <div className='admin-addproduct--text-file'>
                                 <p className='admin-addproduct--text-fileicon'> <i class="fa-solid fa-reply"></i> </p>
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
                                <label for='textare-inputext'>Mô tả sản phẩm</label> 
                                <textarea id='admin__product-textare' name='admin__product-textare' rows="4" cols="50" placeholder="Ví dụ ..."  ></textarea>
                            </div>    
                        </div>

                    </div>
                        {/* DIV input */}
                        <div className='admin__addproduct-form'>
                                                
                           {/* DIV trái */}
                       <div className='admin__infomation-addproduct'>
                       <h3 className='admin__addproduct-formtitle'>Số lượng và đơn vị tính</h3>
                       <p className='admin__addproduct-formtext'>Nhập số lượng hàng bán và đơn vị bán của mặt hàng</p>
                       
                       </div> 
                      
                           {/* Div phải */}
                       <div className='admin__form-addproduct'>
                               {/* form */}
                               {/* DIV phải items */}
                       
                           <div className='admin__addproduct-divinputtext'>
                                <label for='admin__product-amount'>Số lượng</label> 
                                <input type='text' id='amount-inputext' className='admin__addproduct-inputtext' name='admin__product-amount'/>
                            </div>
                                {/* DIV phải items */}
                            <div className='admin__addproduct-divinputtext'>
                                <label for='admin__input-unit'>Đơn vị</label> 
                                <input type='text' id='unit-inputext' className='admin__addproduct-inputtext' name='admin__product-unit'/>               
                            </div>     
                       </div>
                   </div>
                
                    <div className='admin__addproduct--button-app'>
                        <div className='admin__addproduct--button-left'>
                        <button class="snip1582">THÊM</button> 
                        <button class="snip1582">HỦY BỎ</button>
                        </div>
                    
                        <div className='admin__addproduct--button-right'>

                       
                        </div>

                    </div>
                
                </form>
                <button class="snip1582 addtype-product">THÊM LOẠI SẢN PHẨM</button>

                </div>
            
        </div>
    )
}

export default AdminAddProduct;