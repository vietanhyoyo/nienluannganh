import axios from 'axios';
import React from 'react'
import { memo } from 'react';
function AdminIconItem(props) {
  const deleteProduct = () => {
    axios.post('/products/xoasanpham', { id: props.IDProduct })
      .then(res => {
        props.reRender();
        console.log(res.data);
      });
  }
  return (
    <div>
      <div className="admin-product-header-item-icon-absolute">
        <p className="admin-product-header-item-icon-absolute-text" onClick={props.onShowPromotion}>
          <i className="fa-solid fa-calendar-plus"></i> Thêm khuyến mãi
        </p>
        <p className="admin-product-header-item-icon-absolute-text" onClick={props.onShowEdit}>
          <i className="fa-solid fa-pen-to-square"></i> Chỉnh sửa
        </p>
        <p className="admin-product-header-item-icon-absolute-text" onClick={deleteProduct}>
          <i className="fa-solid fa-trash-can"></i>  Xóa
        </p>
      </div>

    </div>
  )
}

export default memo(AdminIconItem);